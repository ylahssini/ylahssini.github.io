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
    flex
    items-center
    justify-center
    animate-logo
    relative
    transition-colors
    duration-200
    ease-in-out
    z-10
`;

export const polygon = cntl`
    absolute
    left-0
    top-0
    w-12
    h-12
    md:w-16
    md:h-16
    opacity-50
`;

export const text = cntl`
    text-lg
    md:text-2xl
    tracking-wide
    font-bold
    text-gray-900
    dark:text-white
    relative
    block
    before:block
    before:w-full
    before:h-full
    before:text-lg
    before:md:text-2xl
    before:tracking-wide
    before:text-blue-500
    before:text-opacity-50
    before:content-[attr(data-name)]
    before:absolute
    before:top-0
    before:left-0
    before:z-0
    before:-translate-x-[1px]
    before:-translate-y-[1px]
    after:block
    after:w-full
    after:h-full
    after:text-lg
    after:md:text-2xl
    after:tracking-wide
    after:text-red-500
    after:text-opacity-50
    after:content-[attr(data-name)]
    after:absolute
    after:top-0
    after:left-0
    after:z-0
    after:translate-x-[1px]
    after:translate-y-[1px]
`;
