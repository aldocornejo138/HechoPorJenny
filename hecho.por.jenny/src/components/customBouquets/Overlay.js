import { Fragment, useEffect, useState } from "react";
import "./products.css";

export function Overlay({ isOpen, onClose, children }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Use setTimeout to delay the application of the 'show' class
      const timerId = setTimeout(() => {
        setIsVisible(true);
      }, 10);

      return () => clearTimeout(timerId);
    } else {
      setIsVisible(false);
    }
  }, [isOpen]);

  return (
    <Fragment>
      {isOpen && (
        <div className="overlay">
          <div className="overlay__background" onClick={onClose} />
          <div className={`overlay__container ${isVisible ? "show" : ""}`}>
            <div className="overlay__controls">
              <button
                className="overlay__close"
                type="button"
                onClick={onClose}
                button
              />
            </div>
            {children}
          </div>
        </div>
      )}
    </Fragment>
  );
}
export default Overlay;
