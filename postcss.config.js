/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable global-require */
// @ts-ignore
const purgecss = require('@fullhuman/postcss-purgecss')({
    content: ['./src/**/*.jsx'],

    defaultExtractor: (content) => {
        const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [];
        const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || [];

        return broadMatches.concat(innerMatches);
    },
});

module.exports = {
    plugins: [
        'tailwindcss',
        'postcss-preset-env',
        require('autoprefixer'),
        ...process.env.NODE_ENV === 'production'
            ? [purgecss]
            : [],
    ],
};
