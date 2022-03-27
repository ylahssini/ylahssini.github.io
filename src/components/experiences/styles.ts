import cntl from 'cntl';

export const side = cntl`
    border-b-4
    border-solid
    border-slate-200
    relative
    mb-5
`;

export const tab = ({ isActive }: { isActive: boolean }) => cntl`
    flex-1
    block
    p-3
    text-base
    sm:text-lg
    bg-transparent
    config-transition
    bg-opacity-0
    hover:bg-opacity-25
    hover:bg-gray-200
    hover:text-gray-900
    dark:hover:text-slate-50
    dark:hover:bg-opacity-10
    dark:hover:bg-slate-50
    ${isActive ? cntl`text-gray-900 dark:text-slate-50 font-bold` : 'text-transition-dark'}
`;

export const highlight = cntl`
    h-1
    bg-gradient-to-r
    from-blue-500
    to-red-500
    absolute
    -bottom-1
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
    hover:border-gray-500
    hover:bg-gray-100
`;
