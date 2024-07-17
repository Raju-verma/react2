import React from "react";
import { 
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home1 from "../pages/Home";
import Aboutus from "../pages/About";
import Contact1 from "../pages/Contact";
function AppRoute(props) {
    return (
      <Router {...props}>
        <Routes>
          <Route exact path="/" element={<Home1 />} />
          <Route path="About" element={<Aboutus />} />
          <Route path="Contact" element={<Contact1 />} />
        </Routes>
      </Router>
    );
  }
  export default AppRoute;