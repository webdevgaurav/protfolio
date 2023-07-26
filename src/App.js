import './css/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import Header from './components/Header';

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
    </Routes>
    </>
  );
}

export default App;
