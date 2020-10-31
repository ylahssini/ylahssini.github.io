const withYaml = require('next-plugin-yaml');
const debug = process.env.NODE_ENV !== "production";

module.exports = withYaml({
    basePath: '/',
    assetPrefix: '/',
});