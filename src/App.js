import Banner from './Allpages/Banner/Banner';
import DownBanner from './Allpages/DownBanner/DownBanner';
import Nav from './Allpages/Navbar/Nav';
import './App.css';

function App() {
  return (
    <div>
      {/* navbar part */}
      <Nav />
      {/* Banner part  */}
      <Banner />
      {/* DownBanner part */}
      <DownBanner />
    </div>
  );
}

export default App;
