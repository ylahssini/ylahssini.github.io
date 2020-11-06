import Head from 'next/head';
import Layout from '@src/components/layout';
import Side from '@src/components/side';
import Content from '@src/components/content';
import data from '@src/data/index.yml';

const GOOGLE_FONT_HREF = 'https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;400;700&display=swap';

const Home = (): React.ReactElement => (
    <div>
        <Head>
            <title>{data.meta.title}</title>
            <meta name="description" content={data.meta.description} />
            <meta name="author" content={data.side.name} />
            <link rel="icon" href="/favicon.ico" />
            <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
            <link
                href={GOOGLE_FONT_HREF}
                rel="preload"
                as="style"
            />
            <link
                href={GOOGLE_FONT_HREF}
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

export const getStaticProps = (): { props: any } => ({ props: {} });

export default Home;
