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
                '-2': '-.5rem',
                '-3': '-.75rem',
                '-4': '-1rem',
                '-5': '-1.25rem',
                '-6': '-1.5rem',
                '-7': '-1.75rem',
                '-8': '-2rem',
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
