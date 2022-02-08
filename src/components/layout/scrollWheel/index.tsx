import shallow from "zustand/shallow";
import { useStore } from "@src/store";
import * as styles from './styles';

const ScrollWheel = () => {
    const { menuOpened } = useStore(({ menuOpened }) => ({ menuOpened }), shallow);

    return (
        <footer className={styles.container({ menuOpened })}>
            <div className="bg-transition-dark w-0.5 h-6 mb-3" />
            <div className={styles.mouse}>
                <div className={styles.wheel} />
            </div>
        </footer>
    );
}

export default ScrollWheel;
