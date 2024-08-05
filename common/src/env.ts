// eslint-disable-next-line import/prefer-default-export
export const isProduction = process.env.APP_MODE !== 'development';
export const defaultEnvironment = isProduction ? 'production' : 'test';
