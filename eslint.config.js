import eslintPluginAstro from 'eslint-plugin-astro';
import eslintTailwind from 'eslint-plugin-tailwindcss';

export default [
    // add more generic rule sets here, such as:
    // js.configs.recommended,
    ...eslintPluginAstro.configs.recommended,
    ...eslintTailwind.configs['flat/recommended'],
    {
        rules: {
            semi: "error",
            "prefer-const": "error"
        }
    }
];
