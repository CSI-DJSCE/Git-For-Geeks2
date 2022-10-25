import { Home, Profile, ErrorPage } from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="profile/:userId" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
