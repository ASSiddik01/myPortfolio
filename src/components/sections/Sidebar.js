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
    link: "https://www.linkedin.com/in/imshama",
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
            href="https://itfle.com/"
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
          href="https://drive.google.com/file/d/1YSgPPC0hfc27X-0b_oZ4WBm6w23Udj5D/view?usp=sharing"
          className="inline-block mb-3 rounded bg-primary text-center border-0 py-2 px-6 text-white leading-7 tracking-wide hover:bg-secondary"
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
          Details
        </h3>
        <table className="text-xs my-3">
          <tbody>
            <tr>
              <td className="px-2 py-2 text-gray-500 font-semibold">Address</td>
              <td className="px-2 py-2">121/9, Bangas Para, Chuadanga.</td>
            </tr>
            <tr>
              <td className="px-2 py-2 text-gray-500 font-semibold">Phone</td>
              <td className="px-2 py-2">01987268375</td>
            </tr>
            <tr>
              <td className="px-2 py-2 text-gray-500 font-semibold">Email</td>
              <td className="px-2 py-2">contact@imshama.com</td>
            </tr>
            <tr>
              <td className="px-2 py-2 text-gray-500 font-semibold">
                Occupation
              </td>
              <td className="px-2 py-2">Students || Developer</td>
            </tr>
          </tbody>
        </table>
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
