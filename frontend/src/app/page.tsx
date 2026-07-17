"use client";

import { FlightSearchForm } from "@/components/forms/flight-search-form";
import { LoadingSpinner } from "@/components/shared/loading-spinner";
import { useCheck } from "@/hooks/use-check";
import type { GenerateVoucherFormValues } from "@/schemas/generate-voucher.schema";
import { Plane } from "lucide-react";

export default function HomePage() {
  const { mutateAsync: check, isPending } = useCheck();

  async function handleSubmit(data: GenerateVoucherFormValues) {
    try {
      await check({
        flightNumber: data.flightNumber,
        date: data.date,
      });

      
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
              Flight Management Dashboard
            </h1>
            <p className="mt-3 text-base text-muted-foreground sm:text-lg">
              Search, manage, and monitor your airline operations from one
              centralized platform.
            </p>
          </div>

          <FlightSearchForm onSubmit={handleSubmit} isLoading={isPending} />

          <p className="mt-6 text-center text-xs text-muted-foreground">
            Powered by AeroVista &middot; REST API Architecture
          </p>
        </div>
      </main>
    </div>
  );
}
