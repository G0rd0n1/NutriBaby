import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LandingPage, PlayPage, TopicsPage } from "../pages";

const Navigator = (): JSX.Element => {
  return (
    <Router>
      <Routes>
        <Route element={<LandingPage />} path="/learn" />
        <Route element={<TopicsPage />} path="/welcome" />

        <Route element={<PlayPage />} path="/play" />
      </Routes>
    </Router>
  );
};

export default Navigator;
