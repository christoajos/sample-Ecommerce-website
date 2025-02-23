import React from 'react';
import Navbar from './components/Navbar';
import ProductGrid from './components/ProductGrid';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <ProductGrid />
        </main>
      </div>
    </CartProvider>
  );
}

export default App;