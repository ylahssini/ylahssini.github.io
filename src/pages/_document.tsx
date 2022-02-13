import Document, { Html, Head, Main, NextScript } from 'next/document'

const GOOGLE_FONT_HREF = 'https://fonts.googleapis.com/css2?family=Cairo:wght@200;400;700&family=Caveat&display=swap';

class AppDocument extends Document {
    render() {
        return (
            <Html lang="en-US">
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                    <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
                    <link href={GOOGLE_FONT_HREF} rel="preload" as="style" />
                    <link href={GOOGLE_FONT_HREF} rel="stylesheet" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default AppDocument