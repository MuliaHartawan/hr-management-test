export type Shift = {
  readonly id: string;
  readonly name: string;
  readonly start_time: string;
  readonly end_time: string;
  readonly tolerance_minutes: number;
  readonly created_at: Date;
};
