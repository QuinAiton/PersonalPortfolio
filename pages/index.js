import Main from '../styles/Home.module.scss';
import Nav from '../components/Nav';
import Header from '../components/Header';
const Index = () => {
  return (
    <div className={Main.container}>
      <Nav className={Main.nav} />
      <Header className={Main.header} />
    </div>
  );
};

export default Index;
