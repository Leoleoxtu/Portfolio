import { NextResponse } from "next/server";
import { Resend } from "resend";
import { profile } from "@/data/profile";

export const runtime = "nodejs";

const resendApiKey = process.env.RESEND_API_KEY;
const fromEmail = process.env.CONTACT_FROM_EMAIL;
const toEmail = process.env.CONTACT_TO_EMAIL || profile.email;

const resend = resendApiKey ? new Resend(resendApiKey) : null;

interface ContactPayload {
  name?: unknown;
  email?: unknown;
  message?: unknown;
  company?: unknown;
}

function sanitizeText(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function POST(request: Request) {
  if (!resend || !fromEmail) {
    return NextResponse.json(
      {
        error:
          "Contact form is not configured yet. Add RESEND_API_KEY and CONTACT_FROM_EMAIL.",
      },
      { status: 500 }
    );
  }

  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = sanitizeText(payload.name);
  const email = sanitizeText(payload.email).toLowerCase();
  const message = sanitizeText(payload.message);
  const company = sanitizeText(payload.company);

  if (company) {
    return NextResponse.json({ success: true }, { status: 200 });
  }

  if (!name || name.length < 2 || name.length > 80) {
    return NextResponse.json(
      { error: "Please provide a valid name." },
      { status: 400 }
    );
  }

  if (!isValidEmail(email) || email.length > 120) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 400 }
    );
  }

  if (!message || message.length < 10 || message.length > 5000) {
    return NextResponse.json(
      { error: "Please provide a message between 10 and 5000 characters." },
      { status: 400 }
    );
  }

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");

  const { data, error } = await resend.emails.send({
    from: fromEmail,
    to: [toEmail],
    subject: `Portfolio contact from ${name}`,
    replyTo: email,
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #0f172a;">
        <h2 style="margin-bottom: 16px;">New portfolio contact</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Message:</strong></p>
        <div style="padding: 16px; border: 1px solid #e2e8f0; border-radius: 12px; background: #f8fafc;">
          ${safeMessage}
        </div>
      </div>
    `,
    text: `New portfolio contact\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
  });

  if (error) {
    return NextResponse.json(
      { error: "Unable to send the message right now." },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true, id: data?.id }, { status: 200 });
}
