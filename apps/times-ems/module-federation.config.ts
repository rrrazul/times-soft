import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'times-ems',
  exposes: {
    './Module': 'apps/times-ems/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
