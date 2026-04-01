import "./App.css";
import Navbar from "./componants/Navbar";
import Hero from "./componants/Hero";
import Rating from "./componants/Rating";
import Step from "./componants/Step";
import Pricing from "./componants/Pricing";
import Footer from "./componants/Footer";
import Mainsection from "./componants/Mainsection";

const getData = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

const resPromise = getData();

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Rating />
      <Mainsection resPromise={resPromise} />
      <Step />
      <Pricing />
      <Footer />
    </>
  );
}

export default App;
