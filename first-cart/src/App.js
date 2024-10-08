// App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import ProductPage from './components/ProductPage';
import LoginPage from './components/LoginPage';
import ContactPage from './components/ContactPage';
import Signup from './components/Signup';
import Cart from './components/Cart';
import Counter from './components/Counter';



function App() {
  // const [cart, setCart] = useState([]);
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/productpage" element={<ProductPage />} />
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/ContactPage" element={<ContactPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Counter" element={<Counter />} />
        </Routes>
        
      </main>
    </Router>
  );
}

export default App;
