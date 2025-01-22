import { z } from "zod";

export const checkinPresenceValidations = z.object({
  clock_in_photo: z.string().url(),
  clock_in_location: z.string(),
});

export type CheckinPresenceValidations = z.infer<
  typeof checkinPresenceValidations
>;
