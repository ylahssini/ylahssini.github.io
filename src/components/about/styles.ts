import cntl from 'cntl';

export const section = cntl`
    block
    sm:flex
    sm:items-center
    sm:justify-between
    gap-5
    wrapper
    h-screen
`;

export const figure = cntl`
    rounded-full
    border-[7px]
    mx-auto
    border-white
    border-solid
    w-full
    h-full
    overflow-hidden
    will-change-transform
    transition-all
    ease-out
    duration-500
    shadow-lg
    hover:shadow-4xl
`;
