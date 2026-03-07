import TeamOvisLogo from "../assets/TeamOvisLogoDarkMode.svg";
import SheepIncLogo from "../assets/SheepIncTypographyLogo.svg";
import { FaDiscord, FaXTwitter, FaLink, FaTwitch } from "react-icons/fa6";

// --- IMPORT GAME ASSETS HERE ---
import Sheep1 from "../assets/CrocMurderingSheep.gif";
import DesertGrazing from "../assets/Desertoasissheepgrazing1.gif";
import GrazingFails from "../assets/Grazingfails.gif";
import ScorpionKills from "../assets/ScorpionKills.gif";
import AbductionSavior from "../assets/AbductionSavior.gif";

//Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HomePage = () => {
  const mediaItems = [
    { src: Sheep1, alt: "Crock murders Sheep!" },
    { src: DesertGrazing, alt: "DesertGrazing" },
    { src: GrazingFails, alt: "Grazing Fails" },
    { src: ScorpionKills, alt: "Scorpion Kills" },
    { src: AbductionSavior, alt: "Saving Private Sheep" },
  ];

  return (
    <div className="min-h-screen flex flex-col w-full relative">
      {/* Top Right - Team Ovis Logo & Socials */}
      <div className="absolute top-4 right-4 flex flex-col items-center gap-2 z-10">
        <a
          href="https://linktr.ee/teamovis"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-opacity hover:opacity-80"
          aria-label="Team Ovis"
        >
          <img
            src={TeamOvisLogo}
            alt="Team Ovis Logo"
            className="h-12 w-auto"
          />
        </a>
        <div className="flex items-center gap-3">
          <a
            href="https://discord.com/invite/jUpvqHGHw2"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#5865F2] transition-colors"
            aria-label="Discord"
          >
            <FaDiscord className="w-5 h-5" />
          </a>
          <a
            href="https://x.com/TeamOvis"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="X"
          >
            <FaXTwitter className="w-5 h-5" />
          </a>
          <a
            href="https://www.twitch.tv/TeamOvis"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#9146FF] transition-colors"
            aria-label="Twitch"
          >
            <FaTwitch className="w-5 h-5" />
          </a>
          <a
            href="https://linktr.ee/teamovis"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#43E660] transition-colors"
            aria-label="Linktree"
          >
            <FaLink className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Top Logo Area */}
      <div className="w-full pt-12 pb-4 flex items-center justify-center shrink-0">
        <a
          href="https://www.sheepincgame.com"
          className="transition-opacity hover:opacity-80"
        >
          <img
            src={SheepIncLogo}
            alt="Sheep, Inc. Logo"
            className="h-auto w-auto max-h-32 opacity-90"
          />
        </a>
      </div>

      {/* Discord Playtest CTA */}
      <div className="w-full px-4 py-4 flex items-center justify-center shrink-0">
        <a
          href="https://discord.com/invite/jUpvqHGHw2"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-3 bg-[#5865F2] hover:bg-[#4752C4] text-white font-['Rajdhani'] font-bold text-lg md:text-xl rounded-lg transition-all hover:scale-105 shadow-lg"
        >
          Reserve your spot in the playtest
          <FaDiscord className="w-6 h-6" />
        </a>
      </div>

      {/* Announcement Trailer */}
      <div className="w-full px-4 py-6 flex items-center justify-center shrink-0">
        <div className="bg-gray-800/60 backdrop-blur-sm px-6 py-3 rounded-lg border border-gray-700">
          <span className="text-white font-['Rajdhani'] font-bold text-xl md:text-2xl tracking-wide">
            Announcement trailer: TBD (Stay tuned!)
          </span>
        </div>
      </div>

      {/* Main Content: Centered Text Block */}
      <main className="flex-1 w-full flex items-center justify-center px-4 shrink-0">
        <div className="max-w-3xl text-center space-y-6">
          <p className="text-lg md:text-xl text-white-200 font-['Rajdhani'] font-semibold leading-relaxed text-justify md:text-center drop-shadow-md">
            An upcoming 2.5D roguelike artificial life simulator game where you
            evolve and protect your herd of sheep against predators and hostile
            environments, round after round, until you beat the game, or win a
            Darwin Award.
            <br />
            <br />
            <br />
          </p>
        </div>
      </main>

      {/* --- CAROUSEL SECTION --- */}

      <div className="w-full max-w-5xl mx-auto px-4 mb-12 shrink-0">
        <style>{`
          .swiper-button-next, .swiper-button-prev {
            color: #ffffff !important;
            opacity: 0.8;
            transition: opacity 0.3s;
          }
          .swiper-button-next:hover, .swiper-button-prev:hover {
            opacity: 1;
          }
          .swiper-pagination-bullet {
            background: #ffffff !important;
            opacity: 0.5;
          }
          .swiper-pagination-bullet-active {
            opacity: 1;
            background: #ffffff !important;
          }
          .swiper-slide {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
          }
        `}</style>

        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true, dynamicBullets: true }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="rounded-xl overflow-hidden shadow-2xl"
          style={{ width: "100%", maxWidth: "800px" }}
        >
          {mediaItems.map((item, index) => (
            <SwiperSlide key={index}>
              {/* Square container that matches your image aspect ratio */}
              <div className="w-full aspect-square">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* --- CAROUSEL SECTION ENDS --- */}

      {/* Second Paragraph */}
      <div className="flex-1 w-full flex items-center justify-center px-4 py-6 shrink-0">
        <div className="max-w-3xl text-center">
          <p className="text-lg md:text-xl text-white-200 font-['Rajdhani'] font-semibold leading-relaxed text-justify md:text-center drop-shadow-md">
            Your sheep have real genes: abuse genetic engineering to mold your
            perfect breed of super sheep. Many strategies are viable. Keep it
            simple as a breed of unkillable passive defenders. Or ascend to the
            top of the food chain as an apex predator. Or create an eldritch
            horror. The choice is yours. Well, if RNG cooperates...
          </p>
        </div>
      </div>

      {/* Bottom Block: Stuck to the absolute bottom */}
      <div className="w-full py-8 flex flex-col items-center justify-center gap-4 mt-auto shrink-0">
        <p className="text-lg text-white-200 text-center whitespace-normal">
          For business inquiries, contact us at{" "}
          <a
            href="mailto:info@sheepincgame.com"
            className="text-lg md:text-xl text-white-200 font-['Rajdhani'] font-semibold leading-relaxed text-justify md:text-center drop-shadow-md underline"
          >
            info@sheepincgame.com
          </a>
        </p>
        <a
          href="https://linktr.ee/teamovis"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-opacity hover:opacity-80"
          aria-label="Team Ovis"
        >
          <img
            src={TeamOvisLogo}
            alt="Team Ovis Logo"
            className="h-auto w-auto"
          />
        </a>

        <div className="flex items-center gap-6">
          <a
            href="https://discord.com/invite/jUpvqHGHw2"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#5865F2] transition-colors"
            aria-label="Discord"
          >
            <FaDiscord className="w-7 h-7" />
          </a>
          <a
            href="https://x.com/TeamOvis"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="X"
          >
            <FaXTwitter className="w-7 h-7" />
          </a>
          <a
            href="https://www.twitch.tv/TeamOvis"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#9146FF] transition-colors"
            aria-label="Twitch"
          >
            <FaTwitch className="w-7 h-7" />
          </a>
          <a
            href="https://linktr.ee/teamovis"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#43E660] transition-colors"
            aria-label="Linktree"
          >
            <FaLink className="w-7 h-7" />
          </a>
        </div>

        <div className="text-white-200 text-center whitespace-normal"></div>

        <p className="text-sm opacity-80">
          Copyright © 2025 Team Ovis. All rights reserved.
          <br />
          Team Ovis is John Wostenberg, Ben Escobar, and Keenan Wostenberg.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
