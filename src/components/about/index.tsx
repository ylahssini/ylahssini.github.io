import { useEffect, useRef } from 'react';
import { useSpring, animated, to } from '@react-spring/web'
import { useGesture } from 'react-use-gesture'
import data from '@src/data/index.yml';
import * as styles from './styles';

const calcX = (x: number, lx: number) => (x - lx - window.innerWidth / 2) / 20
const calcY = (y: number, ly: number) => -(y - ly - window.innerHeight / 2) / 20

const About = (): React.ReactElement => {
    const figure = useRef(null);
    const [{ x, y, rotateX, rotateY, rotateZ, zoom, scale }, api] = useSpring(
        () => ({
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
            scale: 1,
            zoom: 0,
            x: 0,
            y: 0,
            config: { mass: 5, tension: 350, friction: 40 },
        }),
    );

    useEffect(() => {
        const preventDefault = (e: Event) => e.preventDefault()
        document.addEventListener('gesturestart', preventDefault);
        document.addEventListener('gesturechange', preventDefault);
    
        return () => {
            document.removeEventListener('gesturestart', preventDefault);
            document.removeEventListener('gesturechange', preventDefault);
        }
    }, []);

    useGesture(
        {
            onHover: ({ hovering }) => !hovering && api.start({ rotateX: 0, rotateY: 0, scale: 1 }),
            onMove: ({ xy: [px, py] }) =>
                api.start({
                    rotateX: calcX(px, x.get()),
                    rotateY: calcY(py, y.get()),
                    scale: 1.1,
                }),
        },
        { domTarget: figure, eventOptions: { passive: false } }
    );

    return (
        <section className={styles.section}>
            <article className="w-8/12">
                <h3 className="section-title">
                    <span>01. About</span>
                </h3>
    
                {
                    data.about.map((p: string) => (
                        <p key={p} className="text-base text-justify pb-4">{p}</p>
                    ))
                }
            </article>
    
            <aside className="mx-w-[270px] w-4/12">
                <animated.figure
                    ref={figure}
                    className={styles.figure}
                    style={{
                        transform: 'perspective(600px)',
                        x,
                        y,
                        scale: to([scale, zoom], (s, z) => s + z),
                        rotateX,
                        rotateY,
                        rotateZ,
                    }}
                >
                    <img
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}${data.side.image}`}
                        width={270}
                        height={270}
                        alt="Youssef Lahssini"
                    />
                </animated.figure>
            </aside>
        </section>
    );
};

export default About;
