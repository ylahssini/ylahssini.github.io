import cntl from "cntl";

export const header = cntl`
    flex
    justify-between
    items-center
    py-4
    px-6
    md:px-10
    md:py-6
    z-20
    fixed
    top-0
    left-0
    w-full
    bg-gradient-to-b
    from-slate-50
    via-slate-50
    dark:from-dark
    dark:via-dark
`;

export const logo = cntl`
    w-12
    h-12
    md:w-16
    md:h-16
    border-2
    border-blue-500
    rounded-full
    flex
    items-center
    justify-center
    animate-logo
    relative
    bg-white
    transition-colors
    duration-200
    ease-in-out
    z-10
    dark:bg-dark
`;
