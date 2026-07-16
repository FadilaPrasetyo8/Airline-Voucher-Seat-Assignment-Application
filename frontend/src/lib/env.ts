const _requiredEnvVars = ["NEXT_PUBLIC_API_URL"] as const;

type RequiredEnvVar = (typeof _requiredEnvVars)[number];

function getEnvVar(key: RequiredEnvVar): string {
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
  apiUrl: getEnvVar("NEXT_PUBLIC_API_URL"),
  appName: process.env.NEXT_PUBLIC_APP_NAME ?? "AeroVista",
  isDevelopment: process.env.NODE_ENV === "development",
  isProduction: process.env.NODE_ENV === "production",
} as const;
