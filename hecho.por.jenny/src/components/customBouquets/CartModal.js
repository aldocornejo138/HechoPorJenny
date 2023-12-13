// CartModal.js
import React from "react";
import "./CartModal.css"; // Import your modal styles

const CartModal = ({ cartItems, onClose, onItemDelete, onQuantityChange }) => {
  const handleDelete = (index) => {
    onItemDelete(index);
  };

  const handleQuantityChange = (index, newQuantity) => {
    // Ensure that the new quantity is greater than or equal to zero
    if (newQuantity >= 0) {
      onQuantityChange(index, newQuantity);
    }
  };

  const calculateTotalPrice = () => {
    const totalPrice = cartItems.reduce((total, item) => {
      const itemPrice = parseFloat(item.price);
      const itemQuantity = item.quantity || 0;

      if (!isNaN(itemPrice)) {
        return total + itemPrice * itemQuantity;
      } else {
        console.error(`Invalid price for item: ${item.title}`);
        return total;
      }
    }, 0);

    return totalPrice;
  };

  const checkout = async () => {
    try {
      const response = await fetch("http://localhost:4000/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cartItems }),
      });

      const data = await response.json();

      if (response.ok) {
        window.location.assign(data.url);
      } else {
        console.error(`Error: ${data.error}`);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <div>
      <div className="overlayBackground" onClick={onClose} />
      <div className="cart-modal">
        <div className="cart-header">
          <h2>Items In Cart</h2>
          <button className="close-btn" onClick={onClose}>
            Close
          </button>
        </div>
        {cartItems.length === 0 ? (
          <p>No Items In Cart</p>
        ) : (
          <div>
            <ul>
              {cartItems.map((item, index) => (
                <li key={index}>
                  <div className="cart-item">
                    <div className="item-info">
                      <img
                        src={item.imageSrc}
                        alt={item.title}
                        className="miniature-image"
                      />
                      <p className="item-title">{item.title}</p>
                      <p className="item-price">${item.price}</p>

                      <button
                        className="quantity-btn"
                        onClick={() =>
                          handleQuantityChange(index, item.quantity - 1)
                        }
                      >
                        -
                      </button>
                      <span className="quantity">{item.quantity}</span>
                      <button
                        className="quantity-btn"
                        onClick={() =>
                          handleQuantityChange(index, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </div>
                    <div className="item-actions">
                      <button
                        className="delete-btn"
                        onClick={() => handleDelete(index)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="total-price">
              <p>
                Sub Total: ${calculateTotalPrice().toFixed(2)}
                <br />
                Shipping: FREE
              </p>
            </div>
            <div className="checkout-btn-container">
              <button
                className="checkout-btn"
                variant="success"
                onClick={checkout}
              >
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;
