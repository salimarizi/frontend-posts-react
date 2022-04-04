import '../App.css';
import Header from '../components/Layouts/Header';
import Banner from '../components/Home/Banner';
import Body from '../components/Home';
import Newsletter from '../components/Home/Newsletter';
import Footer from '../components/Layouts/Footer';

function HomePage() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Body/>
      <Newsletter/>
      <Footer/>
    </div>
  );
}

export default HomePage;
