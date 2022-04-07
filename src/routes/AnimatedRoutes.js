import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import FrontPage from "../pages/Home/FrontPage";
import ContactPage from "../pages/ContactPage";
import NotFoundPage from "../pages/NotFoundPage";
import {AnimatePresence} from "framer-motion"
import SkillsPage from "../pages/Skills";

function AnimatedRoutes() {
    const location = useLocation()
  return (
    <AnimatePresence>
      <Routes location={location}>
        <Route path="/" exact element={<FrontPage />}></Route>
        <Route path="/cv" exact element={<FrontPage />}></Route>
        <Route path="/projects" exact element={<FrontPage />}></Route>
        <Route path="/contact" exact element={<ContactPage />}></Route>
        <Route path="/skills" exact element={<SkillsPage />}></Route>
        <Route path="/chatraChatExpanded" element={<FrontPage />}></Route>
        {/* /*404 route*/}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
