/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const withYaml = require('next-plugin-yaml');

module.exports = withYaml({
    basePath: '',
    assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',
    exportPathMap: async (defaultPathMap, { dev, dir, outDir, distDir, buildId }) => ({
        '/': { page: '/' },
    }),
});
