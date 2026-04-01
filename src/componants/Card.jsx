import React, { useState } from "react";
import check from "../assets/check.png";
import { toast } from "react-toastify";

const Card = ({ data, carts, setCarts }) => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const handleBuyNow = () => {
    setIsSubscribed(true);
    setCarts([...carts,data])
    toast.success("Item added to cart!")
  };

  return (
    <div className="max-h-[420px] bg-white rounded-2xl shadow-lg p-6 md:p-6 max-w-[90%] md:max-w-[300px]  space-y-4 hover:shadow-xl transition-transform transform hover:-translate-y-1">
      <div className="flex justify-between items-center">
        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-yellow-400">
          <img src={data.image} alt={data.name} />
        </div>

        <span
          className={`text-xs px-3 py-1 rounded-full font-medium ${
            data.tag === "Best Seller"
              ? "bg-[#FEF3C6] text-[#D97706]"
              : data.tag === "Popular"
                ? "bg-[#E1E7FF] text-[#1E40AF]"
                : data.tag === "New"
                  ? "bg-[#DBFCE7] text-[#166534]"
                  : "bg-gray-100 text-gray-500"
          }`}
        >
          {data.tag}
        </span>
      </div>

      <h2 className="text-lg font-semibold text-gray-800">{data.name}</h2>

      <p className="text-sm text-gray-400 leading-relaxed">
        {data.description}
      </p>

      <div className="text-xl font-bold text-gray-800">
        ${data.price}
        <span className="text-sm text-gray-400 font-normal">
          /{data.billing === "monthly" ? "Mo" : "One-Time"}
        </span>
      </div>

      <ul className="space-y-2">
        {data.features.map((feature, index) => (
          <li
            key={index}
            className="text-sm text-gray-600 flex items-center gap-2"
          >
            <img className="w-4 h-4" src={check} alt="check" /> {feature}
          </li>
        ))}
      </ul>

      <button
        onClick={() => handleBuyNow()}
        className="w-full py-2 rounded-full bg-primary text-white font-medium hover:opacity-90 transition"
      >
        {isSubscribed ? "Purchased" : "Buy Now"}
      </button>
    </div>
  );
};

export default Card;
