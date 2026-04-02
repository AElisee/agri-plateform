export type Role = "cultivateur" | "user";

export interface User {
  id: number;
  name: string;
  role: Role;
  created_at: string;
}
