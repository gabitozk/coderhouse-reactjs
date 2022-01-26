//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/index.jsx';
import ItemListContainer from './components/ItemListContainer/index.jsx';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer />
    </div>  

    /*
    <BrowserRouter>
      <Routes>
        <Route></Route>
      </Routes>
    </BrowserRouter>
    */
  );
}

export default App;
