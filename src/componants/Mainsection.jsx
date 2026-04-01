import React, { use, useState } from "react";
import Card from "./Card";

const Mainsection = ({ resPromise, carts, setCarts }) => {
  const data = use(resPromise);


  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center mx-auto pb-14 lg:px-38">
        {data.map((data) => (
          <Card key={data.name} data={data} carts={carts} setCarts={setCarts} />
        ))}
      </div>
    </>
  );
};

export default Mainsection;
