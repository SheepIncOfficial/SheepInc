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
