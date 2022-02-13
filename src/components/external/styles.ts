import cntl from 'cntl';

export const aside = cntl`
    fixed
    left-4
    bottom-0
    hidden
    md:flex
    md:justify-center
    md:items-center
    md:flex-col
    z-10
    after:w-0.5
    after:h-20
    after:mb-3
    after:hidden
    after:md:block
    after:transition-colors
    after:duration-200
    after:ease-in-out
    after:bg-black
    after:dark:bg-slate-50
`;