import React from 'react'

function Rating() {
  return (
    <div className="min-h-[165px] bg-primary text-center grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 items-center text-white px-4 sm:px-8 lg:px-38 divide-y sm:divide-y-0 sm:divide-x divide-white/40">
      <div className="py-4">
        <h1 className="font-extrabold text-3xl sm:text-4xl lg:text-[44px]">
          50K+
        </h1>
        <p className="text-[13px] text-gray-300">Active Users</p>
      </div>

      <div className="py-4">
        <h1 className="font-extrabold text-3xl sm:text-4xl lg:text-[44px]">
          200+
        </h1>
        <p className="text-[12px] text-gray-300">Premium tools</p>
      </div>

      <div className="py-4">
        <h1 className="font-extrabold text-3xl sm:text-4xl lg:text-[44px]">
          4.9+
        </h1>
        <p className="text-[12px] text-gray-300">Rating</p>
      </div>
    </div>
  );
}

export default Rating