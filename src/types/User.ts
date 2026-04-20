export type Role = "cultivateur" | "user";

export interface User {
  id: number;
  name: string;
  role: Role;
  email: string;
  contact: string;
  created_at: string;
}
