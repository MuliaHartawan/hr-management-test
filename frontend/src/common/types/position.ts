import { Department } from "./department";

export type Position = {
  readonly id: number;
  readonly name: string;
  readonly department: Department;
  readonly craeted_at: Date;
  readonly updated_at: Date;
};
