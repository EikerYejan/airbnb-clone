export const loadConfig = () => {
  return {
    apiKey: process.env.API_KEY,
    databaseUrl: process.env.DATABASE_URL,
  }
}

export type Config = ReturnType<typeof loadConfig>
