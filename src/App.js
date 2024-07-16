import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
// import Blue2 from './pages/selftest/Blue/Blue2';
// import StressResult from './pages/selftest/stress/StressResult';
import Anxiety from './pages/selftest/anxiety/Anxiety'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />

        <Routes>
          {/* <Route path='/' element={<Blue2 />} /> */}
          {/* <Route path='/' element={<StressResult />} /> */}
          <Route path='/' element={<Anxiety />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
