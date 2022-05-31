import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import About from "../pages/About/About";
import Blog from "../pages/Blog/Blog";
import Contact from "../pages/Contact/Contact";
import Portfolio from "../pages/Portfolio/Portfolio";
import Service from "../pages/Service/Service";

const navbarData = [
  {
    id: 1,
    title: "About",
    to: "/about",
  },
  {
    id: 2,
    title: "Services",
    to: "/services",
  },
  {
    id: 3,
    title: "Works",
    to: "/works",
  },
  {
    id: 4,
    title: "Blogs",
    to: "/blogs",
  },
  {
    id: 5,
    title: "Contact",
    to: "/contact",
  },
];

const Navbar = () => {
  return (
    <div>
      <nav className="md:mx-8 mb-3 px-6 py-2 z-10 sticky top-0 bg-white shadow rounded">
        <ul className="flex flex-wrap">
          {navbarData.map((el, id) => (
            <LinkItem el={el} key={id} />
          ))}
        </ul>
      </nav>

      <Routes>
        <Route exact path="/" element={<About />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="services" element={<Service />}></Route>
        <Route path="works" element={<Portfolio />}></Route>
        <Route path="blogs" element={<Blog />}></Route>
        <Route path="contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
};

export default Navbar;

const LinkItem = (props) => {
  const { title, to } = props.el;
  return (
    <li className="m-3 lg:mx-5">
      <Link
        to={to}
        // activeclassName="text-purple-600"
        className="text-gray-800 text-medium hover:text-purple-600"
      >
        {title}
      </Link>
    </li>
  );
};
