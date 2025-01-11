import { z } from "zod";

export const workSectionSchema = z.object({
  description: z.string().min(1, "Description is required"),
  years_of_work: z.coerce
    .number()
    .min(0, "Years of work must be positive")
    .int("Must be a whole number"),
  works: z
    .array(
      z.object({
        title: z.string().min(1, "Title is required"),
        image: z.string().url("Must be a valid URL"),
        tags: z
          .array(z.string().min(1, "Tag cannot be empty"))
          .min(1, "At least one tag is required"),
      })
    )
    .min(1, "At least one work item is required"),
});

export type WorkSectionFormValues = z.infer<typeof workSectionSchema>;
