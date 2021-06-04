import { AppProps } from "next/app";
import Head from 'next/head';
import GlobalStyle from "../styles/globals";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
      <meta name = "viewport" content = "width = device-width, initial-scale = 1.0" />
      <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap"
            rel="stylesheet"
          />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
