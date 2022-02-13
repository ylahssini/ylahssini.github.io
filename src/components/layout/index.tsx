import { useEffect } from 'react';
import shallow from 'zustand/shallow';
import { useStore } from '@src/store';
import Header from './header';
import Back from './back';
import Footer from './footer';
import External from '../external';
import Resume from '../resume';

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
            <Header />
            {children}
            <External />
            <Resume />
            <Footer />
            <Back />
        </main>
    );
};

export default Layout;
