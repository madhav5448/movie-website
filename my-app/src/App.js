
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/home/Home';
import Header from './component/header/header';
import Footer from './component/footer/footer';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className='container'>

          <Routes><Route path='/' element={<Home />} />
           
           </Routes>
        </div>
        <Footer />

      </BrowserRouter>
    </div>

  );
}

export default App;
