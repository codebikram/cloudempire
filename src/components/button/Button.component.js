import React, { useState } from "react";
import Modal from "../modal/Modal.component";

const Button = ({ className }) => {
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    setShowModal(true);
  };
  return (
    <>
      <button
        onClick={handleClick}
        className={`${
          className && className
        } text-sm md:text-base bg-yellow-600 
                  text-white font-bold rounded-md p-4 hover:from-yellow-700
                  hover:bg-yellow-700`}
      >
        Get a Free Consultation
      </button>
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default Button;
