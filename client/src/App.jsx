import { Helmet, HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Admin from './pages/Admin';
import Basket from './pages/Basket';
const helmetContext = {};
function App() {

  return (
    <HelmetProvider context={helmetContext}>
      <BrowserRouter >
        <Routes>
          <Route element={<MainLayout/>}>
          <Route path="/" element={<Home/>} />
          <Route path="/admin" element={<Admin/>} />
          <Route path="/basket" element={<Basket/>} />

          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>

  )
}

export default App
