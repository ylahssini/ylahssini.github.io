import React from 'react';
import { a, useTrail } from '@react-spring/web';

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
                <span className="font-display text-5xl leading-none">Hi, my name is</span>
                <h1 className="font-bold text-blue-600 text-7xl leading-none">Youssef Lahssini</h1>
                <h2 className="text-6xl text-blue-400 leading-none">A passionate front-end developer</h2>
            </Trail>
        </div>
    );
}

export default Intro;
