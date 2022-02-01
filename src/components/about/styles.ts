import cntl from 'cntl';

export const section = cntl`
    flex
    items-center
    justify-between
    gap-5
    w-10/12
    max-w-5xl
`;

export const figure = cntl`
    rounded-full
    border-[7px]
    mx-auto
    border-white
    border-solid
    w-[270px]
    h-[270px]
    overflow-hidden
    will-change-transform
    transition-all
    ease-out
    duration-500
    shadow-lg
    hover:shadow-4xl
`;

export const skill = cntl`
    text-xs
    inline-block
    mr-1
    rounded
    p-1
    leading-none
    border
    border-solid
    border-slate-300
    bg-slate-100
    bg-opacity-80
    transition-colors
    hover:border-blue-500
    hover:bg-blue-100
`;
