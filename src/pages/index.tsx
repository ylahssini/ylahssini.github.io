import { useEffect, useRef } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import data from '@src/data/index.yml';
import { Menu, StoreState, useStore } from '@src/store';

const Layout = dynamic(() => import('@src/components/layout'), { ssr: true });
const Intro = dynamic(() => import('@src/components/intro'), { ssr: true });
const About = dynamic(() => import('@src/components/about'), { ssr: true });
const Experiences = dynamic(() => import('@src/components/experiences'), { ssr: true });
const Contact = dynamic(() => import('@src/components/contact'), { ssr: true });
const MobileMenu = dynamic(() => import('@src/components/mobileMenu'), { ssr: false });

const selector = ({ menuOpened, active, setActive }: StoreState) => ({
    menuOpened, active, setActive,
});

const Home = (): React.ReactElement => {
    const { menuOpened, setActive } = useStore(selector);
    const introRef = useRef(null);
    const aboutRef = useRef(null);
    const experiencesRef = useRef(null);
    const contactRef = useRef(null);

    function callbackObserver(entries: IntersectionObserverEntry[]) {
        if (entries.length === 2) {
            const entry = entries.find((el) => el.isIntersecting);
            const { target } = entry || {};

            const key = target?.getAttribute('id');
            if (key) {
                setActive(key as Menu);
            }
        }
    }

    const sections = {
        intro: introRef.current,
        about: aboutRef.current,
        experiences: experiencesRef.current,
        contact: contactRef.current,
    };

    useEffect(() => {
        const observer = new IntersectionObserver(callbackObserver, { root: null, rootMargin: '0px', threshold: 0.5 });
        Object.values(sections).forEach((section) => {
            if (section) observer.observe(section);
        });

        return () => {
            Object.values(sections).forEach((section) => {
                if (section) observer.unobserve(section);
            });
        };
    }, [sections]);

    return (
        <>
            <Head>
                <title>{data.meta.title}</title>
                <meta name="description" content={data.meta.description} />
                <meta name="author" content={data.author.name} />
                <link rel="icon" href="/favicon.png" />
            </Head>

            <Layout>
                <div id="intro" ref={introRef} className={`slide z-10 transition-all ${menuOpened ? 'blur-xl  md:blur-none' : 'blur-none'}`}>
                    <Intro />
                </div>
                <div id="about" ref={aboutRef} className={`slide z-10 transition-all ${menuOpened ? 'blur-xl  md:blur-none' : 'blur-none'}`}>
                    <About />
                </div>
                <div id="experiences" ref={experiencesRef} className={`slide z-10 transition-all ${menuOpened ? 'blur-xl  md:blur-none' : 'blur-none'}`}>
                    <Experiences />
                </div>
                <div id="contact" ref={contactRef} className={`slide z-10 transition-all ${menuOpened ? 'blur-xl  md:blur-none' : 'blur-none'}`}>
                    <Contact />
                </div>
            </Layout>

            <MobileMenu />
        </>
    )
};

export const getStaticProps = (): { props: any } => ({ props: {} });

export default Home;
