/* eslint-disable @typescript-eslint/no-var-requires */
const withYaml = require('next-plugin-yaml');
const withCSS = require('@zeit/next-css');

module.exports = withCSS(withYaml({
    basePath: '',
    assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',
}));
