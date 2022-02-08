import shallow from "zustand/shallow";
import { useStore } from "@src/store";
import * as styles from './styles';
import { useSwiper } from "swiper/react";
import { useEffect } from "react";

const MobileMenu = () => {
    const swiper = useSwiper();
    const { menu, menuOpened } = useStore(({ menu, menuOpened }) => ({ menu, menuOpened }), shallow);

    useEffect(() => {
        if (menuOpened) {
            swiper.mousewheel.disable();
        } else if (!swiper.mousewheel.enabled && !menuOpened) {
            swiper.mousewheel.enable();
        }
    }, [menuOpened]);

    return (
        <aside className={styles.nav({ menuOpened })}>
            <div className="mobile">
                {menu.map((item) => <button key={item} type="button" className="text-transition-dark block">{item}</button>)}
            </div>
        </aside>
    );
}

export default MobileMenu;
