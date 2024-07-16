import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NoPage from './pages/NoPage';
import Home from './pages/Home';
import TvShows from './pages/TvShows';
import Movies from './pages/Movies';
import Popular from './pages/Popular';
import MyList from './pages/MyList';
import Browse from './pages/Browse'
import Children from './pages/Children';


function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="TvShows" element={<TvShows/>}/>
            <Route path="Movies" element={<Movies/>}/>
            <Route path="Popular" element={<Popular/>}/>
            <Route path="MyList" element={<MyList/>}/>
            <Route path="Browse" element={<Browse/>}/>
            <Route path="Children" element={<Children/>}/>
            <Route path="no-page" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
