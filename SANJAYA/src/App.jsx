import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
// import MyWorks from "./components/MyWorks";
import Contact from "./components/Contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";

function App() {

  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      {/* <MyWorks /> */}


    </>
  );
}

export default App;
