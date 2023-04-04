import { getEnvPath } from 'src/common/helper/env.helper';
import { config } from 'dotenv';

const envFilePath: string = getEnvPath(`${__dirname}/common/envs`);

config({ path: envFilePath });

export const configuration = () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  baseUrl: process.env.BASE_URL || 'http://localhost:3000',
  database: {
    host: process.env.DATABASE_HOST || 'localhost',
    port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
    name: process.env.DATABASE_NAME || 'ecommercedb',
    user: process.env.DATABASE_USER || 'hassan',
    password: process.env.DATABASE_PASSWORD || 'password',
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'secret',
  },
});
