import '../../App.css';
import Header from '../../components/Layouts/Header';
import Body from '../../components/Posts';
import Footer from '../../components/Layouts/Footer';

function HomePage() {
  return (
    <div className="App">
      <Header/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default HomePage;
