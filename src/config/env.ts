import * as dotenv from 'dotenv';
dotenv.config();

export const env = {
  API_BASE_URL: process.env.API_BASE_URL || 'http://localhost:8080',
  UI_BASE_URL: process.env.UI_BASE_URL || 'http://localhost:3000',
  AUTH_TOKEN: process.env.AUTH_TOKEN,
  ENV_NAME: process.env.ENV_NAME || 'local',
};
