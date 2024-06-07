import React from "react";

interface AddToCartButtonProps {
  onClick: () => void;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="btn btn-primary text-white p-4 bg-black"
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
