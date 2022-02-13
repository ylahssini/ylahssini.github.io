import Head from 'next/head';
import dynamic from 'next/dynamic';
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper";
import shallow from 'zustand/shallow';
import data from '@src/data/index.yml';
import { useStore } from '@src/store';
import 'swiper/css';
import 'swiper/css/pagination';

const Layout = dynamic(() => import('@src/components/layout'), { ssr: true });
const Intro = dynamic(() => import('@src/components/intro'), { ssr: true });
const About = dynamic(() => import('@src/components/about'), { ssr: true });
const Experiences = dynamic(() => import('@src/components/experiences'), { ssr: true });
const Contact = dynamic(() => import('@src/components/contact'), { ssr: true });
const MobileMenu = dynamic(() => import('@src/components/mobileMenu'), { ssr: false });

const Home = (): React.ReactElement => {
    const { setDetail, menu, menuOpened } = useStore(({ setDetail, menu, menuOpened }) => ({
        setDetail, menu, menuOpened,
    }), shallow);

    const pagination = {
        clickable: true,
        el: '.menu',
        bulletClass: 'menu-item',
        bulletActiveClass: '__current',
        renderBullet: (index: number, className: string) => {
            return `<span class="${className}"><span>0${index}.</span> ${menu[index]}</span>`;
        },
    };

    function handleSwiperChange(swiper: any): void {
        setDetail(3 - swiper.activeIndex);
    }

    return (
        <>
            <Head>
                <title>{data.meta.title}</title>
                <meta name="description" content={data.meta.description} />
                <meta name="author" content={data.author.name} />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Layout>
                <Swiper
                    direction="vertical"
                    slidesPerView={1}
                    spaceBetween={30}
                    mousewheel
                    pagination={pagination}
                    modules={[Mousewheel, Pagination]}
                    onSlideChange={handleSwiperChange}
                    className="slides"
                >
                    <SwiperSlide id="intro" className={`slide z-10 transition-all ${menuOpened ? 'blur-xl' : 'blur-none'}`}>
                        <Intro />
                    </SwiperSlide>
                    <SwiperSlide id="about" className={`slide z-10 transition-all ${menuOpened ? 'blur-xl' : 'blur-none'}`}>
                        <About />
                    </SwiperSlide>
                    <SwiperSlide id="experiences" className={`slide z-10 transition-all ${menuOpened ? 'blur-xl' : 'blur-none'}`}>
                        <Experiences />
                    </SwiperSlide>
                    <SwiperSlide id="contact" className={`slide z-10 transition-all ${menuOpened ? 'blur-xl' : 'blur-none'}`}>
                        <Contact />
                    </SwiperSlide>

                    <MobileMenu />
                </Swiper>

            </Layout>
        </>
    )
};

export const getStaticProps = (): { props: any } => ({ props: {} });

export default Home;
