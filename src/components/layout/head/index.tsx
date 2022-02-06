import data from '@src/data/index.yml';
import * as styles from './styles';

const Header = () => {
    return (
        <header className="flex justify-between items-center px-10 py-6 z-20 fixed top-0 left-0 w-full">
            <div>
                <div className={styles.logo}>
                    <span className="text-2xl text-blue-500">{data.author.logo}</span>
                </div>
            </div>

            <div className="flex justify-between items-center gap-5 animate-menu">
                <div className="bg-black w-12 h-0.5" />
                <div id="menu" className="menu" />
            </div>
        </header>
    );
}

export default Header;
