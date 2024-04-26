module.exports = {
  dependencyTypes: ['local', 'dev', 'prod'],
  semverRange: '^',
  source: ['package.json', 'apps/*/package.json', 'packages/*/package.json'],
  versionGroups: [
    {
      label: 'Pin local config packages to any version (*)',
      packages: ['**'],
      dependencies: ['@ds-starter/tsconfig', 'eslint-config-ds-starter'],
      dependencyTypes: ['dev'],
      pinVersion: '*',
    },
    {
      label: 'Pin unpublished local packages to any version (*)',
      packages: ['**'],
      dependencies: ['@ds-starter/fonts', '@ds-starter/icons', '@ds-starter/tokens', '@ds-starter/ui'],
      dependencyTypes: ['dev', 'prod'],
      pinVersion: '*',
    },
  ],
};
