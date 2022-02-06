import Head from './head';
import Back from './back';
import External from './external';
import ScrollWheel from './scrollWheel';

interface Props {
    children: React.ReactElement;
}

const Header = ({ children }: Props): React.ReactElement => (
    <main className="relative h-full">
        <Head />

        {children}

        <External />
        <ScrollWheel />
        <Back />
    </main>
);

export default Header;
