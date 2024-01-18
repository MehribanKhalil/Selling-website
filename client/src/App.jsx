import { Helmet, HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Admin from './pages/Admin';
import Basket from './pages/Basket';
import Detailpage from './pages/DetailPage';
import WishlistPage from './pages/Wishlist';
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
          <Route path="/wishlist" element={<WishlistPage/>} />
          <Route path="/:id" element={<Detailpage/>} />

          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>

  )
}

export default App
