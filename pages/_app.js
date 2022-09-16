import { useEffect } from 'react';
import '../styles/globals.scss';
import AOS from "aos";
import "aos/dist/aos.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
    useEffect(() => {
    AOS.init({});
  }, []);
  return(   
    <>
  <Head id='head'>
        <title>Quinten's Portfolio</title>
        <meta charSet='utf-8' />
        <meta
          name='keywords'
          content='HTML, CSS, JavaScript, React, Next, full stack developer, Web developer, software development'
        />
        <meta
          name='description'
          content='Website portfolio for Victoria, British Columbia Full-stack web developer Quinten Aiton. This site showcases Quintens web development skills such as: Javascript, Node, Express and React, Past Projects and blog posts.'
        />
        <meta name='author' content='Quinten Aiton' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <Component {...pageProps} />
      </>
  )
}

export default MyApp;
