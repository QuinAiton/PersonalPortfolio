import Document, { Html, Head, Main, NextScript } from 'next/document';
import Favicon from '../components/Favicon';
export default class MyDocument extends  Document {

static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }
    render() {
        return (
            <Html>
                <Head>
                   <Favicon/>
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </ Html>
        );
    }
}