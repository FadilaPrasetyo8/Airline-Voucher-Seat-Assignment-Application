import { z } from "zod";
import { toDateInputValue } from "@/utils/format";

export const AIRCRAFT_TYPES = ["ATR", "Airbus 320", "Boeing 737 Max"] as const;

export const generateVoucherSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Crew name is required.")
    .max(255, "Crew name must not exceed 255 characters."),
  id: z
    .string()
    .trim()
    .min(1, "Crew ID is required.")
    .max(255, "Crew ID must not exceed 255 characters."),
  flightNumber: z
    .string()
    .trim()
    .min(1, "Flight number is required.")
    .max(255, "Flight number must not exceed 255 characters."),
  date: z
    .string()
    .min(1, "Flight date is required.")
    .refine((value) => !Number.isNaN(Date.parse(value)), {
      message: "Flight date must be a valid date.",
    })
    .refine((value) => value >= toDateInputValue(), {
      message: "Flight date cannot be in the past.",
    }),
  aircraft: z.enum(AIRCRAFT_TYPES, {
    message: "The selected aircraft type is invalid.",
  }),
});

export type GenerateVoucherFormValues = z.infer<typeof generateVoucherSchema>;
