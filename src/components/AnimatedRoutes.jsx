import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { ErrorPage, Home, Profile } from "../pages";
import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="profile/:userId" element={<Profile />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
