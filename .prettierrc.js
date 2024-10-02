/** @type {import("prettier").Config} */
export default {
    plugins: ['prettier-plugin-astro'],
    overrides: [
        {
            files: '*.astro',
            options: {
                parser: 'astro',
                useTabs: false,
                tabWidth: 4,
                semi: true,
                singleQuote: true
            },
        },
    ],
};