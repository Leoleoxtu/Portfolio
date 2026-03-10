export type ProjectStatus =
  | "production"
  | "public"
  | "private"
  | "in-development"
  | "paused";

export type ProjectCategory = "saas" | "data" | "security" | "ai" | "tool";
export type ProjectRepositoryVisibility = "public" | "private";
export type ProjectActivityStatus = "active" | "in-development" | "paused";

/**
 * Rich technical sections rendered on the project detail page.
 * All fields are optional — the page only renders sections that have content.
 */
export interface ProjectSections {
  overview?: string[];
  problem?: string;
  solution?: string;
  architecture?: string[];
  challenges?: string[];
  role?: string[];
}

export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  status: ProjectStatus;
  repositoryVisibility: ProjectRepositoryVisibility;
  activityStatus: ProjectActivityStatus;
  category: ProjectCategory;
  stack: string[];
  featured: boolean;
  /** GitHub URL — only set for public repos */
  github?: string;
  demo?: string;
  /** Path relative to /public/images/projects/ — e.g. "osteopets.png" */
  thumbnail?: string;
  highlights?: string[];
  /** Full technical sections for the project detail page */
  sections?: ProjectSections;
}
