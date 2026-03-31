import React from "react";

const Product = ({ product }) => {
  const { name, badge, image, description, price, features, cta } = product;
  return (
    <div class=" grid  items-center justify-center  ">
      <div class="flex-col w-full max-w-sm bg-white rounded-3xl shadow-xl overflow-hidden border border-blue-200">
        {/* <!-- Top border accent --> */}
        <div class="h-1 bg-blue-500"></div>

        <div class="p-6">
          {/* <!-- Header with icon and badge --> */}
          <div class="flex justify-between items-start mb-6">
            <div class="w-12 h-12 bg-yellow-100 rounded-2xl flex items-center justify-center">
              <span class="text-3xl"><img src={image} alt="" /></span>
            </div>

            <div class="bg-yellow-400 text-yellow-900 text-xs font-semibold px-4 py-1.5 rounded-full flex items-center gap-1">
              <i class="fas fa-star text-xs"></i>
              {badge}
            </div>
          </div>

          {/* <!-- Title --> */}
          <h2 class="text-3xl font-bold text-gray-900 mb-2">{name}</h2>

          {/* <!-- Description --> */}
          <p class="text-gray-600 text-[15px] leading-relaxed mb-6">
           {description}
          </p>

          {/* <!-- Pricing --> */}
          <div class="mb-6">
            <span class="text-2xl font-bold text-gray-900">{price}</span>
          </div>

          {/* <!-- Features --> */}
          <ul class="space-y-3 mb-8">
            <li class="flex items-center gap-3 text-gray-700">
              <div class="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                <i class="fas fa-check text-green-600 text-xs"></i>
              </div>
              <span class="text-[15px]">{features[0]}</span>
            </li>
            <li class="flex items-center gap-3 text-gray-700">
              <div class="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                <i class="fas fa-check text-green-600 text-xs"></i>
              </div>
              <span class="text-[15px]">{features[1]}</span>
            </li>
            <li class="flex items-center gap-3 text-gray-700">
              <div class="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                <i class="fas fa-check text-green-600 text-xs"></i>
              </div>
              <span class="text-[15px]">{features[2]}</span>
            </li>
          </ul>

          {/* <!-- Buy Now Button --> */}
          <button class="w-full bg-linear-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-2xl text-lg shadow-lg shadow-purple-500/30 transition-all active:scale-[0.97]">
            {cta}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
