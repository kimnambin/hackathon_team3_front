import Login from "./pages/Login/Login";
import {BrowserRouter , Routes , Route } from 'react-router-dom'
import SignUp from "./pages/Signup/SignUp";
import FindPw from './pages/Login/FindPw'
import ProSignUp from "./pages/Professional/ProSignUp";
import FirstSignup from "./pages/Signup/FirstSignup";
import Navbar from './components/Navbar';
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navbar/>
      <BrowserRouter>
  
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/firstsignup" element={<FirstSignup />} />
        <Route path="/signup" element = {<SignUp/>} />
        <Route path="/findPw" element = {<FindPw/>} />
        <Route path="/pro_signup" element = {<ProSignUp/>} />
        {/* <Route path="/theater" element = {<Theater/>} /> */}
      </Routes>
      </BrowserRouter>

      <Footer/>
    </div>
  );
}
export default App;
