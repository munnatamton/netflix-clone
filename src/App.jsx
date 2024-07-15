import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import NoPage from './pages/NoPage';


function App() {
  return (
    
    <BrowserRouter>
    <Routes>
      </Routes></BrowserRouter>
    <div className="App">
      <Navbar/>
    </div>
  );
}

export default App;
