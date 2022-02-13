import * as styles from './styles';

const Footer = () => {
    return (
        <footer className={styles.container}>
            <div className="bg-transition-dark w-0.5 h-6 mb-3 hidden md:block" />
            <div className={styles.mouse}>
                <div className={styles.wheel} />
            </div>
        </footer>
    );
}

export default Footer;
