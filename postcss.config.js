module.exports = {
    plugins: {
        tailwindcss: {},
        'postcss-preset-env': { stage: 2 },
        ...(process.env.NODE_ENV === 'production'
            ? {
                '@fullhuman/postcss-purgecss': {
                    content: ['./src/pages/**/*.{js,jsx,ts,tsx}', './src/components/**/*.{js,jsx,ts,tsx}'],
                    defaultExtractor: (content) => {
                        const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []

                        // Capture classes within other delimiters like .block(class="w-1/2") in Pug
                        const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || []

                        return broadMatches.concat(innerMatches);
                    },
                },
            }
            : {}),
    },
};
