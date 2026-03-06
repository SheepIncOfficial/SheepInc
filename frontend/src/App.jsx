import { Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import FAQPage from "./pages/FAQPage";
import ContactPage from "./pages/ContactPage";
import MediaPage from "./pages/MediaPage";
import TrailerPage from "./pages/TrailerPage";

const App = () => {
  return (
    <div data-theme="forest" className="min-h-screen flex flex-col">
      {/* Navbar visible on every page */}
      <Navbar />

      {/* Umami analytics tracker is now rendered at the root level in main.jsx */}

      {/* Page routes */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/media" element={<MediaPage />} />
          <Route path="/trailer" element={<TrailerPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;

//This file is for the main application component that sets up routing and includes the Navbar component.
//It uses React Router to define routes for different pages like Home, About, FAQ, Contact, Media, and Trailer.