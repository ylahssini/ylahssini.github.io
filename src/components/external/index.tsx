import { Children, ReactChild } from 'react';
import { a, useTrail } from '@react-spring/web';
import { useWindowSize } from '@src/hooks';
import Github from '../../assets/svg/github-alt.svg';
import LinkedIn from '../../assets/svg/linkedin.svg';
import Twitter from '../../assets/svg/twitter.svg';

export const Trail = ({ children, isMobile }: { isMobile: boolean; children: ReactChild[] }) => {
    const items = Children.toArray(children);
    const trail = useTrail(items.length, {
        config: { mass: 1, tension: 1000, friction: 100 },
        delay: 800,
        opacity: 0,
        y: 20,
        from: { opacity: 0, y: 20 },
        to: { opacity: 1, y: 0 },
    });

    if (isMobile) {
        return (
            <nav>
                {children}
            </nav>
        );
    }

    return (
        <aside className="fixed left-4 bottom-0 hidden md:flex md:justify-center md:items-center md:flex-col z-10">
            {trail.map(({ ...style }, index) => (
                <a.div key={index} style={style}>
                    <a.div>{items[index]}</a.div>
                </a.div>
            ))}
        </aside>
    );
}

const External = () => {
    const { width } = useWindowSize();

    return (
        <Trail isMobile={(width || 0) < 768}>
            <a
                href="https://github.com/ylahssini"
                target="_blank"
                rel="noreferrer"
                className="block mb-3"
                title="Github"
            >
                <Github width={32} height={32} className="svg-icon hover:fill-purple-700" />
            </a>

            <a
                href="https://www.linkedin.com/in/youssef-lahssini-05583a16"
                target="_blank"
                rel="noreferrer"
                className="block mb-3"
                title="Linkedin"
            >
                <LinkedIn width={32} height={32} className="svg-icon hover:fill-blue-600" />
            </a>

            <a
                href="https://twitter.com/ylahssini"
                target="_blank"
                rel="noreferrer"
                className="block mb-3"
                title="Twitter"
            >
                <Twitter width={32} height={32} className="svg-icon hover:fill-cyan-500" />
            </a>

            <div className="w-0.5 h-20 mb-3 hidden md:block transition-colors duration-200 ease-in-out bg-black dark:bg-slate-50" />
        </Trail>
    )
}

export default External;
