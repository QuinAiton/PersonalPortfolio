import Main from '../styles/Home.module.scss';
import Nav from '../components/Nav';
import Header from '../components/Header';
import About from '../components/about/About';
const Index = () => {
  return (
    <div className={Main.container}>
      <Nav className={Main.nav} />
      <Header className={Main.header} />
      <About className={Main.about} />
    </div>
  );
};

export default Index;
