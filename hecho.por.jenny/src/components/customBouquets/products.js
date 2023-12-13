import React, { useState } from "react";
import "./products.css";
import { useInView } from "react-intersection-observer";
import Overlay from "./Overlay";

const ProductCard = ({ imageSrc, title, price, addToCart }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
  });

  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const openOverlay = () => {
    setIsOverlayOpen(true);
  };

  const closeOverlay = () => {
    setIsOverlayOpen(false);
  };

  return (
    <div className="product-details">
      <div
        onClick={openOverlay}
        ref={ref}
        className={`card ${inView ? "zoomIn" : "zoomOut"}`}
      >
        <img src={imageSrc} alt={title} />
      </div>
      <div
        ref={ref}
        className={`product-details ${inView ? "zoomIn" : "zoomOut"}`}
      >
        <h2>{title}</h2>
        <h3>${price}</h3>
      </div>
      {isOverlayOpen && (
        <Overlay isOpen={isOverlayOpen} onClose={closeOverlay}>
          <img className="card" src={String(imageSrc)} alt={String(title)} />
          <h2>{String(title)}</h2>
          <h3>${String(price)}</h3>
          <button className="product-details-button" onClick={addToCart}>
            Add To Cart
          </button>
        </Overlay>
      )}
    </div>
  );
};

//Product 1: price_1OMEvyI1zNR8sZYDu7Iv8yqk
//Product 2: price_1OMEy0I1zNR8sZYD2Przz5fx

const Products = ({ addToCart }) => {
  const productsData = [
    {
      id: "price_1OMEvyI1zNR8sZYDu7Iv8yqk",
      imageSrc: "pic-1.jpg",
      title: "Product 1",
      price: "149.99",
    },
    {
      id: "price_1OMEy0I1zNR8sZYD2Przz5fx",
      imageSrc: "pic-2.jpg",
      title: "Product 2",
      price: "149.99",
    },
    {
      imageSrc: "url_to_your_image_3",
      title: "Product 3",
      price: "149.99",
    },
    {
      imageSrc: "url_to_your_image_4",
      title: "Product 4",
      price: "149.99",
    },
    {
      imageSrc: "url_to_your_image_5",
      title: "Product 5",
      price: "149.99",
    },
  ];

  return (
    <div className="product-container">
      {productsData.map((product, index) => (
        <div className="emptyDiv" key={index}>
          <ProductCard
            imageSrc={product.imageSrc}
            title={product.title}
            price={product.price}
            addToCart={() =>
              addToCart(
                product.title,
                product.price,
                product.imageSrc,
                product.id
              )
            } // Pass individual properties to addToCart
          />
        </div>
      ))}
    </div>
  );
};

export default Products;
