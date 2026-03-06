//This file interacts with the Navbar component used in App.jsx to provide navigation links and a Discord icon link.

import { Link } from "react-router-dom";
import { FaDiscord } from "react-icons/fa"; // Discord logo

const Navbar = () => {
  // Return null to hide the navbar without breaking the import in App.jsx
  return null; 
  
  /* 
  // Old code is kept here for reference but will not run:
  return (
    <header className="bg-base-300 border-b border-base-content/10">
      <div className="mx-auto max-w-6xl p-4 flex items-center justify-between">
        <Link to="/" className="text-3xl font-bold text-primary font-mono tracking-tighter">
          Sheep, Inc.
        </Link>
        <nav className="flex items-center gap-6">
          <span className="h-6 border-l border-base-content/20"></span>
          <a
            href="https://discord.com/invite/jUpvqHGHw2  "
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
  */
};

export default Navbar;