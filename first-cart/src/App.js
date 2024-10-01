// App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import ProductPage from './components/ProductPage';
import LoginPage from './components/LoginPage';
import ContactPage from './components/ContactPage';

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/productpage" element={<ProductPage />} /> {/* Ensure lowercase */}
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/ContactPage" element={<ContactPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
