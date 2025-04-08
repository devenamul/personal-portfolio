import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './features/pages/Home/Home'
import About from './features/pages/About/About'
import Service from './features/pages/Service/Service'
import Blog from './features/pages/Blog/Blog'
import Portfolio from './features/pages/Portfolio/Portfolio'
import Contact from './features/pages/Contact/Contact'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
              <Route path='/' element={< Home/>}/> 
              <Route path='/about' element={< About/>}/> 
              <Route path='/service' element={< Service/>}/> 
              <Route path='/blog' element={< Blog/>}/> 
              <Route path='/portfolio' element={< Portfolio/>}/> 
              <Route path='/contact' element={< Contact/>}/> 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
