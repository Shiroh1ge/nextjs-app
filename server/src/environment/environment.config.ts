/**
 * TODO: We can improve the provision of our .env by adding type safety and validation
 * We can use the "nest-typed-config" package to achieve this, as it adds both type safety and validation to our env config
 * https://github.com/Nikaple/nest-typed-config
 */

interface EnvironmentConfig {
  nodeEnv: 'development' | 'production' | 'test';
  port: number;
}

export const environmentConfig: EnvironmentConfig = {
  nodeEnv: process.env.NODE_ENV,
  port: parseInt(process.env.PORT, 10),
};
