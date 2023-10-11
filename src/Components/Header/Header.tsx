import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Collapse,
  IconButton,
  SwipeableDrawer,
  Link as MaterialLink,
  Container,
} from "@mui/material";
import { Accordion, Button } from "react-bootstrap";
import { ArrowDropUp, DragHandle } from "@mui/icons-material";
import serviceMenu from "../../Constants/Services.json";
import logo from "../../Assets/Images/logo.png";
import Aos from "aos";

export const Header = () => {
  const path = useLocation().pathname;
  const [collapse, setCollapse] = React.useState<boolean>(false);
  const [drawer, setDrawer] = React.useState<boolean>(false);
  const services = serviceMenu;
  const [scrolled, setScroll] = React.useState<boolean>(false);
  const [megaVisible, setMegavisible] = React.useState<boolean>(false);
  const handleScroll = () => {
    if (window.scrollY < 1) {
      setScroll(false);
    } else {
      setScroll(true);
    }
  };
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    Aos.init();
  }, []);

  return (
    <div>
      <div
        className={`
                    container-fluid text-black d-none d-lg-block slow-transition overflow-x-0
                    ${
                      path === "/"
                        ? !scrolled
                          ? " transparencyBG05 fixed-top"
                          : "p-1 shadow-lg fixed-top transparencyBG05 blackText"
                        : !scrolled
                        ? " transparencyBG05 fixed-top"
                        : "p-1 shadow-lg fixed-top transparencyBG05  blackText"
                    }
                `}
      >
        <div className="row p-0">
          <div
            className="col-lg-3 redText"
            onMouseOver={() => setMegavisible(false)}
          >
            <Link to="/">
              <img
                src={logo}
                alt=""
                className={`
                                   img-fluid border-0 
                                    ${!scrolled && path === "/" ? "" : ""}
                                `}
              />
            </Link>
          </div>
          <div
            className="col-lg-9 text-end pe-xl-5"
            style={{ height: "inherit" }}
          >
            <div className="h-100 d-inline-block align-middle"></div>
            <div className="h-100 d-inline-block">
              <Link
                to="/"
                className={`
                            text-decoration-none h6 text-uppercase me-1 p-3 pt-2 pb-2 rounded
                            nav-filling
                            `}
                onMouseOver={() => setMegavisible(false)}
              >
                Home
              </Link>
            </div>
            <div className="h-100 d-inline-block">
              <Link
                to="/portfolio"
                className={`
                            text-decoration-none h6 text-uppercase me-1 p-3 pt-2 pb-2 rounded
                            nav-filling
                            `}
                onMouseOver={() => setMegavisible(false)}
              >
                Portfolio
              </Link>
            </div>
            <div className="h-100 d-inline-block">
              <Link
                to="/services"
                className={`
                            text-decoration-none h6 text-uppercase me-1 p-3 pt-2 pb-2 rounded
                            ${
                              path === "/services"
                                ? "nav-filled disabled"
                                : "nav-filling"
                            }
                            `}
                onMouseOver={() => setMegavisible(true)}
              >
                Services
              </Link>
              {/* <div className={` card border-primary shadow-lg p-1 border-0 bg-white
                                ${!scrolled ? 'mega-box mt-3' : 'mega-box-scrolled'}
                                ${megaVisible ? 'visible-1 opacity-1' : ''}
                            `}
                            > */}
              {/* <div
                className={` card border-primary shadow-lg p-1 border-0 bg-white
                                ${!scrolled ? "mega-box" : "mega-box-scrolled"}
                                ${megaVisible ? "visible-1 opacity-1" : ""}
                            `}
              >
                <div
                  className="
                                w-100 blueText
                            "
                  onMouseOut={() => setMegavisible(false)}
                >
                <div
                    className="row text-start p-2"
                    onMouseOver={() => setMegavisible(true)}
                  >
                    {services.map((data, serviceKey) => {
                      return (
                        <div style={{ width: "100%" }} key={serviceKey}>
                          <h6 className="fw-bold text-center mb-4 p-0">
                            {data.name}
                          </h6>
                          {data.subservice.map((value, subServiceKey) => {
                            return (
                              <Link
                                className="text-decoration-none text-center p-0 rounded blueText d-block"
                                key={subServiceKey}
                                to={`/sub-service/${serviceKey}/${value}`}
                                onClick={() => setMegavisible(false)}
                              >
                                {value}
                              </Link>
                            );
                          })}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div> */}
            </div>

            {/* <div className="h-100 d-inline-block">
              <Link
                to="/projects"
                className={`
                            text-decoration-none h6 text-uppercase me-1 p-3 pt-2 pb-2 rounded
                            ${
                              path === "/projects"
                                ? "nav-filled disabled"
                                : "nav-filling"
                            }
                            `}
                onMouseOver={() => setMegavisible(false)}
              >
                Projects
              </Link>
            </div> */}
            {/* <div className="h-100 d-inline-block">
              <Link
                to="/bim"
                className={`
                            text-decoration-none h6 text-uppercase me-1 p-3 pt-2 pb-2 rounded
                            ${
                              path === "/bim"
                                ? "nav-filled disabled"
                                : "nav-filling"
                            }
                            `}
                onMouseOver={() => setMegavisible(false)}
              >
                BIM Consulting
              </Link>
            </div> */}
            {/* <div className="h-100 d-inline-block">
              <Link
                to="/career"
                className={`
                            text-decoration-none h6 text-uppercase me-1 p-3 pt-2 pb-2 rounded
                            ${
                              path === "/career"
                                ? "nav-filled disabled"
                                : "nav-filling"
                            }
                            `}
                onMouseOver={() => setMegavisible(false)}
              >
                Career
              </Link>
            </div> */}
            <div className="h-100 d-inline-block">
              <Link
                to="/about-us"
                className={`
                            text-decoration-none h6 text-uppercase me-1 p-3 pt-2 pb-2 rounded
                            ${
                              path === "/about-us"
                                ? "nav-filled disabled"
                                : "nav-filling"
                            }
                            `}
                onMouseOver={() => setMegavisible(false)}
              >
                About us
              </Link>
            </div>
            <div className="h-100 d-inline-block">
              <Link
                to="/contact-us"
                className={`
                            text-decoration-none h6 text-uppercase me-1 p-3 pt-2 pb-2 rounded
                            nav-filling
                            `}
                onMouseOver={() => setMegavisible(false)}
              >
                Contact Us
              </Link>
            </div>
            {/* <div className="h-100 d-inline-block">
              <Link
                to="/contact-us"
                className={`
                            text-decoration-none h6 text-uppercase me-1 p-3 pt-2 pb-2 rounded
                            ${
                              path === "/contact-us"
                                ? "nav-filled disabled"
                                : "nav-filling"
                            }
                            `}
                onMouseOver={() => setMegavisible(false)}
              >
                Contact us
              </Link>
            </div> */}
          </div>
        </div>
      </div>
      <div className="container-fluid p-2 blueBG text-white d-block d-lg-none">
        <div className="row">
          <div className="col-9 text-center">
            <Link to="/">
              <img src={logo} alt="" className="logo border-0 " />
            </Link>
          </div>
          <div className="col-3">
            <div className="h-100 d-inline-block align-middle"></div>
            <Button
              variant="outline-light"
              onClick={() => {
                if (collapse) {
                  setCollapse(false);
                } else {
                  setCollapse(true);
                }
              }}
            >
              <DragHandle className="text-white" />
            </Button>
          </div>
        </div>
        <Collapse in={collapse} className="mt-3">
          <Link
            to="/"
            className="text-decoration-none h6 text-uppercase d-block text-white"
          >
            Home
          </Link>
          {/* <MaterialLink
            href="#"
            className="text-decoration-none h6 text-uppercase d-block mb-2 text-white"
            onClick={() => {
              setDrawer(true);
              setCollapse(false);
            }}
          >
            Services
          </MaterialLink> */}
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
            portfolio
          </Link>
          {/* <Link
            to="/bim"
            className="text-decoration-none h6 text-uppercase d-block text-white"
          >
            BIM Consulting
          </Link> */}
          {/* <Link
            to="/career"
            className="text-decoration-none h6 text-uppercase d-block text-white"
          >
            Career
          </Link> */}
          <Link
            to="/about-us"
            className="text-decoration-none h6 text-uppercase d-block text-white"
          >
            about us
          </Link>
          <Link
            to="/contact-us"
            className="text-decoration-none h6 text-uppercase d-block text-white"
          >
            Contact Us
          </Link>

          <div className="text-center">
            <IconButton
              className="redBG text-white"
              onClick={() => setCollapse(false)}
            >
              <ArrowDropUp />
            </IconButton>
          </div>
        </Collapse>
      </div>
      {/* <SwipeableDrawer
        anchor="left"
        open={drawer}
        onClose={() => setDrawer(false)}
        onOpen={() => setDrawer(true)}
      >
        <Container className="p-0 drawerWidth">
          <h3 className="orangeText fw-bolder text-center mt-2 mb-4">
            Our Services
          </h3>
        </Container>
        <Accordion>
          {services.map((obj, key) => {
            return (
              <Accordion.Item key={`${obj.id}`} eventKey={`${obj.id}`}>
                <Accordion.Header>
                  <h5 className="text-center drawerLargeFont fw-bold brownText">
                    {obj.name}
                  </h5>
                </Accordion.Header>
                <Accordion.Body className="card p-0">
                  <ul className="nav flex-column">
                    {obj.subservice.map((value) => {
                      return (
                        <li
                          key={value}
                          className="nav-item p-3 border border-start-0 border-end-0"
                          onClick={() => setDrawer(false)}
                        >
                          <Link
                            className="drawerSmallFont text-decoration-none"
                            to={`/sub-service/${key}/${value}`}
                          >
                            {value}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            );
          })}
        </Accordion>
      </SwipeableDrawer> */}
    </div>
  );
};
