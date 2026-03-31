import React, { use, useState } from "react";
import Product from "./Product";
import Cart from "../Cart/Cart";

const PremiumTools = ({ productsPromise }) => {
  const products = use(productsPromise);
  // console.log(products);
  const [selectedType, setSelectedType] = useState("products");
  const [selectedProduct, setSelectedBuy] = useState([])

  return (
    <div className="max-w-325 mx-auto">
      <div className="text-center">
        <h1 className="text-5xl font-black mb-5">Premium Digital Tools</h1>
        <p className="text-[#627382] mb-10">
          Choose from our curated collection of premium digital products
          designed <br /> to boost your productivity and creativity.
        </p>
      </div>
      <div className="flex justify-center mb-10 rounded-full">
        {/* Products Button */}
        <button
          onClick={() => setSelectedType("products")}
          className={`btn px-5 rounded-l-full transition-all duration-300 ${
            selectedType === "products"
              ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white"
              : "bg-white text-black"
          }`}
        >
          Products
        </button>

        {/* Cart Button */}
        <button
          onClick={() => setSelectedType("cart")}
          className={`btn px-5 rounded-r-full transition-all duration-300 ${
            selectedType === "cart"
              ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white"
              : "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-transparent bg-clip-text"
          }`}
        >
          Cart (0)
        </button>
      </div>
      <div className="grid md:grid-cols-3 gap-5">
        {selectedType === "products" ? (
          products.map((product) => (
            <Product key={product.id} product={product}
            selectedBuy={selectedProduct}
            setSelectedBuy={setSelectedBuy} />
          ))
        ) : (  
          <Cart selectedBuy={selectedProduct}  />
        )}
      </div>
    </div>
  );
};

export default PremiumTools;
