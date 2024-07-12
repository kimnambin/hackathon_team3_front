import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './src/components/Navbar';
import Footer from './src/components/Footer'




function App() {
  return (

    <div className='App'>

      <Navbar/>
      
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element = {<SignUp/>} />
          <Route path="/findPw" element = {<FindPw/>} />
          <Route path="/pro_signup" element = {<ProSignUp/>} />
        </Routes>
      </BrowserRouter>

      <Footer/>
    </div>
  );
}

export default App;
