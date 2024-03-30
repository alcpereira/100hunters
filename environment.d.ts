declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "production";
      DB_URL: string;
      DB_TOKEN: string;
      PORT?: string;
    }
  }
}

export {};
