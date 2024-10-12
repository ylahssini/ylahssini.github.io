import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
    site: import.meta.env.SITE || undefined,
    base: import.meta.env.REPO || undefined,
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