import type { AppProps } from 'next/app';
import '@src/assets/styles/index.css';

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <main>
            <Component {...pageProps} />
        </main>
    );
}

export default App;
