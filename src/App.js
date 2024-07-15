import Login from "./pages/Login/Login";
import {BrowserRouter , Routes , Route } from 'react-router-dom'
import SignUp from "./pages/Signup/SignUp";
import FindPw from './pages/Login/FindPw'
import ProSignUp from "./pages/Professional/ProSignUp";
import FirstSignup from "./pages/Signup/FirstSignup";
import CommWrite from './pages/Community/CommWrite'
import CommList from './pages/Community/CommList'
import CommView from './pages/Community/CommView'
import Navbar from './components/Navbar';
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navbar/>
      <BrowserRouter>
  
      <Routes>
        {/* 로그인 및 회원가입 */}
        <Route path="/login" element={<Login />} />
        <Route path="/firstsignup" element={<FirstSignup />} />
        <Route path="/signup" element = {<SignUp/>} />
        <Route path="/findPw" element = {<FindPw/>} />
        <Route path="/pro_signup" element = {<ProSignUp/>} />
       
       {/* 커뮤니티 */}CommList
       <Route path="/comm_list" element = {<CommList/>} />
       <Route path="/comm_view" element = {<CommView/>} />
       <Route path="/comm_write" element = {<CommWrite/>} />
      </Routes>
      </BrowserRouter>

      <Footer/>
    </div>
  );
}
export default App;
