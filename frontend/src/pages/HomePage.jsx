import TeamOvisLogo from "../assets/TeamOvisLogoDarkMode.svg";
import SheepIncLogo from "../assets/SheepIncTypographyLogo.svg"; 
import { FaDiscord, FaXTwitter, FaLink, FaTwitch } from "react-icons/fa6";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col w-full">
      
      {/* Top Logo Area (Removed the big Sheep Inc. title as requested) */}
      <div className="w-full py-12 flex items-center justify-center shrink-0">
        {/* If you want the SVG logo here still, keep this. If you want it gone too, remove this div entirely. */}
        <img 
          src={SheepIncLogo} 
          alt="Sheep, Inc. Logo" 
          className="h-auto w-auto max-h-32 opacity-90" 
        />
      </div>

      {/* Main Content: Centered Text Block (No Card, No Blur) */}
      <main className="flex-1 w-full flex items-center justify-center px-4 shrink-0">
        <div className="max-w-3xl text-center space-y-6">
          
          {/* Body Text: Faint Amber Color, Rajdhani Font */}
          <p className="text-lg md:text-xl text-amber-200 font-['Rajdhani'] font-semibold leading-relaxed text-justify md:text-center drop-shadow-md">
            Sheep, Inc. is the upcoming 2.5D artificial roguelike life simulator where you evolve and protect your herd of sheep against predators and hostile environments, round after round, until you beat the game, or win a Darwin Award. 
            <br /><br />
            Your sheep have real genes: abuse genetic engineering to mold your perfect breed of super sheep. Many strategies are viable. Keep it simple as a breed of unkillable passive defenders. Or ascend to the top of the food chain as an apex predator. Or create an eldritch horror. The choice is yours. Well, if RNG cooperates...
          </p>
        </div>
      </main>

      {/* Bottom Block: Stuck to the absolute bottom */}
      <div className="w-full py-8 flex flex-col items-center justify-center gap-4 mt-auto shrink-0">
        
        {/* Bottom Logo */}
        <img 
          src={TeamOvisLogo} 
          alt="Team Ovis Logo" 
          className="h-auto w-auto" 
        />

        {/* Socials Row */}
        <div className="flex items-center gap-6">
          <a href="https://discord.com/invite/jUpvqHGHw2" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#5865F2] transition-colors" aria-label="Discord">
            <FaDiscord className="w-7 h-7" />
          </a>
          <a href="https://x.com/TeamOvis" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="X">
            <FaXTwitter className="w-7 h-7" />
          </a>
          <a href="https://www.twitch.tv/TeamOvis" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#9146FF] transition-colors" aria-label="Twitch">
            <FaTwitch className="w-7 h-7" />
          </a>
          <a href="https://linktr.ee/teamovis" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#43E660] transition-colors" aria-label="Linktree">
            <FaLink className="w-7 h-7" />
          </a>
        </div>
        
        {/* Copyright */}
        <p className="text-sm text-gray-500 text-center whitespace-normal">
          Copyright © 2026 Team Ovis. All rights reserved.<br />
          Team Ovis is John Wostenberg, Ben Escobar, and Keenan Wostenberg.
        </p>
        
      </div>
    </div>
  );
};

export default HomePage;