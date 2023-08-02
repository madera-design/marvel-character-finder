import React, { useState } from "react";
import "../assets/css/Modal.css";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isPalindrome, setIsPalindrome] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
    setInputValue("");
  };
  const checkPalindrome = (text) => {
    const cleanedText = text
      .toLowerCase()
      .replace(/[^a-zA-Z0-9]/g, "")
      .replace(/[^\w]/g, "");
    const reversedText = cleanedText.split("").reverse().join("");
    return cleanedText === reversedText;
  };

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    setIsPalindrome(checkPalindrome(newValue));
  };

  return (
    <div>
      <button className="btn-modal open-modal" onClick={openModal}>
        fn palíndromo
      </button>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2 className="text-modal">Funcion palíndromo</h2>
            <input
              className="input-modal"
              type="text"
              placeholder="escribe una palabra o una oración"
              value={inputValue}
              onChange={handleInputChange}
            />
            <h5 style={{ color: isPalindrome ? "green" : "red" }}>
              {isPalindrome ? "Es un palíndromo" : "No es un palíndromo"}
            </h5>
            <button className="btn-modal close-modal" onClick={closeModal}>
              Cerrar Modal
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
