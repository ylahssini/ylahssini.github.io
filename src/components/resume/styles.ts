import cntl from "cntl";

export const resume = cntl`
    fixed
    right-4
    bottom-4
    z-10
    flex
    justify-between
    items-center
    flex-col
    animate-resume
    text-transition-dark
    hover:text-blue-500
    after:w-0.5
    after:h-20
    after:block
    after:transition-colors
    after:duration-200
    after:ease-in-out
    after:bg-black
    hover:after:bg-blue-500
    after:dark:bg-slate-50
`;