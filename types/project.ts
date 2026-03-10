export type ProjectStatus = "public" | "private" | "in-development";
export type ProjectCategory = "saas" | "data" | "security" | "ai" | "tool";

export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  status: ProjectStatus;
  category: ProjectCategory;
  stack: string[];
  featured: boolean;
  /** GitHub URL — only set for public repos */
  github?: string;
  demo?: string;
  /** Path relative to /public/images/projects/ — e.g. "osteopets.png" */
  thumbnail?: string;
  highlights?: string[];
}
