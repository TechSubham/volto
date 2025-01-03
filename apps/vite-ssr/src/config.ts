import config from '@plone/registry';
import { slate } from '@plone/blocks/config/slate';
import { blocksConfig } from '@plone/blocks/config';

const settings = {
  apiPath: 'http://localhost:8080/Plone',
  slate,
};

config.set('settings', settings);

config.set('blocks', { blocksConfig });

export default config;
