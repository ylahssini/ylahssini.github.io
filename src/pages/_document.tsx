import Document, { Html, Head, Main, NextScript } from 'next/document'

class AppDocument extends Document {
    render() {
        return (
            <Html lang="en-US">
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default AppDocument