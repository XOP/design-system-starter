module.exports = {
  dependencyTypes: ['local', 'dev', 'prod'],
  semverRange: '^',
  source: ['package.json', 'apps/*/package.json', 'packages/*/package.json'],
  versionGroups: [
    {
      label: 'Pin local config packages to any version (*)',
      packages: ['**'],
      dependencies: ['@awsm/tsconfig', 'eslint-config-awsm'],
      dependencyTypes: ['dev'],
      pinVersion: '*',
    },
    {
      label: 'Pin unpublished local packages to any version (*)',
      packages: ['**'],
      dependencies: ['@awsm/fonts', '@awsm/icons','@awsm/tokens', '@awsm/ui'],
      dependencyTypes: ['dev', 'prod'],
      pinVersion: '*',
    },
  ],
}
