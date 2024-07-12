import Login from "./pages/login/Login";
import {BrowserRouter , Routes , Route , Link} from 'react-router-dom'
import SignUp from "./pages/signup/SignUp";
import FindPw from './pages/login/FindPw'
import ProSignUp from "./pages/signup/ProSignUp";

function App() {
  return (
    <div>
      <BrowserRouter>
      
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element = {<SignUp/>} />
        <Route path="/findPw" element = {<FindPw/>} />
        <Route path="/pro_signup" element = {<ProSignUp/>} />
        {/* <Route path="/theater" element = {<Theater/>} /> */}
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
