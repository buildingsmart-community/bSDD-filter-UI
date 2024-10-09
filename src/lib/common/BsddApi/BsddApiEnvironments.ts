export const bsddEnvironments: { [key: string]: string } = {
  test: 'https://test.bsdd.buildingsmart.org',
  production: 'https://api.bsdd.buildingsmart.org',
};
export type BsddEnvironment = keyof typeof bsddEnvironments;