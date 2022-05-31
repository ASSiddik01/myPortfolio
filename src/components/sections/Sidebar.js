import React from "react";
import {
  FaBehance,
  FaYoutube,
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaSkype,
  FaTwitter,
  FaWhatsapp,
  FaPhone,
} from "react-icons/fa";
import profile from "../../images/profile.jpg";

const socials = [
  {
    id: 1,
    icon: <FaFacebookF />,
    link: "https://www.facebook.com/A.S.Siddik0/",
  },
  {
    id: 2,
    icon: <FaGithub />,
    link: "https://github.com/ASSiddik01",
  },
  {
    id: 3,
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/abu-shama-2a06a418b/",
  },
  {
    id: 4,
    icon: <FaInstagram />,
    link: "https://www.instagram.com/a.s.siddik/",
  },
  {
    id: 5,
    icon: <FaBehance />,
    link: "https://www.behance.net/abushama7",
  },
  {
    id: 7,
    icon: <FaSkype />,
    link: "https://join.skype.com/invite/vNVOIdUYDnH3",
  },
  {
    id: 7,
    icon: <FaTwitter />,
    link: "https://twitter.com/AbuSham16193622",
  },
  {
    id: 7,
    icon: <FaYoutube />,
    link: "https://www.youtube.com/channel/UCA12513hsRRiO_10r0aGB3Q",
  },
  {
    id: 7,
    icon: <FaWhatsapp />,
    link: "01987268375",
  },
  {
    id: 7,
    icon: <FaPhone />,
    link: "01987268375",
  },
];

const Sidebar = () => {
  return (
    <aside className="sticky top-0 bg-white md:mx-8 lg:mx-4 mb-8 p-6 shadow-md rounded-md -mt-40">
      <div className="rounded-md overflow-hidden mx-auto mb-5">
        <img src={profile} alt="shafiqhammad" className="w-full" />
      </div>
      <div className="text-center">
        <h1 className="text-xl text-natural  mb-1 rye">Abu Shama</h1>
        <p className="text-sm text-natural mb-1">
          Web developer at
          <a
            target="blank"
            href="https://www.facebook.com/itfle"
            className="text-primary pl-1"
          >
            ITFLE Ltd.
          </a>
        </p>
        <p className="text-sm text-natural mb-3">
          Front-end Web developer at
          <a
            target="blank"
            href="https://www.softlabltd.com/"
            className="text-primary pl-1"
          >
            Softlab Ltd.
          </a>
        </p>
        <a
          target="blank"
          href="https://drive.google.com/drive/folders/1fXLh_UErQrNqrw0c5o6IJYU1d7i6vy_X?usp=sharing"
          className="inline-block mb-3 rounded bg-primary text-center border-0 py-2 px-6 text-white leading-7 tracking-wide hover:bg-secondary"
          download="Resume"
        >
          Download Resume
        </a>
        <ul className="flex flex-wrap justify-center">
          {socials.map((social, id) => (
            <SocialIcon social={social} key={id} />
          ))}
        </ul>
      </div>
      <div className="text-start pt-4">
        <h3 className="text-md mb-2 uppercase font-medium text-gray-800">
          About Me
        </h3>
        <p className="text-natural text font-light leading-relaxed">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus.
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;

const SocialIcon = (props) => {
  const { icon, link } = props.social;
  return (
    <li title={link} className="m-2">
      <a
        target="blank"
        href={link}
        className="w-8 h-8 bg-red-200 rounded text-primary flex items-center justify-center hover:text-white hover:bg-secondary"
      >
        {icon}
      </a>
    </li>
  );
};
