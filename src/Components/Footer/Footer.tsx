import {
  Copyright,
  Instagram,
  LinkedIn,
  Mail,
  WhatsApp,
} from "@mui/icons-material";
import { IconButton, Link as MaterialLink } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <div className="container-fluid blueBG p-2">
        <div className="row pt-3 pb-3">
          <div className="col-lg-1"></div>
          <div className="col-lg-3 mb-4 mb-lg-0 justify-center d-flex flex-column mb-3">
            <h5 className="text-white fw-bolder mb-2">Reach Us On</h5>
            <h6
              className="text-white mb-3"
              style={{
                lineHeight: 1.5,
              }}
            >
              501-Arenco building block 4, D.I.P - Dubai
            </h6>
            <a href="tel:+971503384826" className="text-decoration-none">
              <h6 className="text-white">+971 50 338 4826</h6>
            </a>
            {/* href="mailto:ab@ninefivebim.com" */}
            <a
              href="mailto:connect@ninefivebim.com"
              target="_blank"
              className="text-decoration-none"
            >
              <h6 className="text-white letter-spacing1">
                connect@ninefivebim.com
              </h6>
            </a>
          </div>
          <div className="col-lg-2 mb-4 mb-lg-0 item-center flex-column mb-3">
            <h5 className="text-white fw-bolder">Useful Links</h5>
            <Link
              to="/services"
              className="text-decoration-none h6 text-uppercase d-block text-white"
            >
              Services
            </Link>
            <Link
              to="/portfolio"
              className="text-decoration-none h6 text-uppercase d-block text-white"
            >
              Portfolio
            </Link>
            {/* <Link
              to="/bim"
              className="text-decoration-none h6 text-uppercase d-block text-white"
            >
              BIM Consulting
            </Link>
            <Link
              to="/career"
              className="text-decoration-none h6 text-uppercase d-block text-white"
            >
              Career
            </Link> */}
            <Link
              to="/about-us"
              className="text-decoration-none h6 text-uppercase d-block text-white"
            >
              About Us
            </Link>
          </div>
          <div className="col-lg-3 text-white text-center hv-center flex-column mb-3">
            <h4 className="fw-bold mb-3">Connect With Us</h4>
            <div className="container">
              <MaterialLink
                href="https://www.linkedin.com/company/ninefive-bim/"
                target="_blank"
              >
                <IconButton className="bg-light me-2 text-primary">
                  <LinkedIn />
                </IconButton>
              </MaterialLink>
              <MaterialLink>
                {/* <IconButton className="bg-light me-2 redText">
                  <Instagram />
                </IconButton> */}
              </MaterialLink>
              {/* <MaterialLink href="https://wa.me/7016591928" target="_blank">
                <IconButton className="bg-light me-2 text-success">
                  <WhatsApp />
                </IconButton>
              </MaterialLink> */}
              <MaterialLink
                href="mailto:connect@ninefivebim.com"
                target="_blank"
              >
                <IconButton className="bg-light brownText">
                  <Mail />
                </IconButton>
              </MaterialLink>
            </div>
          </div>
          <div className="col-lg-2 text-center mb-4 mb-lg-0 hv-center">
            <MaterialLink
              href="https://www.canva.com/design/DAFQyUIsPGo/kY6rDCMJ8lWlUzEq1D1z7g/view?utm_content=DAFQyUIsPGo&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
              className="text-white d-inline-block h5"
            >
              Want a Brochure?
            </MaterialLink>
          </div>
        </div>
      </div>
      <div className="col-lg-1"></div>
      <h6
        className="text-center p-2 text-light m-0"
        style={{
          background: "#B99B5A",
        }}
      >
        <Copyright /> OutLead Solutions. All rights reserved
      </h6>
    </>
  );
};
