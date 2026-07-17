"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface FormFieldProps extends Omit<React.ComponentProps<"input">, "id"> {
  id: string;
  label: string;
  error?: string;
  required?: boolean;
}

export function FormField({
  id,
  label,
  error,
  required = false,
  className,
  ...props
}: FormFieldProps) {
  return (
    <div className={cn("space-y-2", className)}>
      <Label htmlFor={id}>
        {label} {required && <span className="text-red-500">*</span>}
      </Label>
      <Input
        id={id}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        {...props}
      />
      {error ? (
        <p id={`${id}-error`} className="text-sm text-red-500">
          {error}
        </p>
      ) : null}
    </div>
  );
}
