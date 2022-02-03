import cntl from 'cntl';

export const footer = cntl`
    border-t-4
    border-solid
    border-slate-200
    relative
`;

export const tab = ({ width, isActive }: { width: string; isActive: boolean }) => cntl`
    ${width}
    p-3
    bg-transparent
    duration-500
    transition-colors
    hover:bg-opacity-25
    hover:bg-blue-200
    hover:text-blue-500

    ${isActive ? cntl`text-blue-500` : 'text-black'}
`;

export const highlight = ({ width, tab }: { width: string; tab: string }) => cntl`
    h-1
    bg-blue-500
    ${width}
    absolute
    -top-1
    left-0
    transition-transform
    translate-x-[calc(100%*${tab})]
`;
