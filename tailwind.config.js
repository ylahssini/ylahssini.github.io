module.exports = {
    future: {
        // removeDeprecatedGapUtilities: true,
        // purgeLayersByDefault: true,
    },
    purge: [],
    theme: {
        extend: {
            width: {
                '150px': '150px',
            },
            height: {
                '150px': '150px',
            },
            inset: {
                50: '50px',
                '-1': '-.25rem',
                half: '50%',
            },
        },
        fontFamily: {
            sans: ['Noto Sans KR', 'sans-serif'],
        },
    },
    variants: {
        // Defaults are ['responsive', 'hover', 'focus']
        backgroundColor: ({ before }) => before(['active']),
    },
    plugins: [],
};
