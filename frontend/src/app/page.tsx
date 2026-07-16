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
import { APP_NAME } from "@/constants";
import { toDateInputValue } from "@/utils/format";
import { Plane, Search } from "lucide-react";

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
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
              {APP_NAME}
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Flight Management Dashboard
            </h1>
            <p className="mt-3 text-base text-muted-foreground sm:text-lg">
              Search, manage, and monitor your airline operations from one
              centralized platform.
            </p>
          </div>

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

            <CardContent className="space-y-6 pt-2">
              <div className="grid gap-4 sm:grid-cols-2">
                <FormField
                  id="name"
                  label="Crew Name"
                  type="text"
                  placeholder="Enter your name"
                  required
                />
                <FormField
                  id="id"
                  label="Crew ID "
                  type="text"
                  placeholder="Enter your ID"
                  required
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <FormField
                  id="flightNumber"
                  label="Flight Number"
                  placeholder="Enter flight number"
                  type="text"
                  required
                />
                <FormField
                  id="date"
                  label="Flight Date"
                  placeholder="Enter flight date"
                  type="date"
                  min={toDateInputValue()}
                  required
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <FormField
                  id="aircraft"
                  label="Aircraft"
                  placeholder="Enter aircraft"
                  type="text"
                  required
                />
              </div>
            </CardContent>

            <CardFooter className="flex flex-col gap-3 border-t border-border/60 sm:flex-row sm:justify-between">
              <p className="text-xs text-muted-foreground">
                Form layout preview — functionality coming soon
              </p>
              <Button disabled className="w-full sm:w-auto">
                <Search className="size-4" aria-hidden="true" />
                Search Flights
              </Button>
            </CardFooter>
          </Card>

          <p className="mt-6 text-center text-xs text-muted-foreground">
            Powered by AeroVista &middot; REST API Architecture
          </p>
        </div>
      </main>
    </div>
  );
}
