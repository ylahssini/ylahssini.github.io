import Head from 'next/head';
import type { AppProps } from 'next/app';
import '@src/styles/index.css';

const GOOGLE_FONT_HREF = 'https://fonts.googleapis.com/css2?family=Cairo:wght@200;400;700&family=Caveat&display=swap';

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
                <link href={GOOGLE_FONT_HREF} rel="preload" as="style" />
                <link href={GOOGLE_FONT_HREF} rel="stylesheet" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default App;
