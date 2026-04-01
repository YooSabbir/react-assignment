import "./App.css";
import Navbar from "./componants/Navbar";
import Hero from "./componants/Hero";
import Rating from "./componants/Rating";
import Step from "./componants/Step";
import Pricing from "./componants/Pricing";
import Footer from "./componants/Footer";
import Mainsection from "./componants/Mainsection";
import Cart from "./componants/Cart";
import Tab from "./componants/Tabs"
import { useState } from "react";

const getData = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

const resPromise = getData();

function App() {
  const [activeTab, setActiveTab] = useState("products");
  const [carts, setCarts] = useState([])

  return (
    <>
      <Navbar carts={carts} />
      <Hero />
      <Rating />
      <Tab activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab === "products" && (
        <Mainsection
          resPromise={resPromise}
          carts={carts}
          setCarts={setCarts}
        />
      )}
      {activeTab === "cart" && <Cart carts={carts} setCarts={setCarts} />}

      <Step />
      <Pricing />
      <Footer />
    </>
  );
}

export default App;
