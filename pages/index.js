import Head from 'next/head';
import Script from "next/script";
import Preview from "../components/preview";


export default function Home() {
  return (
    <div
      style={{backgroundColor: 'var(--tg-theme-secondary-bg-color)'}}
    >
      <Script
        src="https://ven-shupo.github.io/shuffle-school/tgcl.js"
        strategy="beforeInteractive"
      />
        <Head>
          <title>XXX SHUFFLE</title>
          <link rel="icon" href="https://ven-shupo.github.io/shuffle-school/favicon.ico" />
        </Head>
        <Preview/>
    </div>
  );
}
