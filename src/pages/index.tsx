import Head from 'next/head';
import Layout from '@src/components/layout';
import Side from '@src/components/side';
import Content from '@src/components/content';

const Home = () => {
    return (
        <div>
            <Head>
                <title>Youssef Lahssini - Front End Developer</title>
                <meta name="author" content="Youssef Lahssini" />
                <link rel="icon" href="/favicon.ico" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;400;700&display=swap"
                    rel="preload"
                    as="style"
                    // @ts-ignore
                    onload="this.onload=null;this.rel='stylesheet'"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;400;700&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"
                    rel="preload"
                    as="style"
                    // @ts-ignore
                    onload="this.onload=null;this.rel='stylesheet'"
                />
                <link
                    href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"
                    rel="stylesheet"
                />
            </Head>

            <Layout>
                <div className="md:flex flex-row-reverse block">
                    <Side />
                    <Content />
                </div>
            </Layout>
        </div>
    );
}

export default Home;
