import { useEffect } from 'react';
import Main from '../styles/Home.module.scss';
import Head from 'next/head';
import BigNav from '../components/BigNav';
import SmallNav from '../components/SmallNav';
import Header from '../components/Header';
import About from '../components/About';
import Projects from '../components/projects';
import useWindowDimensions from '../components/hooks/useWindowDimensions';
import Footer from '../components/Footer';
const Home = () => {
  const { width } = useWindowDimensions();
  return (
    <div className={Main.container}>

      {width <= 768 ? <SmallNav /> : <BigNav />}
      <Header />
      <About />
      <Projects />
      <Footer />
    </div>
  );
};


export default Home;
