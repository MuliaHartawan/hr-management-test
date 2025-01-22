import { z } from "zod";

export const checkoutPresenceValidation = z.object({
  photo: z.string(),
  location: z.string(),
  notes: z.string(),
});

export type checkoutPresenceValidations = z.infer<
  typeof checkoutPresenceValidation
>;
