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
                50: '50px'
            },
        },
        fontFamily: {
            sans: ['Noto Sans KR', 'sans-serif']
        },
        
    },
    variants: {
        // Defaults are ['responsive', 'hover', 'focus']
        backgroundColor: ({ before }) => before(['active']),
    },
    plugins: [],
}
