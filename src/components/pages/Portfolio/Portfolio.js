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
  },
  {
    _id: 3,
    name: "Car Archive",
    type: "Full Stack",
    url: "https://car-archive-13491.web.app/",
    img: project3,
    description: "Car Dealer / Inventory Website",
  },
  {
    _id: 4,
    name: "Denti Care",
    type: "Full Stack",
    url: "https://denti-care-fe8eb.web.app/",
    img: project4,
    description: "Dental Treatment Service",
  },
  {
    _id: 5,
    name: "Jannatul Tea",
    type: "Front-end",
    url: "https://assiddik01.github.io/Softlab_Tea/",
    img: project5,
    description: "Tea Factory Website",
  },
  {
    _id: 6,
    name: "SAAS",
    type: "Front-end",
    url: "https://assiddik01.github.io/Softlab_Tea/",
    img: project6,
    description: "SAAS Landing",
  },
  {
    _id: 7,
    name: "Resturent",
    type: "Front-end",
    url: "https://assiddik01.github.io/Softlab_Resturent_01/",
    img: project7,
    description: "Food Delivery",
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
