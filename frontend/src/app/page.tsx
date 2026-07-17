"use client";

import React from "react";
import { FlightSearchForm } from "@/components/forms/flight-search-form";
import { LoadingSpinner } from "@/components/shared/loading-spinner";
import { useCheck } from "@/hooks/use-check";
import { useGenerate } from "@/hooks/use-generate";
import type { GenerateVoucherFormValues } from "@/schemas/generate-voucher.schema";
import { Plane } from "lucide-react";
import { toast } from "sonner";

export default function HomePage() {
  const [seats, setSeats] = React.useState<string[]>([]);

  const { mutateAsync: check, isPending } = useCheck();
  const { mutateAsync: generate, isPending: isGenerating } = useGenerate();

  async function handleSubmit(data: GenerateVoucherFormValues) {
    try {
      setSeats([])
      const response =await check({
        flightNumber: data.flightNumber,
        date: data.date,
      });

      if (response.exists) {
        toast.error("Voucher already exists");
        return;
      }

      const res = await generate(data);  
      setSeats(res.seats);                
      toast.success("Voucher berhasil dibuat");


    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      {isPending && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/70 backdrop-blur-sm">
          <LoadingSpinner size="lg" label="Checking voucher..." />
        </div>
      )}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-sky-100 via-blue-50 to-white"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 size-96 rounded-full bg-sky-200/40 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-32 size-96 rounded-full bg-blue-200/30 blur-3xl"
      />

      <main className="relative flex min-h-screen items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-2xl">
          <div className="mb-8 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/80 px-4 py-1.5 text-sm font-medium text-primary shadow-sm backdrop-blur-sm">
              <Plane className="size-4" aria-hidden="true" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Airline Voucher Seat Assignment
            </h1>
            <p className="mt-3 text-base text-muted-foreground sm:text-lg">
            Generate three random seat assignments for voucher winners.
            </p>
          </div>

          <FlightSearchForm onSubmit={handleSubmit} isLoading={isPending || isGenerating} />

          {seats.length > 0 && (
          <div className="mt-6 rounded-xl border border-green-200 bg-green-50 p-6 text-center">
            <p className="mb-3 text-sm font-medium text-green-700">
              Assigned Seats
            </p>
            <div className="flex justify-center gap-3">
              {seats.map((seat) => (
                <span
                  key={seat}
                  className="rounded-lg bg-green-600 px-4 py-2 text-lg font-bold text-white"
                >
                  {seat}
                </span>
              ))}
            </div>
          </div>
        )}
        </div>
      </main>
    </div>
  );
}
