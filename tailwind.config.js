/* eslint-disable no-undef */
module.exports = {
    darkMode: 'class',
    content: [
        './public/index.html',
        './src/pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        fontFamily: {
            'display': ['Caveat'],
            'body': ['Cairo'],
        },
        extend: {
            backgroundColor: {
                dark: '#000206'
            },

            boxShadow: {
                'sun': '0 0 4px 1px rgba(255, 252, 238, 0.8)',
                'moon': '0 0 2px 0 rgba(255, 255, 255, 0.5)',
            },

            keyframes: {
                menu: {
                    '0%': { opacity: 0, transform: 'translateX(2em)' },
                    '100%': { opacity: 1, transform: 'translateX(0)' },
                },

                logo: {
                    '0%': { opacity: 0, transform: 'translateX(-2em)' },
                    '100%': { opacity: 1, transform: 'translateX(0)' },
                },

                'scroll-wheel': {
                    '0%': { opacity: 0, transform: 'translateY(2em)' },
                    '100%': { opacity: 1, transform: 'translateY(0)' },
                }
            },
            animation: {
                logo: 'logo .2s ease-in-out 0s 1 alternate both',
                menu: 'menu .2s ease-in-out .5s 1 alternate both',
                'scroll-wheel': 'scroll-wheel .2s ease-in-out 1.1s 1 alternate both',
            }
        }
    },
    variants: {
        // Defaults are ['responsive', 'hover', 'focus']
        backgroundColor: ({ before }) => before(['active']),
    },
};
