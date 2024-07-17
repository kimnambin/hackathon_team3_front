import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import Main1 from './pages/Mainpages/Main1'

import Blue from './pages/selftest/Blue/Blue';
import Blue2 from './pages/selftest/Blue/Blue2';
import Blue3 from './pages/selftest/Blue/Blue3';
import Blue4 from './pages/selftest/Blue/Blue4';
import BlueResult from './pages/selftest/Blue/BlueResult';

import StressTest from './pages/selftest/stress/StressTest';
import StressTest2 from './pages/selftest/stress/StressTest2';
import StressResult from './pages/selftest/stress/StressResult';

import Anxiety from './pages/selftest/anxiety/Anxiety'
import Anxiety2 from './pages/selftest/anxiety/Anxiety2'
import Anxiety3 from './pages/selftest/anxiety/Anxiety3'
import Anxiety4 from './pages/selftest/anxiety/Anxiety4'
import Anxiety5 from './pages/selftest/anxiety/Anxiety5'
import AnxietyResult from './pages/selftest/anxiety/AnxietyResult'

import Manager from './pages/manager/Manager';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/' element={<Main1/>}/>

          {/*우울증 자가진단 */}
          <Route path='/blue' element={<Blue />} />
          <Route path='/blue2' element={<Blue2 />} />
          <Route path='/blue3' element={<Blue3 />} />
          <Route path='/blue4' element={<Blue4 />} />
          <Route path='/blueResult' element={<BlueResult />} />

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
          <Route path='/Manager' element={<Manager />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
