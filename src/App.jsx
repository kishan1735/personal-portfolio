import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route path="skills" element={<Skills />}></Route>
          <Route path="projects" element={<Projects />}></Route>
          <Route
            path="*"
            element={<h1 className="font-bold text-4xl">Page Not Found</h1>}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
