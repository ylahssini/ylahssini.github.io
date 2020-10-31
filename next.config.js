const withYaml = require('next-plugin-yaml');
const debug = process.env.NODE_ENV !== "production";

module.exports = withYaml({
    basePath: '',
    assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',
    images: {
        deviceSizes: [150],
        iconSizes: [],
        domains: [],
        path: process.env.NEXT_PUBLIC_BASE_PATH || '',
        loader: 'default',
    },
});