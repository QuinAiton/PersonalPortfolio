import Main from '../styles/Home.module.scss';
import Head from 'next/head';
import Nav from '../components/Nav';
import Header from '../components/Header';
import About from '../components/About';
import Projects from '../components/projects';
const Home = () => {
  return (
    <div className={Main.container}>
      <Head id='head'>
        <title>Quinten Aiton's Web Development Portfolio</title>
        <meta
          name='keywords'
          content='HTML, CSS, JavaScript, React, Next, full stack developer, Web developer, software development'
        />
        <meta
          description='og:title'
          content='Website portfolio for Victoria, British Columbia Full-stack web developer Quinten Aiton. This site showcases Quintens web development skills such as: Javascript, Node, Express and React, Past Projects and blog posts.'
        />
        <meta name='author' content='Quinten Aiton' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <Nav />
      <Header id='home' />
      <About />
      <Projects />
    </div>
  );
};

export default Home;
