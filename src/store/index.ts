import create from 'zustand';

export const useStore = create((set: (arg: (arg: unknown) => Record<string, any>) => void) => ({
    detail: 3,
    setDetail: (detail: number) => set(() => ({ detail })),
}));
