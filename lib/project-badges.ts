import { ProjectActivityStatus, ProjectRepositoryVisibility } from "@/types/project";

export const repositoryVisibilityLabel: Record<ProjectRepositoryVisibility, string> = {
  public: "Public",
  private: "Private",
};

export const repositoryVisibilityVariant: Record<
  ProjectRepositoryVisibility,
  "status-public" | "status-private"
> = {
  public: "status-public",
  private: "status-private",
};

export const activityStatusLabel: Record<ProjectActivityStatus, string> = {
  active: "Active",
  "in-development": "In Development",
  paused: "Pause",
};

export const activityStatusVariant: Record<
  ProjectActivityStatus,
  "status-production" | "status-dev" | "status-paused"
> = {
  active: "status-production",
  "in-development": "status-dev",
  paused: "status-paused",
};
