import { useEffect, useRef } from "react";
import { useSwiper } from "swiper/react";
import shallow from "zustand/shallow";
import { useStore } from "@src/store";
import useWindowSize from "@src/hooks/useWindowSize";
import useOutsideClick from "@src/hooks/useOutsideClick";
import * as styles from './styles';
import External from "../external";
import Resume from "../resume";

const MobileMenu = () => {
    const mobileRef = useRef(null);
    const swiper = useSwiper();
    const { menu, menuOpened, setMenuOpened } = useStore(({ menu, menuOpened, setMenuOpened }) => ({
        menu, menuOpened, setMenuOpened
    }), shallow);
    const { width } = useWindowSize();

    useOutsideClick(mobileRef, () => { setMenuOpened(false); }, ['offset-menu']);

    useEffect(() => {
        const isDesktop = !((width || 0) <= 768);

        if (!isDesktop) {
            swiper.mousewheel.disable();
            swiper.disable();
            swiper.$el.removeClass('over-hidden')
            swiper.$el.addClass('over-scroll');

            const sections = Array.from(document.getElementsByClassName('slide') as HTMLCollectionOf<HTMLElement>);
            for (let i = 0; i < sections.length; i += 1) {
                sections[i].style.height = 'auto';
            }

            if (menuOpened) {
                swiper.$el.removeClass('over-scroll')
                swiper.$el.addClass('over-hidden');
            }
        } else {
            swiper.mousewheel.enable();
            swiper.enable();
            swiper.$el.removeClass('over-scroll')
            swiper.$el.addClass('over-hidden');
        }
    }, [menuOpened, width]);

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
                        <span className="text-blue-500">0{index}.</span> {section}
                    </button>
                ))}
            </div>

            <External showMobile />
            <Resume isMobile />
        </aside>
    );
}

export default MobileMenu;
