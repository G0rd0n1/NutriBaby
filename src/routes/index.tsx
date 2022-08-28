import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LandingPage, PlayPage, Question2Page, TopicsPage } from "../pages";

const Navigator = (): JSX.Element => {
  return (
    <Router>
      <Routes>
        <Route element={<LandingPage />} path="/learn" />
        <Route element={<TopicsPage />} path="/welcome" />

        <Route element={<PlayPage />} path="/play" />
        <Route element={<Question2Page />} path="/play/question/2" />
      </Routes>
    </Router>
  );
};

export default Navigator;
