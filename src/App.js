
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/home/Home';
import Header from './component/header/header';
import Footer from './component/footer/footer';
import MovieDetail from './component/MovieDetail/MovieDetail';
import NoPageFound from './component/NoPageFound/NoPageFound';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className='container'>

          <Routes>
            <Route path='/' element={<Home />} />
          <Route path='movies/:imdbID' element={<MovieDetail />} />  
          <Route path="*" element={<NoPageFound />}  />      
          </Routes>
        </div>
        <Footer />

      </BrowserRouter>
    </div>

  );
}

export default App;
