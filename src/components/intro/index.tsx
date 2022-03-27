import React from 'react';
import { a, useTrail } from '@react-spring/web';
import data from '@src/data/index.yml';
import * as styles from './styles';

const Trail = ({ children }: { children: React.ReactChild[] }) => {
    const items = React.Children.toArray(children);
    const trail = useTrail(items.length, {
        config: { mass: 5, tension: 2000, friction: 200 },
        opacity: 0,
        y: 20,
        from: { opacity: 0, y: 20 },
        to: { opacity: 1, y: 0 },
    });

    return (
        <section>
            {trail.map(({ ...style }, index) => (
                <a.div key={index} style={style}>
                    <a.div>{items[index]}</a.div>
                </a.div>
            ))}
        </section>
    );
}

const Intro = () => {
    return (
        <div className="flex items-center justify-center h-[100vh] wrapper">
            <Trail>
                <span className="font-display text-4xl md:text-5xl leading-none text-transition-dark">Hi, my name is</span>
                <h1 data-name={data.author.name} className={styles.title}>
                    <span className="relative z-10">{data.author.name}</span>
                </h1>
                <h2 className="text-3xl md:text-5xl font-extralight text-gray-400 leading-none">{data.author.sub}</h2>
            </Trail>
        </div>
    );
}

export default Intro;
