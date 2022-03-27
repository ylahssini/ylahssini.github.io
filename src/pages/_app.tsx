import type { AppProps } from 'next/app';
import '@src/assets/styles/index.css';

const App = ({ Component, pageProps }: AppProps) => {
    return (<Component {...pageProps} />);
}

export default App;
