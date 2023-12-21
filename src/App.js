
import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Page from './Components/Page';

function App() {
  return (
    <div className="flex flex-col h-screen justify-between">


        <Navbar/>
          <Page className='mb-auto'/>
        <Footer/>

        
    </div>
  );
}

export default App;
