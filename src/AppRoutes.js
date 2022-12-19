import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Error404 from "./Pages/Error404";
import About from "./Pages/About";
import Housing from "./Pages/Housing";

function AppRoutes() {
  /* This is a router that is used to navigate between pages. */
  return (
    /* A router that is used to navigate between pages. */
    <Routes>
      {/* A route that is used to navigate to the home page. */}
      <Route path="/" element={<Home />} />
      {/* This is a route that is used to navigate to the housing page. */}
      <Route path="/housing/:id" element={<Housing />} />
      {/* This is a route that is used to navigate to the about page. */}
      <Route path="/about" element={<About />} />
      {/* This is a route that is used to navigate to the error page. */}
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}

export default AppRoutes;
