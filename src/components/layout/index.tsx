import { useEffect } from 'react';
import shallow from 'zustand/shallow';
import { useStore } from '@src/store';
import Head from './head';
import Back from './back';
import ScrollWheel from './scrollWheel';
import External from '../external';

interface Props {
    children: React.ReactElement;
}

const Layout = ({ children }: Props): React.ReactElement => {
    const { setMode } = useStore(({ setMode }) => ({ setMode }), shallow);

    useEffect(() => {
        if (localStorage.theme === 'dark') {
            document.documentElement.classList.add('dark');
            setMode('dark');
        } else {
            document.documentElement.classList.remove('dark');
            setMode('light');
        }
    }, []);

    return (
        <main className="relative h-full">
            <Head />
            {children}
            <External />
            <ScrollWheel />
            <Back />
        </main>
    );
};

export default Layout;
