import logo from "../assets/kevinRushLogo.png";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <span className="p-3 text-4xl tracking-tighter italic">BLUEDEV</span>
      </div>
      <div className=" m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://github.com/Daniel20134" target="_blank" className="hover:text-blue-400">
          <FaGithub />
        </a>

        <a href="https://discord.com/channels/@me" target="_blank"  className="hover:text-blue-400">
          <FaDiscord />
        </a>

        <a href="https://x.com/blue_devdan" target="_blank"  className="hover:text-blue-400">
          <FaSquareXTwitter />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
