import cntl from 'cntl';

export const section = cntl`
    flex
    items-center
    justify-between
    gap-5
    wrapper
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
