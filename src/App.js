import About from './components/About/About';
import Articles from './components/Articles/Articles';
import Footer from './components/Footer/Footer';
import LandingPage from './components/LandingPage/LandingPage';
import TopButton from './components/Navbar/Nav';

const App = () => {
  return (
    <div className="App">
      <TopButton />
      <LandingPage />
      <About />
      <Articles />
      <Footer />
    </div>
  );
}

export default App;
