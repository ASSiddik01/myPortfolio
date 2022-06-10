import React from "react";
import PortfolioItem from "./PortfolioItem";
import project1 from "../../../images/portfolio/electriccart.png";
import project2 from "../../../images/portfolio/darecrocery.png";
import project3 from "../../../images/portfolio/car archive.png";
import project4 from "../../../images/portfolio/denticare.png";
import project5 from "../../../images/portfolio/tea.png";
import project6 from "../../../images/portfolio/saas.png";
import project7 from "../../../images/portfolio/resturent.png";

const portfolioData = [
  {
    _id: 1,
    name: "Electric Cart",
    type: "Full Stack",
    url: "https://electric-cart.web.app/",
    img: project1,
    description: "Sell Manufactured Tools",
    features: {
      f1: "Admin can add product and site management",
      f2: "Site secure by json web token ( JWT)",
      f3: "User can payment by stripe",
    },
    tt: "React JS, Tailwind CSS, React Router, Firebase, React Firebase Hook, React Icon, DaisyUI, React Toast, React Hook Form, React Query. Express JS, Mongo DB",
  },
  {
    _id: 2,
    name: "Dear Grocery",
    type: "Full Stack",
    url: "https://dear-grocery.web.app/",
    img: project2,
    description: "Sell Grocery Items",
    features: {
      f1: "Admin can site management and add product.",
      f2: "User can buy product and cancel their order",
      f3: "Payment received by stripe",
    },
    tt: "React JS, Tailwind, React Router, Firebase, React Firebase Hook, React Icon, DaisyUI, React Toast, React Hook Form, React Query, React Slick Carousel, Express JS, Mongo DB",
  },
  {
    _id: 3,
    name: "Car Archive",
    type: "Full Stack",
    url: "https://car-archive-13491.web.app/",
    img: project3,
    description: "Car Dealer / Inventory Website",
    features: {
      f1: "Use firebase for login email password or google",
      f2: "Admin can add new product, update and delete",
      f3: "Responsive by bootstrap",
    },
    tt: "React JS, Bootstrap, React Router, Firebase, React Firebase Hook, Font Awesome, React Toast, React Hook Form, Express JS, Mongo DB",
  },
  {
    _id: 4,
    name: "Denti Care",
    type: "Full Stack",
    url: "https://denti-care-fe8eb.web.app/",
    img: project4,
    description: "Dental Treatment Service",
    features: {
      f1: "Use firebase for login email password or google",
      f2: "Sent email varification to the every email password register user",
      f3: "Responsive for large, medium, mobile device",
    },
    tt: "Boostrap, Firebase, React firebase hook, FontAwesome, React Router, React toast, Framework",
  },
  {
    _id: 5,
    name: "Jannatul Tea",
    type: "Front-end",
    url: "https://assiddik01.github.io/Softlab_Tea/",
    img: project5,
    description: "Tea Factory Website",
    features: {
      f1: "Admin can add product and site management",
      f2: "Site secure by json web token ( JWT)",
      f3: "User can payment by stripe",
    },
    tt: "React JS, Tailwind CSS, React Router, Firebase, React Firebase Hook, React Icon, DaisyUI, React Toast, React Hook Form, React Query. Express JS, Mongo DB",
  },
  {
    _id: 6,
    name: "SAAS",
    type: "Front-end",
    url: "https://assiddik01.github.io/Softlab_Tea/",
    img: project6,
    description: "SAAS Landing",
    features: {
      f1: "Admin can add product and site management",
      f2: "Site secure by json web token ( JWT)",
      f3: "User can payment by stripe",
    },
    tt: "React JS, Tailwind CSS, React Router, Firebase, React Firebase Hook, React Icon, DaisyUI, React Toast, React Hook Form, React Query. Express JS, Mongo DB",
  },
  {
    _id: 7,
    name: "Resturent",
    type: "Front-end",
    url: "https://assiddik01.github.io/Softlab_Resturent_01/",
    img: project7,
    description: "Food Delivery",
    features: {
      f1: "Admin can add product and site management",
      f2: "Site secure by json web token ( JWT)",
      f3: "User can payment by stripe",
    },
    tt: "React JS, Tailwind CSS, React Router, Firebase, React Firebase Hook, React Icon, DaisyUI, React Toast, React Hook Form, React Query. Express JS, Mongo DB",
  },
];

const Portfolio = () => {
  return (
    <section className="pb-10">
      <div className="flex flex-wrap md:px-4">
        {portfolioData.map((portfolio, _id) => (
          <PortfolioItem portfolio={portfolio} key={_id} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
