import "./App.css";
import { Route, Routes } from "react-router-dom";
import About from "./components/pages/About/About";
import Service from "./components/pages/Service/Service";
import Portfolio from "./components/pages/Portfolio/Portfolio";
import Blog from "./components/pages/Blog/Blog";
import Contact from "./components/pages/Contact/Contact";
import Main from "./components/pages/Main/Main";

function App() {
  return (
    <div>
      <Main />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/works" element={<Portfolio />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
