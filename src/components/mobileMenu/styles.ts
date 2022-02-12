import cntl from 'cntl';

export const nav = ({ menuOpened }: { menuOpened: boolean }) => cntl`
    transition-transform
    transition-colors
    bg-slate-50
    dark:bg-dark
    flex
    items-center
    justify-center
    flex-col
    fixed
    top-0
    right-0
    z-[5]
    drop-shadow-[-10px_0_10px_rgba(0,0,0,0.25)]
    w-full
    max-w-[calc(100%-140px)]
    h-full
    duration-300
    ease-in-out
    ${menuOpened ? 'translate-x-0' : 'translate-x-full'}
`;
