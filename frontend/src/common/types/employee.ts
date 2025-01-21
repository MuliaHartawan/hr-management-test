import { Department } from "./department";
import { Position } from "./position";
import { Shift } from "./shift";
import { User } from "./user";

export type Employee = {
  readonly id: string;
  readonly user: User;
  readonly nip: string;
  readonly first_name: string;
  readonly last_name: string;
  readonly department: Department;
  readonly position: Position;
  readonly shift: Shift;
  readonly phone: string;
  readonly address: string;
  readonly join_date: Date;
  readonly created_at: Date;
  readonly updated_at: Date;
};
