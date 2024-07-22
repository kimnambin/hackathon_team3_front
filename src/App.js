//url 접근 막기
//1. 비회원일 때 메인 > 자가진단 및 병원찾기 > 로그인 창
//2. 커뮤니티 > 끄적이기, 댓글, 북마크 등 클릭시 > 로그인 창

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route } from 'react-router-dom';


//메인 페이지
import Main1 from './pages/Mainpages/Main1';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
//로그인 페이지
import Login from "./pages/login/Login";
import FindPw from './pages/login/FindPw';
//회원가입 페이지
import ProSignUp from "./pages/Professional/ProSignUp";
import FirstSignup from "./pages/signup/FirstSignup";
import SignUp from "./pages/signup/SignUp";
// 커뮤니티 부분
import { CategoryProvider } from './components/Comm/Comm_context';
import ProCommList from "./pages/Community/Professional/ProCommList";
import ProCommView from "./pages/Community/Professional/ProCommView";
import ProCommWrite from "./pages/Community/Professional/ProCommWrite";
import CommWrite from './pages/Community/CommWrite';
import CommList from './pages/Community/CommList';
import CommView from './pages/Community/CommView';
// 마이페이지 부분
import Profile from "./pages/Mypage/Profile";
import MyPost from "./pages/Mypage/MyPost";
import HospitalMap from "./pages/map/HospitalMap";
import BlueSave from './pages/Mypage/BlueSave';
import StressSave from './pages/Mypage/StressSave'
import AnxietySave from './pages/Mypage/AnxietySave'
//자가진단 페이지
import Blue from './pages/selftest/Blue/Blue';
import Blue2 from './pages/selftest/Blue/Blue2';
import Blue3 from './pages/selftest/Blue/Blue3';
import Blue4 from './pages/selftest/Blue/Blue4';
import BlueResult from './pages/selftest/Blue/BlueResult';
import StressTest from './pages/selftest/stress/StressTest';
import StressTest2 from './pages/selftest/stress/StressTest2';
import StressResult from './pages/selftest/stress/StressResult';
import Anxiety from './pages/selftest/anxiety/Anxiety';
import Anxiety2 from './pages/selftest/anxiety/Anxiety2';
import Anxiety3 from './pages/selftest/anxiety/Anxiety3';
import Anxiety4 from './pages/selftest/anxiety/Anxiety4';
import Anxiety5 from './pages/selftest/anxiety/Anxiety5';
import AnxietyResult from './pages/selftest/anxiety/AnxietyResult';
//관리자 페이지
import Manager from './pages/manager/Manager';
//로그인 여부 확인 후 url 경로 변경
import PrivateRoute from './route/PrivateRoute';


function App() {
  return (
    <div className='App nanum-myeongjo-regular'>
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
          {/* 마이페이지 */}
          <Route path="/profile" element={<PrivateRoute  component={Profile}/>} />
          <Route path="/mypost" element={<PrivateRoute  component={MyPost}/>} />
          <Route path="/blueSave" element={<PrivateRoute  component={BlueSave}/>} />
          <Route path="/stressSave" element={<PrivateRoute  component={StressSave}/>} />
          <Route path="/anxietySave" element={<PrivateRoute  component={AnxietySave}/>} />
          <Route path="/hospital_map" element={<PrivateRoute component={HospitalMap} />} />
          {/* 우울증 자가진단 */}
          <Route path='/blue' element={<PrivateRoute  component={Blue}/>} />
          <Route path='/blue2' element={<PrivateRoute component={Blue2}/>} />
          <Route path='/blue3' element={<PrivateRoute component={Blue3}/>} />
          <Route path='/blue4' element={<PrivateRoute component={Blue4}/>} />
          <Route path='/blueResult' element={<PrivateRoute component={BlueResult}/>} />
          {/* 스트레스 자가진단 */}
          <Route path='/StressTest' element={<StressTest />} />
          <Route path='/StressTest2' element={<StressTest2 />} />
          <Route path='/stressResult' element={<StressResult />} />
          {/* 불안 자가진단 */}
          <Route path='/anxiety' element={<Anxiety />} />
          <Route path='/anxiety2' element={<Anxiety2 />} />
          <Route path='/anxiety3' element={<Anxiety3 />} />
          <Route path='/anxiety4' element={<Anxiety4 />} />
          <Route path='/anxiety5' element={<Anxiety5 />} />
          <Route path='/AnxietyResult' element={<AnxietyResult />} />
          {/* 관리자 페이지 */}
          <Route path='/' element={<Main1 />} />
          <Route path='/manager' element={<Manager />} />
        </Routes>
      </CategoryProvider>
      <Footer />
    </div>
  );
}

export default App;