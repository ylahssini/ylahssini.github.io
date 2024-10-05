import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
    integrations: [
        tailwind({
            applyBaseStyles: false,
            nesting: true
        }),
    ],
    i18n: {
        defaultLocale: "en",
        locales: ["en", "fr"],
        routing: {
            prefixDefaultLocale: false,
            redirectToDefaultLocale: true
        }
    }
});