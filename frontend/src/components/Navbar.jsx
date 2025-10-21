//This file interacts with the Navbar component used in App.jsx to provide navigation links and a Discord icon link.

import { Link } from "react-router-dom";
import { FaDiscord } from "react-icons/fa"; // Discord logo

const Navbar = () => {
  return (
    <header className="bg-base-300 border-b border-base-content/10">
      <div className="mx-auto max-w-6xl p-4 flex items-center justify-between">
        {/* Logo / Brand */}
        <Link to="/" className="text-3xl font-bold text-primary font-mono tracking-tighter">
          Sheep, Inc.
        </Link>

        {/* Navigation Links */}
        <nav className="flex items-center gap-6">
          <Link to="/about" className="hover:text-primary">About</Link>
          <Link to="/trailer" className="hover:text-primary">Trailer</Link>
          <Link to="/media" className="hover:text-primary">Media</Link>
          <Link to="/faq" className="hover:text-primary">FAQ</Link>
          <Link to="/contact" className="hover:text-primary">Contact</Link>

          {/* Divider for the links*/}
          <span className="h-6 border-l border-base-content/20"></span>

          {/* Discord Icon Link */}
          <a
            href="https://discord.gg/YOUR_INVITE_CODE"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary"
          >
            <FaDiscord className="w-6 h-6" />
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

