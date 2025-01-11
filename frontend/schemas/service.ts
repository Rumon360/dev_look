// schema.ts
import { z } from "zod";

export const servicesSectionSchema = z.object({
  heading: z.string().min(1, "Heading is required"),
  description: z.string().min(1, "Description is required"),
  num_of_projects: z.coerce
    .number()
    .min(0, "Number of projects must be positive")
    .int("Must be a whole number"),
  num_of_awards: z.coerce
    .number()
    .min(0, "Number of awards must be positive")
    .int("Must be a whole number"),
  services: z
    .array(
      z.object({
        name: z.string().min(1, "Service name is required"),
        case_study: z.object({
          title: z.string().min(1, "Case study title is required"),
          image: z.string().url("Must be a valid URL"),
        }),
      })
    )
    .min(1, "At least one service is required"),
});

export type ServicesSectionFormValues = z.infer<typeof servicesSectionSchema>;
