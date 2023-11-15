// pages/index.js

import Head from 'next/head';
import Script from 'next/script';


export default function Home() {
  return (
    <>
      <Head>
      </Head>
      <h1>aniket</h1>
      <Script
        id="suppress-hydration-warning"
        strategy="beforeInteractive"
      >
        {`if (typeof window !== 'undefined') console.warn = () => {};`}
      </Script>
    </>
  );
}
