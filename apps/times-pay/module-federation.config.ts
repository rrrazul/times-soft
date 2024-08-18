import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'times-pay',
  exposes: {
    './Module': 'apps/times-pay/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
