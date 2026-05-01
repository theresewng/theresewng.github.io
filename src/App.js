import AboutMe from "./components/AboutMe.js";
import Homepage from "./components/Homepage.js";
import Projects from "./components/Projects.js";
import ProjectDetail from "./components/ProjectDetail.js";
import NavigationBar from "./components/navbar.js";
import { Routes, Route } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <div className="App">
      {/* Navigation stays at the top of every page */}
      <NavigationBar />

      <main>
        <Routes>
          {/* 
             The Routes block decides which ONE of these to show 
             based on the URL in your browser.
          */}
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />{" "}
          <Route path="/project/:slug" element={<ProjectDetail />} />{" "}
        </Routes>
      </main>
    </div>
  );
}

export default App;
