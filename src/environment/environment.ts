interface AppEnvironment {
  APP_NAME: string;
  API_URL: string;
  GOOGLE_CLIENT_ID: string;
}

const env: AppEnvironment = {
  APP_NAME: import.meta.env["VITE_APP_NAME"],
  API_URL: import.meta.env["VITE_API_URL"],
  GOOGLE_CLIENT_ID: import.meta.env["VITE_GOOGLE_CLIENT_ID"],
};

export default env;
