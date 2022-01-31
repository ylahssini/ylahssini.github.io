import React from 'react';
import { a, useTrail } from '@react-spring/web';
import Github from '../../../assets/svg/github-alt.svg';
import LinkedIn from '../../../assets/svg/linkedin.svg';
import Twitter from '../../../assets/svg/twitter.svg';


const Trail = ({ children }: { children: React.ReactChild[] }) => {
    const items = React.Children.toArray(children);
    const trail = useTrail(items.length, {
        config: { mass: 1, tension: 1000, friction: 100 },
        delay: 800,
        opacity: 0,
        y: 20,
        from: { opacity: 0, y: 20 },
        to: { opacity: 1, y: 0 },
    });

    return (
        <aside className="fixed left-4 bottom-0 flex justify-center items-center flex-col z-10">
            {trail.map(({ ...style }, index) => (
                <a.div key={index} style={style}>
                    <a.div>{items[index]}</a.div>
                </a.div>
            ))}
        </aside>
    );
}

const External = () => {
    return (
        <Trail>
            <a
                href="https://github.com/ylahssini"
                target="_blank"
                rel="noreferrer"
                className="block mb-3"
                title="Github"
            >
                <Github width={32} height={32} className="svg-icon hover:fill-slate-800" />
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

            <div className="bg-black w-[2px] h-20 mb-3" />
        </Trail>
    )
}

export default External;
