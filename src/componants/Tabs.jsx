import React from "react";
import Cart from "./Cart";

const Tabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="bg-white py-10">
      <div className="text-center space-y-3">
        <h1 className="font-bold text-4xl text-gray-800">
          Premium Digital Tools
        </h1>
        <p className="text-gray-400 text-sm leading-relaxed">
          Choose from our curated collection of premium digital products
          <br />
          designed to boost your productivity and creativity.
        </p>
      </div>

      <div className="flex justify-center mt-6">
        <div className="tabs tabs-box bg-gray-100 p-1 rounded-full">
          <input
            type="radio"
            name="my_tabs_1"
            className="tab rounded-full px-6 text-gray-600 checked:bg-[#4f39f6] checked:text-white"
            aria-label="Products"
            checked={activeTab === "products"}
            onChange={() => setActiveTab("products")}
          />

          <input
            type="radio"
            name="my_tabs_1"
            className="tab rounded-full px-6 text-gray-600 checked:bg-[#4f39f6] checked:text-white"
            aria-label={`Cart (${Cart.length})`}
            checked={activeTab === "cart"}
            onChange={() => setActiveTab("cart")}
          />
        </div>
      </div>
    </div>
  );
};

export default Tabs;
