import { useRef } from "react";
import { useStore } from "@src/store";
import * as styles from './styles';
import Resume from "../resume";

const MobileMenu = () => {
    const mobileRef = useRef(null);
    const { menu, menuOpened, setMenuOpened } = useStore(({ menu, menuOpened, setMenuOpened }) => ({
        menu, menuOpened, setMenuOpened
    }));

    function handleMobileMenu(section: string) {
        setMenuOpened(false);

        const element = document.getElementById(section.toLowerCase());
        element?.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <aside ref={mobileRef} className={styles.nav({ menuOpened })}>
            <div className="mobile">
                {menu.map((section, index) => (
                    <button
                        key={section}
                        type="button"
                        className="text-transition-dark block text-3xl py-3"
                        onClick={() => handleMobileMenu(section)}
                    >
                        <span className="text-gray-500">0{index}.</span> {section}
                    </button>
                ))}
            </div>

            <Resume isMobile />
        </aside>
    );
}

export default MobileMenu;
