import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Error404 from "./Pages/Error404";
import About from "./Pages/About";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}

export default AppRoutes;
