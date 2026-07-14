import { useState } from "react";
import ProductCard from "./productcard"; 
const products = [
  {
    name: "Laptop",
    price: 999.99,
    description: "Slim and powerful for work or study.",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=600&q=80"
  },
  { ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,m
    name: "Smartphone",z    
    price: 699.5,
    description: "Fast performance with a bright display.",image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Wireless Headphones",
    price: 149.99,
    description: "Immersive sound with long battery life.",
    image: "https://images.unsplash.com/photo-1505740420928- ?auto=format&fit=crop&w=600&q=80"
  }
];

export default function App() {
  const [showProducts, setShowProducts] = useState(false);

  return (
    <div className="app">
      <h1>Featured Products</h1>
      <button type="button" className="show-products-btn" onClick={() => setShowProducts(true)}>
        Show Products
      </button>

      {showProducts && (
        <div className="products-grid">
          {products.map((product) => (
            <ProductCard
              key={product.name}
              name={product.name}
              price={product.price}
              description={product.description}
              image={product.image}
            />
          ))}
        </div>
      )}
    </div>
  );
}