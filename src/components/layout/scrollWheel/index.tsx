import * as styles from './styles';

const ScrollWheel = () => {
    return (
        <footer className={styles.container}>
            <div className="bg-transition-dark w-0.5 h-6 mb-3" />
            <div className={styles.mouse}>
                <div className={styles.wheel} />
            </div>
        </footer>
    );
}

export default ScrollWheel;
