import AboutMe from "./pages/AboutMe.js";
import Homepage from "./pages/Homepage.js";
import Projects from "./pages/Projects.js";
import NavigationBar from "./components/navbar.js";
import Footer from "./components/footer.js";
import { Routes, Route } from "react-router-dom";
import { projectData } from "./data/projectData";
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
          <Route path="/work" element={<Projects />} />{" "}
          {projectData.map((project) => {
            const SpecificPageLayout = project.component;
            return (
              <Route
                key={project.slug}
                path={project.path}
                element={<SpecificPageLayout />}
              />
            );
          })}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
