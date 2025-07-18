import React, { useEffect, useState } from "react";
import "./FeaturedProducts.css";

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setProducts(data);
  };
  return (
    <section className="featured-section">
      <h2>Featured Products</h2>
      <div className="products-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p className="price">{product.price}</p>
            <div className="button-container">
              <button className="liquid-glass-button">Buy Now</button>
              <button className="liquid-glass-button">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default FeaturedProducts;
