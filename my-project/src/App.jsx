import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";

import RennesAnimationFestival from "../src/pages/RennesFestival.jsx";
import Catfish from "../src/pages/Catfish";
import Arise from "../src/pages/Arise";
import OtherProjects from "../src/pages/OtherProjects";
import SousPression from "../src/pages/SousPression";
import SharpPotion from "../src/pages/SharpPotion";
import Home from "../src/pages/Home.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/rennes" element={<RennesAnimationFestival />} />
        <Route path="/catfish" element={<Catfish />} />
        <Route path="/arise" element={<Arise />} />
        <Route path="/other-projects" element={<OtherProjects />} />
        <Route path="/sous-pression" element={<SousPression />} />
        <Route path="/sharp-potion" element={<SharpPotion />} />
      </Routes>
    </>
  );
}
