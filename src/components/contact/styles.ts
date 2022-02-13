import cntl from 'cntl';

export const input = ({ isLeft }: { isLeft: boolean }) => cntl`
    border
    border-gray-400
    bg-white
    bg-opacity-50
    dark:bg-dark
    dark:bg-opacity-50
    p-4
    outline-none
    w-full
    transition-all
    duration-300
    ease-in-out
    text-dark
    dark:text-slate-50
    focus:shadow-[inset_0_0_5px_0_#cde0f8ee]
    focus:dark:shadow-[inset_0_0_5px_0_#033f97fd]
    focus:text-blue-500
    caret-blue-500
    ${isLeft ? 'border-r border-b-0 md:border-r-0 md:border-b' : ''}
`;

export const area = cntl`
    border
    border-t-0
    border-gray-400
    bg-white
    bg-opacity-50
    dark:bg-dark
    dark:bg-opacity-50
    p-4
    w-full
    resize-y
    h-48
    max-h-56
    outline-none
    transition-all
    duration-300
    ease-in-out
    text-dark
    dark:text-slate-50
    transition-shadow
    focus:shadow-[inset_0_0_7px_0_#cde0f8ee]
    focus:dark:shadow-[inset_0_0_5px_0_#033f97fd]
    focus:text-blue-500
    caret-blue-500
`;

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
    bg-gradient-to-r
    bg-slate-50
    from-slate-50
    to-white
    h-1
    absolute
    bottom-0
    left-0
    bg-opacity-80
`;
