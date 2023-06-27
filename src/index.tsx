import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "aos/dist/aos.css";
import { Home } from "./Components/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Assets/css/styles.css";
import { SubService } from "./Components/SubService/SubService";
import { AboutUs } from "./Components/AboutUs/AboutUs";
// import { Projects } from "./Components/Projects/Projects";
import { Services } from "./Components/Services/Services";
import { ProjectDescription } from "./Components/ProjectDescription/ProjectDecription";
import { PDFViewer } from "./Components/PDFViewer/PDFViewer";
import { BIM } from "./Components/BIM/BIM";
import { ContactUs } from "./Components/ContactUs/ContactUs";
import { Career } from "./Components/Career/Career";
import Portfolio from "./Components/Portfolio/Portfolio";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/sub-service/:service/:name" element={<SubService />} />
      <Route path="/about-us" element={<AboutUs />} />
      {/* <Route path="/projects" element={<Projects/>}/> */}
      <Route path="/projects/:id" element={<ProjectDescription />} />
      <Route path="/pdf-viewer/:id/:name" element={<PDFViewer />} />
      <Route path="/services" element={<Services />} />
      {/* <Route path="/bim-services" element={<Services />} />
      <Route path="/bim-consultation-services" element={<Services />} />
      <Route path="/cad-services" element={<Services />} />
      <Route path="/3d-visuals-services" element={<Services />} />
      <Route path="/3d-modelling-services" element={<Services />} /> */}
      <Route path="/bim" element={<BIM />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/career" element={<Career />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);
