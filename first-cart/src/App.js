import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';

function App() {
  const product = [
    {
      price: 115000,
      name: "Iphone 16 pro max",  // Fixed Name to name
      quantity: 0,
    },
    {
      price: 50000,
      name: "Samsung S24",  // Fixed Name to name
      quantity: 0,
    },
  ];

  return (
    <>
      <Navbar />
      <main className='container mt-5'>
      <ProductList product={product} />
      </main>
    </>
  );
}

export default App;
