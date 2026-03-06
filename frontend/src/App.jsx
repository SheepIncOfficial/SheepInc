import { Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";

import BackgroundBanner from "./assets/BackgroundBanner.png"; 

const App = () => {
  return (
    <div data-theme="black" className="min-h-screen flex flex-col relative">
      
      {/* GLOBAL BACKGROUND BANNER */}
      
      <div className="fixed inset-0 z-0">
        <img 
          src={BackgroundBanner} 
          alt="Global Background Banner" 
          
          className="w-full h-full object-cover blur-[2px]" 
        />
        {/* Dark Overlay: Makes text readable on top of the image */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black"></div>
      </div>

      {/* Content Wrapper: Ensures content sits ON TOP of the background (z-10) */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navbar visible on every page */}
        <Navbar />

        {/* Umami analytics tracker is now rendered at the root level in main.jsx */}

        {/* Page routes */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default App;

//This file is for the main application component that sets up routing and includes the Navbar component.
//It uses React Router to define routes for different pages like Home, About, FAQ, Contact, Media, and Trailer.