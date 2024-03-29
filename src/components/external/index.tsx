import { Children } from 'react';
import { a, useTrail } from '@react-spring/web';
import { TbBrandGithub, TbBrandLinkedin, TbBrandTwitter } from 'react-icons/tb';
import useWindowSize from '@src/hooks/useWindowSize';
import * as styles from './styles';

interface TrailProps {
    isMobile: boolean;
    showMobile: boolean;
    children: JSX.Element[];
}

export const Trail = ({ children, isMobile, showMobile }: TrailProps) => {
    const items = Children.toArray(children);
    const trail = useTrail(items.length, {
        config: { mass: 1, tension: 1000, friction: 100 },
        delay: 800,
        opacity: 0,
        y: 20,
        from: { opacity: 0, y: 20 },
        to: { opacity: 1, y: 0 },
    });

    if (isMobile && showMobile) {
        return (
            <nav className="flex items-center justify-between gap-4 mt-5">
                {children}
            </nav>
        );
    }

    return (
        <aside className={styles.aside}>
            {trail.map(({ ...style }, index) => (
                <a.div key={index} style={style}>
                    <a.div>{items[index]}</a.div>
                </a.div>
            ))}
        </aside>
    );
}

const External = ({ showMobile = false }: { showMobile?: boolean }) => {
    const { width } = useWindowSize();
    const isMobile = (width || 0) < 768;
    const size = isMobile ? 44 : 32;

    return (
        <Trail isMobile={isMobile} showMobile={showMobile}>
            <a
                href="https://github.com/ylahssini"
                target="_blank"
                rel="noreferrer"
                className="block mb-3"
                title="Github"
            >
                <TbBrandGithub size={size} className="svg-icon hover:stroke-purple-700" />
            </a>

            <a
                href="https://www.linkedin.com/in/youssef-lahssini-05583a16"
                target="_blank"
                rel="noreferrer"
                className="block mb-3"
                title="Linkedin"
            >
                <TbBrandLinkedin size={size} className="svg-icon hover:stroke-blue-600" />
            </a>

            <a
                href="https://twitter.com/ylahssini"
                target="_blank"
                rel="noreferrer"
                className="block mb-3"
                title="Twitter"
            >
                <TbBrandTwitter size={size} className="svg-icon hover:stroke-cyan-500" />
            </a>
        </Trail>
    )
}

export default External;
