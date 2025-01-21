import { Role } from "./role";

export type User = {
  readonly id: string;
  readonly email: string;
  readonly is_active: boolean;
  readonly role: Role;
  readonly created_at: Date;
  readonly updated_at: Date;
};
