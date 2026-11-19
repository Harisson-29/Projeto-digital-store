import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './Pages/Layout';
import { HomePage } from './Pages/HomePage';
import { ProductListingPage } from './Pages/ProductListingPage';
import { ProductDetailsPage } from './components/ProductDetails';
import { LoginPage } from './Pages/LoginPage';
import { CadastroPage } from './Pages/CadastroPage';
import { MyOrdersPage } from './Pages/MyOrdersPage';
import { NotFoundPage } from './Pages/NotFoundPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="/produtos" element={<Layout><ProductListingPage /></Layout>} />
        <Route path="/produto" element={<Layout><ProductDetailsPage /></Layout>} />
        <Route path="/login" element={<Layout><LoginPage /></Layout>} />
        <Route path="/cadastro" element={<Layout><CadastroPage /></Layout>} />
        <Route path="/meus-pedidos" element={<Layout><MyOrdersPage /></Layout>} />

        {/* Rota coringa (404): captura /categorias e qualquer outro link sem página */}
        <Route path="*" element={<Layout><NotFoundPage /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
}