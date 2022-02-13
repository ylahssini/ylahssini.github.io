import data from '@src/data/index.yml';
import * as styles from './styles';

const Footer = () => {
    return (
        <footer className={styles.container}>
            <div className="bg-transition-dark w-0.5 h-6 mb-3 hidden md:block" />
            <div className={styles.mouse}>
                <div className={styles.wheel} />
            </div>
            <p className="block md:hidden text-transition-dark w-full text-center">
                Created by {data.author.name} @{new Date().getFullYear()}
            </p>
        </footer>
    );
}

export default Footer;
