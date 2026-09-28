import { z } from "zod";

export const newsletterSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Please enter your name.")
    .max(100, "Please use 100 characters or fewer."),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address.")
    .max(255, "Please use 255 characters or fewer.")
    .transform((value) => value.toLowerCase()),
});
