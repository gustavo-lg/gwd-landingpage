import WhatsApp from 'components/WhatsApp';
import About from 'components/About';
import BottomMenu from 'components/BottomMenu';
import Contact from 'components/Contact';
import Faq from 'components/Faq';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header';
import Plans from 'components/Plans';
import Portfolio from 'components/Portfolio';
import './App.css';

function App() {

  return (
    <main>
      <Header />
      <About />
      <Plans />
      <Portfolio />
      <Contact />
      <Faq />
      <WhatsApp />
      <BottomMenu />
      <Footer />
    </main>
  );
}

export default App;