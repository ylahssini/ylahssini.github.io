import Head from 'next/head';
import dynamic from 'next/dynamic';
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper";
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

const selector = ({ setDetail, menu, menuOpened }: Record<string, any>) => ({
    setDetail, menu, menuOpened,
});

const Home = (): React.ReactElement => {
    const { setDetail, menu, menuOpened } = useStore(selector);

    const pagination = {
        clickable: true,
        el: '.menu',
        bulletClass: 'menu-item',
        bulletActiveClass: '__current',
        renderBullet: (index: number, className: string) => {
            return `<span class="${className}" data-name="0${index}. ${menu[index]}"><span>0${index}.</span> ${menu[index]}</span>`;
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
                <link rel="icon" href="/favicon.png" />
            </Head>

            <Layout>
                <Swiper
                    direction="vertical"
                    slidesPerView={1}
                    spaceBetween={30}
                    mousewheel={{ sensitivity: 0.83, thresholdTime: 900 }}
                    pagination={pagination}
                    modules={[Mousewheel, Pagination]}
                    onSlideChange={handleSwiperChange}
                    className="slides"
                >
                    <SwiperSlide id="intro" className={`slide z-10 transition-all ${menuOpened ? 'blur-xl  md:blur-none' : 'blur-none'}`}>
                        <Intro />
                    </SwiperSlide>
                    <SwiperSlide id="about" className={`slide z-10 transition-all ${menuOpened ? 'blur-xl  md:blur-none' : 'blur-none'}`}>
                        <About />
                    </SwiperSlide>
                    <SwiperSlide id="experiences" className={`slide z-10 transition-all ${menuOpened ? 'blur-xl  md:blur-none' : 'blur-none'}`}>
                        <Experiences />
                    </SwiperSlide>
                    <SwiperSlide id="contact" className={`slide z-10 transition-all ${menuOpened ? 'blur-xl  md:blur-none' : 'blur-none'}`}>
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
