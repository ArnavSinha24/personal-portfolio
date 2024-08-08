import logo from "../assets/ArnavSinhaLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return <nav className="mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
      <img className="mx-2 my-2 w-[105px] " src={logo} alt="logo" />
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
      <div className=" hover:text-purple-300">
        <a href="https://www.linkedin.com/in/ArnavSinha24" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </div>
      <div className=" hover:text-purple-300">
        <a href="https://www.github.com/ArnavSinha24" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </div>
      <div className=" hover:text-purple-300">
        <a href="https://www.instagram.com/i_arnavsinha" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
      <div className=" hover:text-purple-300">
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FaSquareXTwitter />
        </a>
      </div>
    </div>
  </nav>
};

export default Navbar;
