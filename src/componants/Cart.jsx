import React from "react";

const Cart = ({ carts }) => {

  const totalPrice = carts.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Cart</h2>

      {carts.length === 0 ? (
        <p className="text-gray-500 text-center">Your cart is empty.</p>
      ) : (
        <div className="flex flex-col gap-6">
          {carts.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 bg-white shadow-md rounded-xl p-4"
            >

              <div className="w-15 h-15 flex-shrink-0 rounded-lg overflow-hidden border border-gray-200">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 flex flex-col">
                <p className="text-lg font-semibold text-gray-900">
                  {item.name}
                </p>
                <p className="text-gray-500 mt-1">${item.price.toFixed(2)}</p>
              </div>

              <button className="text-red-500 font-medium hover:text-red-600 transition-colors">
                Remove
              </button>
            </div>
          ))}

          <div className="bg-white shadow-md rounded-xl p-6 flex flex-col sm:flex-row justify-between items-center">
            <div className="mb-4 sm:mb-0">
              <span className="text-gray-500 font-medium">Total:</span>
              <span className="text-1xl font-bold text-gray-900 ml-2">
                ${totalPrice.toFixed(2)}
              </span>
            </div>
            <button className="w-full sm:w-auto py-3 px-6 bg-gradient-to-r from-violet-600 to-purple-500 text-white rounded-full text-sm font-semibold hover:scale-105 transform transition">
              Proceed To Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
