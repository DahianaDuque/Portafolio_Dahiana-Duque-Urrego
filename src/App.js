import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Main from './pages/main/Main';
import '../src/Style/Global.css';
import Contenido from './pages/Contenidos/Cont';

function App() {
  return (
    <BrowserRouter>
      <div className='main-screen'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='main' element={<Main />} />
          <Route path='/contenido' element={<Contenido />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;