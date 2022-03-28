import { ChangeEvent } from 'react';
import Image from 'next/image';
import shallow from 'zustand/shallow';
import { useStore } from '@src/store';
import data from '@src/data/index.yml';
import Polygon from '@src/assets/images/polygon.png';
import * as styles from './styles';

const Header = () => {
    const { mode, setMode, menuOpened, setMenuOpened } = useStore(({ mode, setMode, menuOpened, setMenuOpened }) => ({
        mode, setMode, menuOpened, setMenuOpened
    }), shallow);

    function handleDarkMode(event: ChangeEvent<HTMLInputElement>) {
        if (event.target.checked) {
            document.documentElement.classList.add('dark');
            setMode('dark');
            localStorage.theme = 'dark';
        } else {
            document.documentElement.classList.remove('dark');
            setMode('light');
            localStorage.theme = 'light';
        }
    }

    return (
        <header className={styles.header}>
            <div className={styles.logo} >
                <figure className={styles.polygon}>
                    {
                        process.env.NEXT_PUBLIC_DEPLOYMENT === 'vercel' ? (
                            <Image
                                src={Polygon}
                                width={64}
                                height={64}
                                layout="responsive"
                                alt=""
                                priority
                            />
                        ) : (
                            <img src="/images/polygon.png" width="64" height="64" alt={data.author.name} />
                        )
                    }
                    
                </figure>

                <span className={styles.text} data-name={data.author.logo}>
                    <b className="relative z-10">{data.author.logo}</b>
                </span>
            </div>

            <div id="offset-menu" className="flex justify-between items-center gap-5 animate-menu">
                <div className="bg-transition-dark w-12 h-0.5 hidden md:block" />
                <div className="menu" />
                <div title={`${mode} mode`}>
                    <input type="checkbox" className="hidden" id="mode" name="mode" onChange={handleDarkMode} checked={mode === 'dark'} />
                    <label htmlFor="mode" className="block cursor-pointer group">
                        <span className="sky">
                            <span className="sphere group-active:w-6" />

                            <span className="cloud scale-[0.35] translate-x-4 translate-y-1" />
                            <span className="cloud scale-[0.35] translate-x-5 translate-y-2.5" />

                            <span className="star dark:translate-x-3 dark:translate-y-2.5" />
                            <span className="star dark:translate-x-4 dark:translate-y-1.5" />
                            <span className="star dark:translate-x-2 dark:translate-y-[0.475rem]" />
                            <span className="star dark:translate-x-4 dark:translate-y-3" />
                        </span>
                    </label>
                </div>

                <button
                    type="button"
                    className="w-6 h-6 flex items-center group md:hidden"
                    aria-label="Open menu"
                    onClick={() => setMenuOpened(!menuOpened)}
                >
                    <div className={`mobile-button ${menuOpened ? '__clicked' : ''}`} />
                </button>
            </div>
        </header>
    );
}

export default Header;
