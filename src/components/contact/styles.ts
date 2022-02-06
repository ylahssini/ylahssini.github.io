import cntl from 'cntl';

export const button = cntl`
    font-bold
    bg-blue-500
    text-white
    w-full
    p-4
    bg-opacity-80
    transition-colors
    hover:bg-blue-800
    hover:bg-opacity-80
    disabled:bg-blue-800
    disabled:bg-opacity-80
`;

export const error = cntl`
    text-xs
    text-white
    absolute
    -bottom-4
    right-0
    bg-red-700
    p-2
    mt-9
    rounded-md
    shadow-md
`;

export const notif = ({ type }: { type: string | null }) => cntl`
    ${type !== null ? 'opacity-100' : 'opacity-0'}
    ${type !== null ? 'h-max p-6 mb-5' : 'h-0 p-0 mb-0'}
    ${type === 'success' ? 'bg-green-400' : 'bg-red-400'}
    transition-all
    ease-in
    rounded-md
    shadow-lg
    relative
    overflow-hidden
`;

export const progress = cntl`
    bg-slate-50
    from-slate-50
    via-white
    h-1
    absolute
    bottom-0
    left-0
    bg-opacity-80
`;
