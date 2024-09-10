export enum Role {
  ROLE_ADMIN = "ROLE_ADMIN",
  ROLE_USER = "ROLE_USER",
  ROLE_MODERATOR = "ROLE_MODERATOR",
}

export interface UserRole {
  label: string;
  value: Role;
}
