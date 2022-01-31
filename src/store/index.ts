import create from 'zustand';

export const useStore = create((set: (arg: (arg: unknown) => Record<string, any>) => void) => ({
    detail: 6,
    setDetail: (detail: number) => set(() => ({ detail })),
}));
