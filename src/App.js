import Banner from './Allpages/Banner/Banner';
import Cards from './Allpages/Cards/Cards';
import DownBanner from './Allpages/DownBanner/DownBanner';
import Nav from './Allpages/Navbar/Nav';
import NewColletion from './Allpages/NewColletion/NewColletion';
import './App.css';

function App() {
  return (
    <div className='font-sans'>
      {/* navbar part */}
      <Nav />
      {/* Banner part  */}
      <Banner />
      {/* DownBanner part */}
      <DownBanner />
      {/* NEW COLLECTION part */}
      <NewColletion />
      {/* Top Month Sellers */}
      <Cards></Cards>
    </div>
  );
}

export default App;
