import { useSwiper } from "swiper/react";
import { useEffect } from "react";
import shallow from "zustand/shallow";
import { useStore } from "@src/store";
import { useWindowSize } from "@src/hooks";
import * as styles from './styles';

const MobileMenu = () => {
    const swiper = useSwiper();
    const { menu, menuOpened, setMenuOpened } = useStore(({ menu, menuOpened, setMenuOpened }) => ({
        menu, menuOpened, setMenuOpened
    }), shallow);
    const { width } = useWindowSize();

    useEffect(() => {
        const isDesktop = !((width || 0) < 768);

        if (!isDesktop) {
            swiper.mousewheel.disable();
            swiper.disable();
            swiper.$el.removeClass('over-hidden')
            swiper.$el.addClass('over-scroll');

            if (menuOpened) {
                swiper.$el.removeClass('over-scroll')
                swiper.$el.addClass('over-hidden');
            }
        } else {
            swiper.mousewheel.enable();
            swiper.enable();
            swiper.$el.removeClass('overflow-scroll')
            swiper.$el.addClass('overflow-hidden');
        }
    }, [menuOpened, width]);

    function handleMobileMenu() {
        setMenuOpened(false);
    }

    return (
        <aside className={styles.nav({ menuOpened })}>
            <div className="mobile">
                {menu.map((item, index) => (
                    <button
                        key={item}
                        type="button"
                        className={`config-transition block text-3xl py-3`}
                        onClick={handleMobileMenu}
                    >
                        <span className="text-blue-500">0{index}.</span> {item}
                    </button>
                ))}
            </div>
        </aside>
    );
}

export default MobileMenu;
