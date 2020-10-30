import Head from 'next/head';
import Layout from '@src/components/layout';
import Side from '@src/components/side';
import Content from '@src/components/content';

const Home = () => (
    <div>
        <Head>
            <title>Youssef Lahssini - Front End Developer</title>
            <meta name="author" content="Youssef Lahssini" />
            <link rel="icon" href="/favicon.ico" />
            <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;400;700&display=swap" rel="stylesheet" />
            <link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css" />
        </Head>

        <Layout>
            <div className="flex flex-row-reverse">
                <Side />
                <Content />
            </div>
        </Layout>
    </div>
)

export default Home;
