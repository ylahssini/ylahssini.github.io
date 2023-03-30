import { create } from 'zustand';

export type Menu = 'intro' | 'about' | 'experiences' | 'contact';

export interface StoreState {
    mode: 'light' | 'dark';
    detail: number;
    menu: string[];
    active: Menu;
    menuOpened: boolean;
    setDetail: (detail: number) => void;
    setMode: (mode: 'light' | 'dark') => void;
    setActive: (active: Menu) => void;
    setMenuOpened: (menuOpened: boolean) => void;
}

export const useStore = create<StoreState>((set: (arg: (arg: unknown) => Record<string, any>) => void) => ({
    mode: 'light',
    detail: 3,
    menu: ['Intro', 'About', 'Experiences', 'Contact'],
    active: 'intro',
    menuOpened: false,
    setDetail: (detail: number) => set(() => ({ detail })),
    setMode: (mode: 'light' | 'dark') => set(() => ({ mode })),
    setActive: (active: Menu) => set(() => ({ active })),
    setMenuOpened: (menuOpened: boolean) => set(() => ({ menuOpened })),
}));
