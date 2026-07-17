function getEnvVar(key: string): string {
  const value = process.env[key];

  if (!value) {
    if (process.env.NODE_ENV === "development") {
      console.warn(`Missing environment variable: ${key}`);
    }
    return "";
  }

  return value;
}

export const env = {
  apiUrl: getEnvVar("NEXT_PUBLIC_API_URL") || "http://localhost:8000",
} as const;
