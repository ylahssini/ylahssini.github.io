import cntl from 'cntl';

export const container = cntl`
    fixed
    bottom-0
    w-full
    z-[4]
    hidden
    md:flex
    justify-center
    items-center
    md:flex-col
    py-2
    animate-scroll-wheel
`;

export const mouse = cntl`
    border-transition-dark
    border-2
    rounded-t-full
    rounded-b-full
    w-5
    h-7
    hidden
    md:flex
    md:justify-center
    pt-1
`;

export const wheel = cntl`
    border-transition-dark
    border-2
    rounded-t-full
    rounded-b-full
    w-[6px]
    h-2
    animate-bounce
`;
