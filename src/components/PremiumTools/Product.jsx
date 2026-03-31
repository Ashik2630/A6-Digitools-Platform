import React, { useState } from "react";
import checkImg from "../../assets/products/Check.png";
import { toast } from "react-toastify";
// import { toast } from "react-toastify";

const Product = ({ product, selectedProduct, setSelectedProduct }) => {
  const { name, badge, image, description, price, features } = product;
  const [isBuy, setIsBuy] = useState(false);
  const handleBuyNowBtn = () => {
    setIsBuy(true)
    setSelectedProduct([...selectedProduct, product])
    toast.success(`${product.name} is Added`)
    
  }

  return (
    <div className=" grid  items-center justify-center  ">
      <div  className="flex-col w-full max-w-sm bg-white rounded-3xl shadow-xl overflow-hidden border border-blue-200 hover:scale-105 transition duration-300">
        {/* <!-- Top border accent --> */}
        <div className="h-1 bg-blue-500"></div>

        <div className="p-6">
          {/* <!-- Header with icon and badge --> */}
          <div className="flex justify-between items-start mb-6">
            <div className="w-12 h-12 bg-yellow-100 rounded-2xl flex items-center justify-center">
              <span className="text-3xl">
                <img src={image} alt="" />
              </span>
            </div>

            <div className="bg-yellow-400 text-yellow-900 text-xs font-semibold px-4 py-1.5 rounded-full flex items-center gap-1">
              <i className="fas fa-star text-xs"></i>
              {badge}
            </div>
          </div>

          {/* <!-- Title --> */}
          <h2 className="text-3xl font-bold text-gray-900 mb-2">{name}</h2>

          {/* <!-- Description --> */}
          <p className="text-gray-600 text-[15px] leading-relaxed mb-6">
            {description}
          </p>

          {/* <!-- Pricing --> */}
          <div className="mb-6">
            <span className="text-2xl font-bold text-gray-900">{price}</span>
          </div>

          {/* <!-- Features --> */}
          <ul className="space-y-3 mb-8">
            <li className="flex items-center gap-3 text-gray-700">
              <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                <i className="fas fa-check text-green-600 text-xs"></i>
              </div>
              <span className="text-[15px]">{features[0]}</span>
            </li>
            <li className="flex items-center gap-3 text-gray-700">
              <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                <i className="fas fa-check text-green-600 text-xs"></i>
              </div>
              <span className="text-[15px]">{features[1]}</span>
            </li>
            <li className="flex items-center gap-3 text-gray-700">
              <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                <i className="fas fa-check text-green-600 text-xs"></i>
              </div>
              <span className="text-[15px]">{features[2]}</span>
            </li>
          </ul>

          {/* <!-- Buy Now Button --> */}
          <button
            onClick={ handleBuyNowBtn}
            className="w-full bg-linear-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-2xl text-lg shadow-lg shadow-purple-500/30 transition-all active:scale-[0.97]"
          >
            {isBuy ? (
              <span className="flex text-center justify-center items-center gap-2">
                <img src={checkImg} alt="check" className="w-4 h-4" />
                Added to cart
              </span>
            ) : (
              "Buy Now"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
