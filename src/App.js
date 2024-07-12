import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer'




function App() {
  return (

    <div className='App'>

      <Navbar/>
      
      <BrowserRouter>
        <Routes>

          {/* <Route path='' element={<Navbar/>}/>   <-페이지 이동이 필요할 때 이런 형식으로 작성 */}

        </Routes>
      </BrowserRouter>

      <Footer/>
    </div>
  );
}

export default App;
