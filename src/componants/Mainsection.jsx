import React, { use } from "react";
import check from "../assets/check.png";

const Mainsection = ({ resPromise }) => {
  const data = use(resPromise);
  return (
    <>
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
              className="tab rounded-full px-6 text-gray-600 checked:bg-[#4f39f6] checked:to-[#4f39f6] checked:text-white"
              aria-label="Products"
              defaultChecked
            />

            <input
              type="radio"
              name="my_tabs_1"
              className="tab rounded-full px-6 text-gray-600 checked:bg-[#4f39f6] checked:from-[#4f39f6] checked:to-indigo-500 checked:text-white"
              aria-label="Cart (2)"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center mx-auto pb-14 lg:px-38">
        {data.map((data) => (
          <div
            key={data.name}
            className="max-h-[420px] bg-white rounded-2xl shadow-lg p-6 md:p-6 max-w-[90%] md:max-w-[300px]  space-y-4 hover:shadow-xl transition-transform transform hover:-translate-y-1"
          >
            <div className="flex justify-between items-center">
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-yellow-400">
                <img src={data.image} alt="" />
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
                  <img className="w-4 h-4" src={check} alt="" /> {feature}
                </li>
              ))}
            </ul>

            <button className="w-full py-2 rounded-full bg-primary text-white font-medium hover:opacity-90 transition">
              {data.button}
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Mainsection;
