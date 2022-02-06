import cntl from 'cntl';

export const footer = cntl`
    border-t-4
    border-solid
    border-slate-200
    relative
`;

export const tab = ({ isActive }: { isActive: boolean }) => cntl`
    p-3
    bg-transparent
    config-transition
    bg-opacity-0
    hover:bg-opacity-25
    hover:bg-blue-200
    hover:text-blue-500
    dark:hover:bg-opacity-10
    dark:hover:bg-blue-100

    ${isActive ? cntl`text-blue-500` : 'text-transition-dark'}
`;

export const highlight = cntl`
    h-1
    bg-blue-500
    absolute
    -top-1
    left-0
    transition-transform
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
