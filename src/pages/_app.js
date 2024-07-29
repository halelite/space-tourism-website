import "@/styles/globals.css";
import {Barlow_Condensed} from 'next/font/google';
import Head from "next/head";

const conBarlow = Barlow_Condensed({
    subsets: ['latin'],
    weight: ['300','400', '700'],
    style: 'normal'
})

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
      <link rel="icon" href="/assets/favicon-32x32.png" />
      <title>Space tourism website</title>
    </Head>
    <style jsx global>
    {`
      html {
        font-family: ${conBarlow.style.fontFamily}
      }
    `}
    </style>
    <Component {...pageProps} />
    </>
  );
}
