import React from "react";
import shoppingCart from "../../assets/products/shoppingCart.png";
import { toast } from "react-toastify";

const Cart = ({ selectedProduct, setSelectedProduct }) => {

  const handleSelectedProduct = (product) => {
    const filteredProducts = selectedProduct.filter(
      (item) => item.name !== product.name
    );
    setSelectedProduct(filteredProducts);
    toast.error(`${product.name} is removed`);
  };

  const total = selectedProduct.reduce((sum, item) => {
    return sum + parseInt(item.price.replace("$", ""));
  }, 0);

  return (
    <div className="mb-20 p-2 md:p-2">
      <div className="space-y-5">
        <h1 className="text-2xl font-bold">Your Cart</h1>

        {selectedProduct.length === 0 ? (
          <div className="shadow-xl h-100 py-10 rounded-2xl text-center">
            <img className="mx-auto w-20 mt-5" src={shoppingCart} alt="Cart" />
            <p className="text-[18px] mt-2">
              Your cart is empty, add a product.
            </p>
          </div>
        ) : (
          <>
            {selectedProduct.map((product) => (
              <div
                key={product.id}
                className="flex justify-between items-center gap-6 p-6 rounded-2xl border bg-[#F9FAFC]"
              >
                <div className="flex items-center gap-10">
                  <img className="h-8" src={product.image} alt={product.name} />
                  <div>
                    <h2 className="text-[14px] font-bold">{product.name}</h2>
                    <h2 className="text-[#627382]">{product.price}</h2>
                  </div>
                </div>

                <button
                  onClick={() => handleSelectedProduct(product)}
                  className="text-[#FF3980] text-[14px] font-bold"
                >
                  Remove
                </button>
              </div>
            ))}

            <div className="flex justify-between mt-4 mx-2">
              <span className="text-gray-500">Total:</span>
              <span className="font-bold text-xl">${total}</span>
            </div>
            <button
              onClick={() => setSelectedProduct([])}
              className="w-full py-3 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-semibold mt-2"
            >
              Proceed To Checkout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;