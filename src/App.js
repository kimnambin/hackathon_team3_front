import Login from "./pages/Login/Login";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from "./pages/Signup/SignUp";
import FindPw from './pages/Login/FindPw';
import ProSignUp from "./pages/Professional/ProSignUp";
import FirstSignup from "./pages/Signup/FirstSignup";
import CommWrite from './pages/Community/CommWrite';
import CommList from './pages/Community/CommList';
import CommView from './pages/Community/CommView';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { CategoryProvider } from './components/Comm/Comm_context';
import ProCommList from "./pages/Community/Professional/ProCommList";
import ProCommView from "./pages/Community/Professional/ProCommView";
import ProCommWrite from "./pages/Community/Professional/ProCommWrite";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />

        <CategoryProvider>
          <Routes>
            {/* 로그인 및 회원가입 */}
            <Route path="/login" element={<Login />} />
            <Route path="/firstsignup" element={<FirstSignup />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/findPw" element={<FindPw />} />
            <Route path="/pro_signup" element={<ProSignUp />} />

            {/* 커뮤니티 */}
            <Route path="/comm_list" element={<CommList />} />
            <Route path="/comm_view" element={<CommView />} />
            <Route path="/comm_write" element={<CommWrite />} />

            {/* 전문가가 올린 커뮤니티 */}
            <Route path="/pro_comm_list" element={<ProCommList />} />
            <Route path="/pro_comm_view" element={<ProCommView />} />
            <Route path="/pro_comm_write" element={<ProCommWrite />} />

          </Routes>
        </CategoryProvider>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
