import Banner from './Allcomponents/Banner';
import BigCard from './Allcomponents/BigCard';
import Navbar from './Allcomponents/Navbar';
import './Allcomponents/AllCss.css'

function App() {
  return (
    <div className='font-sans m-auto'>
      <Navbar />
      <Banner />
      <BigCard />
    </div>
  );
}

export default App;
