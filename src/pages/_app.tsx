import type { AppProps } from 'next/app';
import { Cairo, Caveat } from 'next/font/google'
import '@src/assets/styles/index.css';

const GOOGLE_FONT_HREF = 'https://fonts.googleapis.com/css2?family=Cairo:wght@200;400;700&family=Caveat&display=swap';

const cairo = Cairo({
    weight: ['200', '400', '700'],
    style: ['normal'],
    subsets: ['latin'],
    variable: '--font-cairo',
});

const caveat = Caveat({
    style: ['normal'],
    subsets: ['latin'],
    variable: '--font-caveat',
});

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <main className={`${cairo.variable} ${caveat.variable}`}>
            <Component {...pageProps} />
        </main>
    );
}

export default App;
