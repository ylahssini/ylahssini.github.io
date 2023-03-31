import { useEffect } from 'react';
import dynamic, { LoaderComponent } from 'next/dynamic';
import { useStore } from '@src/store';

const Header = dynamic((): LoaderComponent<any> => import('./header'), { ssr: true });
const Back = dynamic((): LoaderComponent<any> => import('./back'), { ssr: false });
const External = dynamic((): LoaderComponent<any> => import('../external'), { ssr: true });
const Footer = dynamic((): LoaderComponent<any> => import('./footer'), { ssr: true });
const Resume = dynamic((): LoaderComponent<any> => import('../resume'), { ssr: true });

interface Props {
    children: JSX.Element[];
}

const Layout = ({ children }: Props): React.ReactElement => {
    const { setMode } = useStore(({ setMode }) => ({ setMode }));

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
        <div className="relative h-screen overflow-y-auto scroll-smooth snap-mandatory snap-y scroll-pt-52 sm:scroll-pt-0">
            <Header />
            {children}

            <Resume />
            <External />
            <Footer />
            <Back />
        </div>
    );
};

export default Layout;
