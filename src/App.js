import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import Main1 from './pages/Mainpages/Main1'




function App() {
  return (

    <div className='App'>

      <Navbar/>
      
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Main1/>}/>

        </Routes>
      </BrowserRouter>

      <Footer/>
    </div>
  );
}

export default App;
