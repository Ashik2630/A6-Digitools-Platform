import React, { use } from "react";
import Product from "./Product";

const PremiumTools = ({ productsPromise }) => {
  const products = use(productsPromise);
  console.log(products);
  return (
    <div className="max-w-325 mx-auto">
      <div className="text-center">
        <h1 className="text-5xl font-black mb-5">Premium Digital Tools</h1>
        <p className="text-[#627382] mb-10">
          Choose from our curated collection of premium digital products
          designed <br /> to boost your productivity and creativity.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-5  ">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default PremiumTools;
