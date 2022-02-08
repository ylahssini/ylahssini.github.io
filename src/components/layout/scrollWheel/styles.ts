import cntl from 'cntl';

export const container = ({ menuOpened }: { menuOpened: boolean }) => cntl`
    fixed
    bottom-0
    w-full
    z-[4]
    flex
    justify-center
    items-center
    flex-col
    py-2
    animate-scroll-wheel
    transition-all
    ${menuOpened ? 'blur-sm' : 'blur-none'}
`;

export const mouse = cntl`
    border-transition-dark
    border-2
    rounded-t-full
    rounded-b-full
    w-5
    h-7
    flex
    justify-center
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
