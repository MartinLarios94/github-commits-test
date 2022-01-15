import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Commits from "./pages/Commits";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Repositories from "./pages/Repositories";
import Settings from "./pages/Settings";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/:username/repos" element={<Repositories />} />
        <Route
          path="/:username/repos/:reponame/commits"
          element={<Commits />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
