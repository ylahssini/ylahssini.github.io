import Head from 'next/head';
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper";
import shallow from 'zustand/shallow';
import Layout from '@src/components/layout';
import data from '@src/data/index.yml';
import Intro from '@src/components/intro';
import { useStore } from '@src/store';
import "swiper/css";
import "swiper/css/pagination";
import About from '@src/components/about';
import Experiences from '@src/components/experiences';
import Contact from '@src/components/contact';

const menu = ['Intro', 'About', 'Experiences', 'Contact'];

const pagination = {
    clickable: true,
    el: '#menu',
    bulletClass: 'menu-item',
    bulletActiveClass: '__current',
    renderBullet: (index: number, className: string) => {
        return `<span class="${className}"><span>0${index}.</span> ${menu[index]}</span>`;
    },
};

const Home = (): React.ReactElement => {
    const { setDetail } = useStore(state => ({ setDetail: state.setDetail }), shallow);

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
                    mousewheel={true}
                    pagination={pagination}
                    modules={[Mousewheel, Pagination]}
                    onSlideChange={handleSwiperChange}
                >
                    <SwiperSlide className="z-10"><Intro /></SwiperSlide>
                    <SwiperSlide className="z-10"><About /></SwiperSlide>
                    <SwiperSlide className="z-10"><Experiences /></SwiperSlide>
                    <SwiperSlide className="Z-10"><Contact /></SwiperSlide>
                </Swiper>
            </Layout>
        </>
    )
};

export const getStaticProps = (): { props: any } => ({ props: {} });

export default Home;
