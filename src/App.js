
import './App.css';
import Header from './component/Header';
import Home from './component/Home';
import { Route, Routes } from 'react-router-dom'
import Cart from './component/Cart';
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
