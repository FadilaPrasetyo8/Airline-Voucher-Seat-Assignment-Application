"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Search } from "lucide-react";

import { FormField } from "@/components/forms/form-field";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import {
  AIRCRAFT_TYPES,
  generateVoucherSchema,
  type GenerateVoucherFormValues,
} from "@/schemas/generate-voucher.schema";
import { toDateInputValue } from "@/utils/format";

interface FlightSearchFormProps {
  onSubmit: (data: GenerateVoucherFormValues) => void | Promise<void>;
  isLoading?: boolean;
}

export function FlightSearchForm({
  onSubmit,
  isLoading = false,
}: FlightSearchFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<GenerateVoucherFormValues>({
    resolver: zodResolver(generateVoucherSchema),
    defaultValues: {
      name: "",
      id: "",
      flightNumber: "",
      date: "",
    },
  });

  return (
    <Card className="border-white/60 bg-white/90 shadow-xl shadow-blue-900/5 backdrop-blur-sm">
      <CardHeader className="border-b border-border/60">
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
            <Search className="size-5 text-primary" aria-hidden="true" />
          </div>
          <div>
            <CardTitle className="text-xl">Book a Flight</CardTitle>
            <CardDescription>
              Enter your travel details to find available flights
            </CardDescription>
          </div>
        </div>
      </CardHeader>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <CardContent className="space-y-6 pt-2">
          <div className="grid gap-4 sm:grid-cols-2">
            <FormField
              id="name"
              label="Crew Name"
              placeholder="Enter your name"
              required
              error={errors.name?.message}
              {...register("name")}
            />
            <FormField
              id="id"
              label="Crew ID"
              placeholder="Enter your ID"
              required
              error={errors.id?.message}
              {...register("id")}
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <FormField
              id="flightNumber"
              label="Flight Number"
              placeholder="Enter flight number"
              required
              error={errors.flightNumber?.message}
              {...register("flightNumber")}
            />
            <FormField
              id="date"
              label="Flight Date"
              type="date"
              min={toDateInputValue()}
              required
              error={errors.date?.message}
              {...register("date")}
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="aircraft">
                Aircraft <span className="text-red-500">*</span>
              </Label>
              <select
                id="aircraft"
                aria-invalid={!!errors.aircraft}
                aria-describedby={
                  errors.aircraft ? "aircraft-error" : undefined
                }
                className={cn(
                  "flex h-10 w-full min-w-0 rounded-lg border border-input bg-transparent px-3 py-2 text-sm shadow-xs transition-colors outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30",
                )}
                defaultValue=""
                {...register("aircraft")}
              >
                <option value="" disabled>
                  Select aircraft
                </option>
                {AIRCRAFT_TYPES.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              {errors.aircraft ? (
                <p id="aircraft-error" className="text-sm text-red-500">
                  {errors.aircraft.message}
                </p>
              ) : null}
            </div>
          </div>
        </CardContent>

        <CardFooter className="flex flex-col gap-3 border-t border-border/60 sm:flex-row sm:justify-between">
          <p className="text-xs text-muted-foreground">
            All fields are validated before submit
          </p>
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full sm:w-auto"
          >
            <Search className="size-4" aria-hidden="true" />
            {isLoading ? "Searching..." : "Search Flights"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
