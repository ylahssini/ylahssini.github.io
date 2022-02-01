import data from '@src/data/index.yml';
import Back from './back';
import External from './external';
import ScrollWheel from './scrollWheel';

interface Props {
    children: React.ReactElement;
}

const Header = ({ children }: Props): React.ReactElement => (
    <main className="relative h-full">
        <header className="flex justify-between items-center px-10 py-6 z-20 fixed top-0 left-0 w-full">
            <div className="w-16 h-16 border-2 border-blue-500 rounded-full flex items-center justify-center animate-logo">
                <span className="text-2xl text-blue-500">{data.side.logo}</span>
            </div>

            <div className="flex justify-between items-center gap-5 animate-menu">
                <div className="bg-black w-12 h-0.5" />
                <div id="menu" className="menu" />
            </div>
        </header>

        {children}

        <External />
        <ScrollWheel />
        <Back />
    </main>
);

export default Header;
