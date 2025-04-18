import React, { useState, useEffect } from "react";
import { API_URL } from "../api";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar"
import { useCart } from "./CartContext"; // Import cart context

const ProductMenu = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart(); // Access cart function
  const { firmId, firmName } = useParams();

  const productHandler = async () => {
    try {
      const response = await fetch(`${API_URL}/product/${firmId}/products`);
      const newProductData = await response.json();
      setProducts(newProductData.products);
    } catch (error) {
      console.error("product failed to fetch", error);
    }
  };

  useEffect(() => {
    productHandler();
  }, []);

  return (
    <>
      <Navbar />
      <section className="productSection">
        <h3>{firmName}</h3>
        {products.map((item) => {
          return (
            <div className="productBox" key={item._id}>
              <div>
                <div><strong>{item.productName}</strong></div>
                <div>₹{item.price}</div>
                <div>{item.description}</div>
              </div>
              <div className="productGroup">
                <img src={`${API_URL}/uploads/${item.image}`} alt="product" />
                <div className="addButton" onClick={() => addToCart(item)}>
                  ADD
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default ProductMenu;
