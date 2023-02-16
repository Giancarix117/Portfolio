import * as React from "react";

import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
// import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";

const App = ({ value = 0 }) => {
  // const [count, setCount] = React.useState(0);

  // const handleClick = () => {
  //   setCount(count + 1);
  // };

  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Contact />
    </main>
  );
};

export default App;
