import cntl from "cntl";

export const resume = cntl`
    fixed
    right-4
    bottom-4
    z-10
    hidden
    md:flex
    justify-between
    items-center
    flex-col
    animate-resume
    text-transition-dark
    hover:text-gray-500
    after:w-0.5
    after:h-20
    after:block
    after:transition-colors
    after:duration-200
    after:ease-in-out
    after:bg-black
    hover:after:bg-gray-500
    after:dark:bg-slate-50
`;

export const mobile = cntl`
    bg-slate-50
    dark:bg-black
    inline-block
    md:hidden
    border
    border-solid
    border-gray-500
    text-gray-500
    text-2xl
    px-8
    py-2
    rounded-full
    mt-4
    transition-colors
    duration-200
    hover:bg-gray-500
    hover:text-white
`;
