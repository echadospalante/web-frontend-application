interface AppEnvironment {
  APP_NAME: string;
  API_GATEWAY_URL: string;
}

const env: AppEnvironment = {
  APP_NAME: import.meta.env['VITE_APP_NAME'],
  API_GATEWAY_URL: import.meta.env['VITE_API_GATEWAY_URL'],
};

export default env;
