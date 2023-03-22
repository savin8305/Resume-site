import Header, { HeaderPhone } from "./components/Header/Header";
import Resume from "./components/resume/Resume";
// import Home from "./components/Home";
// import Work from "./components/Work";
// import Timeline from "./components/Timeline";
// import Services from "./components/Services";
// import Testimonial from "./components/Testimonial";
import Contact from "./components/contact/Contact";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [ratio, setRatio] = useState(window.innerWidth / window.innerHeight);
  useEffect(() => {
    const resizeRatio = () => {
      setRatio(window.innerWidth / window.innerHeight);
    };

    window.addEventListener("resize", resizeRatio);

    return () => {
      window.removeEventListener("resize", resizeRatio);
    };
  }, [ratio]);

  return ratio < 3 ? (

    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
      <HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Resume/>
      <Contact />
      <Footer />
      <Toaster /> 
    </div>

  ) : (
    <em id="customMessage">Please Change the ratio to View!</em>
  );
}

export default App;
