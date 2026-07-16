"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface FormFieldProps {
  id: string;
  label: string;
  placeholder?: string;
  type?: string;
  className?: string;
  disabled?: boolean;
  required?: boolean;
  /** For type="date" — e.g. today's date to block past days */
  min?: string;
  max?: string;
}

export function FormField({
  id,
  label,
  placeholder,
  type = "text",
  className,
  disabled = false,
  required = false,
  min,
  max,
}: FormFieldProps) {
  return (
    <div className={cn("space-y-2", className)}>
      <Label htmlFor={id}>{label} {required && <span className="text-red-500">*</span>}</Label>
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        aria-disabled={disabled}
        required={required}
        min={min}
        max={max}
      />
    </div>
  );
}
