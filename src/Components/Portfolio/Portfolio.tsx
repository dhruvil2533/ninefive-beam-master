import React, { useState } from "react";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { WhatsApp } from "@mui/icons-material";
import { IconButton, Link as MaterialLink } from "@mui/material";
import img1 from "../../Assets/Images/Core Values/integrity.png";
import img2 from "./images1/1666806006839.jpg";
import img3 from "./images1/NCYH12 (1).jpg";
import img4 from "./images1/1667126091575.jpg";
import img5 from "./images2/IMG_6497.jpg";
import img6 from "./images2/Screenshot 2022-09-26 232805.jpg";
import img7 from "./images2/GHS05.jpg";
import img8 from "./images2/VIlla3.jpg";
import img9 from "./images2/Plant12.jpg";
import img10 from "./images2/01.jpg";
import img11 from "./images2/Con Ed NYC_06.jpg";
import img12 from "./images2/378 West End Ave_Facade_10.jpg";
import img13 from "./images2/75 Varick 08.jpg";
import img14 from "./images2/329&331 Main Street_03.jpg";
import img15 from "./images2/JJ Render.jpg";
import img16 from "./images2/414 Flushing Ave_05.jpg";
import img17 from "./images2/Model 2.jpg";
import img0 from "./images2/portfolio-image1.jpg";
import img18 from "../SubService/top images/42.png";
// import Modal from "react-bootstrap/Modal";
// import Button from "react-bootstrap/Button";
import projectsData from "../../Constants/projectsData";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Model from "../../Constants/Model";
// import Model from "../../Constants/Model";
import { useLayoutEffect } from "react";
import "./port.css";
// import "./images1/1.png";

const modelimg = [
  {
    src: "/images1/1.jpg",
  },
  {
    src: "/images1/2.jpg",
  },
  {
    src: "/images1/3.jpg",
  },
  {
    src: "/images1/4.jpg",
  },
  {
    src: "/images1/5.jpg",
  },
  {
    src: "/images1/6.jpg",
  },
];
const modelimg1 = [
  {
    src: "/images1/7.JPG",
  },
  {
    src: "/images1/8.JPG",
  },
  {
    src: "/images1/9.JPG",
  },
  {
    src: "/images1/10.JPG",
  },
  {
    src: "/images1/11.JPG",
  },
  {
    src: "/images1/12.JPG",
  },
];
const modelimg2 = [
  {
    src: "/images1/13.jpg",
  },
  {
    src: "/images1/14.jpg",
  },
  {
    src: "/images1/15.jpg",
  },
  {
    src: "/images1/16.jpg",
  },
  {
    src: "/images1/17.jpg",
  },
  {
    src: "/images1/18.jpg",
  },
  {
    src: "/images1/19.jpg",
  },
];
const modelimg3 = [
  {
    src: "/images1/20.jpg",
  },
  {
    src: "/images1/21.jpg",
  },
  {
    src: "/images1/22.jpg",
  },
  {
    src: "/images1/23.jpg",
  },
];
const modelimg4 = [
  {
    src: "/images1/24.JPG",
  },
  {
    src: "/images1/25.JPG",
  },
  {
    src: "/images1/26.JPG",
  },
  {
    src: "/images1/27.JPG",
  },
  {
    src: "/images1/28.JPG",
  },
  {
    src: "/images1/29.JPG",
  },
];
const modelimg5 = [
  {
    src: "/images1/30.jpg",
  },
  {
    src: "/images1/31.jpg",
  },
  {
    src: "/images1/32.jpg",
  },
  {
    src: "/images1/33.jpg",
  },
];
const modelimg6 = [
  {
    src: "/images1/34.jpg",
  },
  {
    src: "/images1/35.jpg",
  },
  {
    src: "/images1/36.jpg",
  },
  {
    src: "/images1/37.jpg",
  },
  {
    src: "/images1/38.jpg",
  },
  {
    src: "/images1/39.jpg",
  },
  {
    src: "/images1/40.jpg",
  },
  {
    src: "/images1/41.jpg",
  },
  {
    src: "/images1/42.jpg",
  },
  {
    src: "/images1/43.jpg",
  },
  {
    src: "/images1/44.jpg",
  },
  {
    src: "/images1/45.jpg",
  },
  {
    src: "/images1/46.jpg",
  },
  {
    src: "/images1/47.jpg",
  },
];
const modelimg7 = [
  {
    src: "/images1/48.jpg",
  },
  {
    src: "/images1/49.jpg",
  },
  {
    src: "/images1/50.jpg",
  },
  {
    src: "/images1/51.jpg",
  },
  {
    src: "/images1/52.jpg",
  },
  {
    src: "/images1/53.jpg",
  },
  {
    src: "/images1/54.jpg",
  },
  {
    src: "/images1/55.jpg",
  },
  {
    src: "/images1/56.jpg",
  },
  {
    src: "/images1/57.jpg",
  },
  {
    src: "/images1/58.jpg",
  },
];
const modelimg8 = [
  {
    src: "/images1/59.jpg",
  },
  {
    src: "/images1/60.jpg",
  },
  {
    src: "/images1/61.jpg",
  },
  {
    src: "/images1/62.jpg",
  },
  {
    src: "/images1/63.jpg",
  },
  {
    src: "/images1/64.jpg",
  },
];
const modelimg9 = [
  {
    src: "/images1/65.jpg",
  },
  {
    src: "/images1/66.jpg",
  },
  {
    src: "/images1/67.jpg",
  },
  {
    src: "/images1/68.jpg",
  },
  {
    src: "/images1/69.jpg",
  },
];
const modelimg10 = [
  {
    src: "/images1/70.jpg",
  },
  {
    src: "/images1/71.jpg",
  },
  {
    src: "/images1/72.jpg",
  },
  {
    src: "/images1/73.jpg",
  },
];
const modelimg11 = [
  {
    src: "/images1/74.jpg",
  },
  {
    src: "/images1/75.jpg",
  },
  {
    src: "/images1/76.jpg",
  },
  {
    src: "/images1/77.jpg",
  },
  {
    src: "/images1/78.jpg",
  },
  {
    src: "/images1/79.jpg",
  },
  {
    src: "/images1/80.jpg",
  },
  {
    src: "/images1/81.jpg",
  },
  {
    src: "/images1/82.jpg",
  },
  {
    src: "/images1/83.jpg",
  },
];
const modelimg12 = [
  {
    src: "/images1/84.jpg",
  },
  {
    src: "/images1/85.jpg",
  },
  {
    src: "/images1/86.jpg",
  },
  {
    src: "/images1/87.jpg",
  },
  {
    src: "/images1/88.jpg",
  },
  {
    src: "/images1/89.jpg",
  },
  {
    src: "/images1/90.jpg",
  },
  {
    src: "/images1/91.jpg",
  },
  {
    src: "/images1/92.jpg",
  },
  {
    src: "/images1/93.jpg",
  },
];
const modelimg13 = [
  {
    src: "/images1/94.jpg",
  },
  {
    src: "/images1/95.jpg",
  },
  {
    src: "/images1/96.jpg",
  },
  {
    src: "/images1/97.jpg",
  },
  {
    src: "/images1/98.jpg",
  },
  {
    src: "/images1/99.jpg",
  },
  {
    src: "/images1/100.jpg",
  },
  {
    src: "/images1/101.jpg",
  },
  {
    src: "/images1/102.jpg",
  },
  {
    src: "/images1/103.jpg",
  },
  {
    src: "/images1/104.jpg",
  },
  {
    src: "/images1/105.jpg",
  },
];
const modelimg14 = [
  {
    src: "/images1/106.jpg",
  },
  {
    src: "/images1/107.jpg",
  },
  {
    src: "/images1/108.jpg",
  },
  {
    src: "/images1/109.jpg",
  },
  {
    src: "/images1/110.jpg",
  },
  {
    src: "/images1/111.jpg",
  },
  {
    src: "/images1/112.jpg",
  },
  {
    src: "/images1/113.jpg",
  },
  {
    src: "/images1/114.jpg",
  },
  {
    src: "/images1/115.jpg",
  },
  {
    src: "/images1/116.jpg",
  },
];
const modelimg15 = [
  {
    src: "/images1/117.jpg",
  },
  {
    src: "/images1/118.jpg",
  },
  {
    src: "/images1/119.jpg",
  },
  {
    src: "/images1/120.jpg",
  },
  {
    src: "/images1/121.jpg",
  },
  {
    src: "/images1/122.jpg",
  },
];
const Portfolio = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  const deviceWidth = window.innerWidth;
  document.title = "NineFive BIM - Portfolio";

  const [model, setModel] = useState(false);
  const [tempdata, setTempdata] = useState<string[]>([]);
  const [idValue, setIdValue] = useState<number | undefined>(undefined);
  const dummyData = [
    {
      id: 1,
      img: "image1.jpg",
      title: "Item 1",
      desc: "Description for Item 1",
    },
    {
      id: 2,
      img: "image2.jpg",
      title: "Item 2",
      desc: "Description for Item 2",
    },
    // Add more dummy data as needed
  ];
  const getData = (img: string, title: string, desc: string) => {
    let tempData = [img, title, desc];
    setTempdata((prevData) => [...prevData, ...tempData]);
    setModel(true);
  };

  const handleOpen = (id: number) => {
    setIdValue(id);
  };

  const handleClose = () => {
    setModel(false);
    setIdValue(undefined);
  };

  return (
    <>
      <div className="container-fluid portfolio-container p-0">
        <Header />
        <img src={img18} alt="" id="Top" />
        {/* <div
          className=" img-container mb-5"
          data-aos="zoom-in"
          data-aos-delay={700}
        >
          <div>
            <img
              src={img0}
              alt="img-0"
              style={{
                width: "100%",
                height: "450px",
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                zIndex: -2,
              }}
            />
          </div>
          <div style={{ zIndex: 0, color: "white" }}>
            <br />
            <br />
            <br />
            <br />

            <h1 className="text-bold text-center">NineFive BIM Portfolio</h1>

            <h3 className="text-center">
              We have done projects across residential, commercial, industrial,
              institutional and other segments.
            </h3>
          </div>

          <div
            className="container-fluid"
            style={{
              width: "100%",
              height: "450px",
              backgroundColor: "black",
              position: "absolute",
              left: 0,
              right: 0,
              top: 0,
              opacity: 0.4,
              zIndex: -1,
            }}
          ></div>
        </div> */}

        {/* <div className="container-fluid text-center mt-5 mb-5">
          <button type="button" className="m-2 btn btn-outline-secondary">
            ALL
          </button>
          <button type="button" className="m-2 btn btn-outline-secondary">
            ARTS AND ENTERTAINMENT
          </button>
          <button type="button" className=" m-2 btn btn-outline-secondary">
            COMMERCIAL
          </button>
          <button type="button" className=" m-2 btn btn-outline-secondary">
            HEALTHCARE
          </button>
          <button type="button" className=" m-2 btn btn-outline-secondary">
            HERITAGE
          </button>
          <button type="button" className=" m-2 btn btn-outline-secondary">
            HOSPITALITY
          </button>
          <button type="button" className=" m-2 btn btn-outline-secondary">
            INDUSTRIAL
          </button>
          <button type="button" className=" m-2 btn btn-outline-secondary">
            INFRASTRUCTURAL
          </button>
          <button type="button" className=" m-2 btn btn-outline-secondary">
            INSTITUTIONAL
          </button>
          <button type="button" className=" m-2 btn btn-outline-secondary">
            MIXED USE DEVELOPMENT
          </button>
          <button type="button" className=" m-2 btn btn-outline-secondary">
            PUBLIC WORK
          </button>
          <button type="button" className=" m-2 btn btn-outline-secondary">
            RESIDENTIAL
          </button>
        </div> */}
        {/* <div className="container">
          <div className="row">
            {projectsData.map((data, key) => {
              return (
                <div className="col-md-4 p-2">
                  <div
                    className="card"
                    style={{ width: "25rem", height: "35rem" }}
                    key={data.id}
                  >
                    <img src={data.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{data.title}</h5>
                      <p className="card-text">{data.description}</p>
                      <button
                        className="btn btn-primary"
                        onClick={() => handleOpen(data.id)}
                      >
                        Go somewhere
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div> */}

        {/* <div
          className="modal fade"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.8)" }}
        >
          {
            open && 
          }
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5">bfrfv</h1>
                <button type="button" className="btn-close"></button>
              </div>
              <div className="modal-body">
                <img src={img1} alt="" />
                <p>hfvbwdrh</p>
              </div>
              <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
            </div>
          </div>
        </div> */}
        {/* <div className="container">
          <div className="row">
            <div className="col-md-4 p-2">
              <img
                src={img1}
                alt="img-1"
                style={{ width: "500px", height: "500px" }}
              />
            </div>
            <div className="col-md-4 p-2">
              <img
                src={img1}
                alt="img-1"
                style={{ width: "500px", height: "500px" }}
              />
            </div>
            <div className="col-md-4 p-2">
              <img
                src={img1}
                alt="img-1"
                style={{ width: "500px", height: "500px" }}
              />
            </div>
            <div className="col-md-4 p-2">
              <img
                src={img1}
                alt="img-1"
                style={{ width: "500px", height: "500px" }}
              />
            </div>
            <div className="col-md-4 p-2">
              <img
                src={img1}
                alt="img-1"
                style={{ width: "500px", height: "500px" }}
              />
            </div>
            <div className="col-md-4 p-2">
              <img
                src={img1}
                alt="img-1"
                style={{ width: "500px", height: "500px" }}
              />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-4 p-2">
              <img
                src={img1}
                alt="img-1"
                style={{ width: "500px", height: "500px" }}
              />
            </div>
            <div className="col-md-4 p-2">
              <img
                src={img1}
                alt="img-1"
                style={{ width: "500px", height: "500px" }}
              />
            </div>
            <div className="col-md-4 p-2">
              <img
                src={img1}
                alt="img-1"
                style={{ width: "500px", height: "500px" }}
              />
            </div>
          </div>
        </div>*/}
      </div>

      <div className="main">
        <ul className="cards">
          <>
            {/* Button trigger modal */}

            {/* Modal */}
            <div
              className="modal fade"
              id="exampleModal1"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-scrollable">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                      Heritage church Facade model
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                  </div>
                  <div className="modal-body">
                    <div
                      id="carouselExample1"
                      className="carousel slide"
                      data-bs-ride="carousel"
                    >
                      <div className="carousel-inner">
                        {modelimg1.map((item, key) => (
                          <div
                            className={`carousel-item ${
                              key === 0 ? "active" : ""
                            }`}
                            key={key}
                          >
                            <div className="image-container">
                              <img
                                src={item.src}
                                className="d-block w-100"
                                style={{ width: "100%", height: "300px" }} // Set a fixed height and width for the images
                                alt={`Image ${key + 1}`}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                      <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExample1"
                        data-bs-slide="prev"
                      >
                        <span
                          className="carousel-control-prev-icon"
                          aria-hidden="true"
                        />
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExample1"
                        data-bs-slide="next"
                      >
                        <span
                          className="carousel-control-next-icon"
                          aria-hidden="true"
                        />
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div>
                    <div className="card_content img" style={{ zIndex: "2" }}>
                      <h2 className="card_title">Heritage Church Facade</h2>
                      <br />
                      <p className="card_text">
                        <b>Project Overview:</b> A detailed Facade Model of a
                        heritage Church Building From Given photographs and old
                        drawings.
                        <br />
                        <b>Type:</b> BIM Models
                        <br />
                        <b>Sector:</b> Public Building
                        <br />
                        <b>Scope:</b> BIM Architecture
                        <br />
                        <b>Deliverables:</b> LOD 500 As-built Architectural
                        model with surrounding building blocks.
                      </p>
                    </div>
                  </div>

                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="modal fade"
              id="exampleModal2"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-scrollable">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                      City Hall
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                  </div>
                  <div className="modal-body">
                    <div
                      id="carouselExample2"
                      className="carousel slide"
                      data-bs-ride="carousel"
                    >
                      <div className="carousel-inner">
                        {modelimg2.map((item, key) => (
                          <div
                            className={`carousel-item ${
                              key === 0 ? "active" : ""
                            }`}
                            key={key}
                          >
                            <div className="image-container">
                              <img
                                src={item.src}
                                className="d-block w-100"
                                style={{ width: "100%", height: "300px" }} // Set a fixed height and width for the images
                                alt={`Image ${key + 1}`}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                      <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExample2"
                        data-bs-slide="prev"
                      >
                        <span
                          className="carousel-control-prev-icon"
                          aria-hidden="true"
                        />
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExample2"
                        data-bs-slide="next"
                      >
                        <span
                          className="carousel-control-next-icon"
                          aria-hidden="true"
                        />
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div>
                    <div className="card_content img " style={{ zIndex: "2" }}>
                      <h2 className="card_title">City Hall</h2>
                      <br />
                      <p className="card_text">
                        <b>Project Over View:</b> Detailed Exterior model of a
                        City hall in New york
                        <br />
                        <b>Type :</b> BIM Models
                        <br />
                        <b>Sector:</b> Public Building
                        <br />
                        <b>Scope :</b> BIM Architecture
                        <br />
                        <b>Deliverables:</b> LOD 500 As-build Achitectural
                        model.
                      </p>
                    </div>
                    {/* {modelimg2.map((item, key) => (
                      <div className="col-xl-12 col-md-12 col-sm-12">
                        <div className="client_logo mb-3">
                          <img src={item.src} alt="404 - Not Given" />
                        </div>
                      </div>
                    ))} */}
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="modal fade"
              id="exampleModal3"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-scrollable">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                      3D Dome
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                  </div>
                  <div className="modal-body">
                    <div
                      id="carouselExample3"
                      className="carousel slide"
                      data-bs-ride="carousel"
                    >
                      <div className="carousel-inner">
                        {modelimg3.map((item, key) => (
                          <div
                            className={`carousel-item ${
                              key === 0 ? "active" : ""
                            }`}
                            key={key}
                          >
                            <div className="image-container">
                              <img
                                src={item.src}
                                className="d-block w-100"
                                style={{ width: "100%", height: "300px" }} // Set a fixed height and width for the images
                                alt={`Image ${key + 1}`}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                      <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExample3"
                        data-bs-slide="prev"
                      >
                        <span
                          className="carousel-control-prev-icon"
                          aria-hidden="true"
                        />
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExample3"
                        data-bs-slide="next"
                      >
                        <span
                          className="carousel-control-next-icon"
                          aria-hidden="true"
                        />
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div>
                    <div className="card_content img " style={{ zIndex: "2" }}>
                      <h2 className="card_title">3D Dome </h2>
                      <br />
                      <p className="card_text">
                        <b>Project Over View:</b> To review caliber and skill of
                        the team, NineFive BIM's team has developed an
                        incredible 3D model of a Dome with detailed facade.
                        <br />
                        <b>Type :</b> BIM Models
                        <br />
                        <b>Sector:</b> Public Building
                        <br />
                        <b>Scope :</b> BIM Architecture
                        <br />
                        <b>Deliverables:</b> LOD 500 As-build Achitectural model
                        with surrounding building blocks.
                      </p>
                    </div>
                    {/* <div className="row">
                      {modelimg3.map((item, key) => (
                        <div className="col-xl-12 col-md-12 col-sm-12">
                          <div className="client_logo mb-3">
                            <img src={item.src} alt="404 - Not Given" />
                          </div>
                        </div>
                      ))}
                    </div> */}
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="modal fade"
              id="exampleModal4"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-scrollable">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                      Landsdale Park
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                  </div>
                  <div className="modal-body">
                    <div
                      id="carouselExample4"
                      className="carousel slide"
                      data-bs-ride="carousel"
                    >
                      <div className="carousel-inner">
                        {modelimg1.map((item, key) => (
                          <div
                            className={`carousel-item ${
                              key === 0 ? "active" : ""
                            }`}
                            key={key}
                          >
                            <div className="image-container">
                              <img
                                src={item.src}
                                className="d-block w-100"
                                style={{ width: "100%", height: "300px" }} // Set a fixed height and width for the images
                                alt={`Image ${key + 1}`}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                      <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExample4"
                        data-bs-slide="prev"
                      >
                        <span
                          className="carousel-control-prev-icon"
                          aria-hidden="true"
                        />
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExample4"
                        data-bs-slide="next"
                      >
                        <span
                          className="carousel-control-next-icon"
                          aria-hidden="true"
                        />
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div>
                    <div className="card_content img " style={{ zIndex: "2" }}>
                      <h2 className="card_title">Landsdale Park</h2>
                      <br />
                      <p className="card_text">
                        <b>Project Over View:</b> AS-build 3D model to use for
                        renovation work, based on CAD drawings and Photographs.
                        <br />
                        <b>Type :</b> BIM Models
                        <br />
                        <b>Sector:</b> Residencial Building
                        <br />
                        <b>Scope :</b> BIM Architecture & Structure
                        <br />
                        <b>Deliverables:</b> LOD 400 Model to be delivered Along
                        with quantity and Material take off.
                      </p>
                    </div>
                    {/* <div className="row">
                      {modelimg4.map((item, key) => (
                        <div className="col-xl-12 col-md-12 col-sm-12">
                          <div className="client_logo mb-3">
                            <img src={item.src} alt="404 - Not Given" />
                          </div>
                        </div>
                      ))}
                    </div> */}
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="modal fade"
              id="exampleModal5"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-scrollable">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                      173 King's Rd.
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                  </div>
                  <div className="modal-body">
                    <div
                      id="carouselExample5"
                      className="carousel slide"
                      data-bs-ride="carousel"
                    >
                      <div className="carousel-inner">
                        {modelimg5.map((item, key) => (
                          <div
                            className={`carousel-item ${
                              key === 0 ? "active" : ""
                            }`}
                            key={key}
                          >
                            <div className="image-container">
                              <img
                                src={item.src}
                                className="d-block w-100"
                                style={{ width: "100%", height: "300px" }} // Set a fixed height and width for the images
                                alt={`Image ${key + 1}`}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                      <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExample5"
                        data-bs-slide="prev"
                      >
                        <span
                          className="carousel-control-prev-icon"
                          aria-hidden="true"
                        />
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExample5"
                        data-bs-slide="next"
                      >
                        <span
                          className="carousel-control-next-icon"
                          aria-hidden="true"
                        />
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div>
                    <div className="card_content img " style={{ zIndex: "2" }}>
                      <h2 className="card_title">173 King's Rd.</h2>
                      <br />
                      <p className="card_text">
                        <b>Project Over View:</b> AS-build 3D model, based on
                        CAD drawings and Photographs.
                        <br />
                        <b>Type :</b> BIM Models
                        <br />
                        <b>Sector:</b> Residencial Building
                        <br />
                        <b>Scope :</b> BIM Architecture
                        <br />
                        <b>Deliverables:</b> LOD 300 3D Revit model with
                        accurate landscape.
                      </p>
                    </div>
                    {/* <div className="row">
                      {modelimg5.map((item, key) => (
                        <div className="col-xl-12 col-md-12 col-sm-12">
                          <div className="client_logo mb-3">
                            <img src={item.src} alt="404 - Not Given" />
                          </div>
                        </div>
                      ))}
                    </div> */}
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="modal fade"
              id="exampleModal6"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-scrollable">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                      School
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                  </div>
                  <div className="modal-body">
                    <div
                      id="carouselExample6"
                      className="carousel slide"
                      data-bs-ride="carousel"
                    >
                      <div className="carousel-inner">
                        {modelimg6.map((item, key) => (
                          <div
                            className={`carousel-item ${
                              key === 0 ? "active" : ""
                            }`}
                            key={key}
                          >
                            <div className="image-container">
                              <img
                                src={item.src}
                                className="d-block w-100"
                                style={{ width: "100%", height: "300px" }} // Set a fixed height and width for the images
                                alt={`Image ${key + 1}`}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                      <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExample6"
                        data-bs-slide="prev"
                      >
                        <span
                          className="carousel-control-prev-icon"
                          aria-hidden="true"
                        />
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExample6"
                        data-bs-slide="next"
                      >
                        <span
                          className="carousel-control-next-icon"
                          aria-hidden="true"
                        />
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div>
                    <div className="card_content img " style={{ zIndex: "2" }}>
                      <h2 className="card_title">School </h2>
                      <br />
                      <p className="card_text">
                        <b>Project Over View:</b> 3D model of the School is to
                        manage the design, construction and renovation of school
                        facilities in New York City.
                        <br />
                        <b>Type :</b> BIM Models
                        <br />
                        <b>Sector:</b> Public Building
                        <br />
                        <b>Scope :</b> BIM Architecture
                        <br />
                        <b>Deliverables:</b> LOD 400 BIM Architectural Model
                      </p>
                    </div>
                    {/* <div className="row">
                      {modelimg6.map((item, key) => (
                        <div className="col-xl-12 col-md-12 col-sm-12">
                          <div className="client_logo mb-3">
                            <img src={item.src} alt="404 - Not Given" />
                          </div>
                        </div>
                      ))}
                    </div> */}
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="modal fade"
              id="exampleModal7"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-scrollable">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                      Villa
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                  </div>
                  <div className="modal-body">
                    <div
                      id="carouselExample7"
                      className="carousel slide"
                      data-bs-ride="carousel"
                    >
                      <div className="carousel-inner">
                        {modelimg7.map((item, key) => (
                          <div
                            className={`carousel-item ${
                              key === 0 ? "active" : ""
                            }`}
                            key={key}
                          >
                            <div className="image-container">
                              <img
                                src={item.src}
                                className="d-block w-100"
                                style={{ width: "100%", height: "300px" }} // Set a fixed height and width for the images
                                alt={`Image ${key + 1}`}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                      <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExample7"
                        data-bs-slide="prev"
                      >
                        <span
                          className="carousel-control-prev-icon"
                          aria-hidden="true"
                        />
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExample7"
                        data-bs-slide="next"
                      >
                        <span
                          className="carousel-control-next-icon"
                          aria-hidden="true"
                        />
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div>
                    <div className="card_content img " style={{ zIndex: "2" }}>
                      <h2 className="card_title">Villa</h2>
                      <br />
                      <p className="card_text">
                        <b>Project Over View:</b> AS-build 3D model, based on
                        CAD drawings and Photographs.
                        <br />
                        <b>Type :</b> BIM Models
                        <br />
                        <b>Sector:</b> Residencial Building
                        <br />
                        <b>Scope :</b> BIM Architecture
                        <br />
                        <b>Deliverables:</b> LOD 300 3D Revit model with
                        accurate materials.
                      </p>
                    </div>
                    <div className="container text-center">
                      {/* <div className="row">
                        {modelimg.map((item, key) => (
                          <div className="col-xl-12 col-md-12 col-sm-12">
                            <div className="client_logo">
                              <img src={item.src} alt="404 - Not Given" />
                            </div>
                          </div>
                        ))}
                      </div> */}
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="modal fade"
              id="exampleModal8"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-scrollable">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                      Chemical Refinery As-Build
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                  </div>
                  <div className="modal-body">
                    <div
                      id="carouselExample8"
                      className="carousel slide"
                      data-bs-ride="carousel"
                    >
                      <div className="carousel-inner">
                        {modelimg14.map((item, key) => (
                          <div
                            className={`carousel-item ${
                              key === 0 ? "active" : ""
                            }`}
                            key={key}
                          >
                            <div className="image-container">
                              <img
                                src={item.src}
                                className="d-block w-100"
                                style={{ width: "100%", height: "300px" }} // Set a fixed height and width for the images
                                alt={`Image ${key + 1}`}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                      <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExample8"
                        data-bs-slide="prev"
                      >
                        <span
                          className="carousel-control-prev-icon"
                          aria-hidden="true"
                        />
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExample8"
                        data-bs-slide="next"
                      >
                        <span
                          className="carousel-control-next-icon"
                          aria-hidden="true"
                        />
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div>
                    <div className="card_content img " style={{ zIndex: "2" }}>
                      <h2 className="card_title">Chemical Refinery As-Build</h2>
                      <br />
                      <p className="card_text">
                        <b>Project Over View:</b> As-build 3D model of a
                        chemical refinery to re-work and prefabrication of new
                        piping during an upgrade.
                        <br />
                        <b>Type :</b> BIM MEP Models
                        <br />
                        <b>Sector:</b> Industrail Building
                        <br />
                        <b>Scope :</b> BIM MEP
                        <br />
                        <b>Deliverables:</b> LOD 300 3D Revit MEP model with
                        clash detection.
                      </p>
                    </div>

                    {/* <div className="row">
                      {modelimg14.map((item, key) => (
                        <div className="col-xl-12 col-md-12 col-sm-12">
                          <div className="client_logo mb-3">
                            <img src={item.src} alt="404 - Not Given" />
                          </div>
                        </div>
                      ))}
                    </div> */}
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="modal fade"
              id="exampleModal9"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-scrollable">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                      As-Build Chiller Plant
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                  </div>
                  <div className="modal-body">
                    <div
                      id="carouselExample9"
                      className="carousel slide"
                      data-bs-ride="carousel"
                    >
                      <div className="carousel-inner">
                        {modelimg13.map((item, key) => (
                          <div
                            className={`carousel-item ${
                              key === 0 ? "active" : ""
                            }`}
                            key={key}
                          >
                            <div className="image-container">
                              <img
                                src={item.src}
                                className="d-block w-100"
                                style={{ width: "100%", height: "300px" }} // Set a fixed height and width for the images
                                alt={`Image ${key + 1}`}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                      <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExample9"
                        data-bs-slide="prev"
                      >
                        <span
                          className="carousel-control-prev-icon"
                          aria-hidden="true"
                        />
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExample9"
                        data-bs-slide="next"
                      >
                        <span
                          className="carousel-control-next-icon"
                          aria-hidden="true"
                        />
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div>
                    <div className="card_content img " style={{ zIndex: "2" }}>
                      <h2 className="card_title">As-Build Chiller Plant</h2>
                      <br />
                      <p className="card_text">
                        <b>Project Over View:</b> As-build 3D model of chiller
                        plant facility where used to create as-built p&id
                        drawings for engineering design, clash detection, and
                        coordination drawings.
                        <br />
                        <b>Type :</b> BIM MEP Models
                        <br />
                        <b>Sector:</b> Industrail Building
                        <br />
                        <b>Scope :</b> BIM MEP
                        <br />
                        <b>Deliverables:</b> LOD 300 3D Revit MEP model of
                        piping, valves, equipement, and structural steel using
                        laser scan point clouds.
                      </p>
                    </div>

                    {/* <div className="row">
                      {modelimg13.map((item, key) => (
                        <div className="col-xl-12 col-md-12 col-sm-12">
                          <div className="client_logo mb-3">
                            <img src={item.src} alt="404 - Not Given" />
                          </div>
                        </div>
                      ))}
                    </div> */}
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="modal fade"
              id="exampleModal10"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-scrollable">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                      Process Plant As-Built
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                  </div>
                  <div className="modal-body">
                    <div
                      id="carouselExample10"
                      className="carousel slide"
                      data-bs-ride="carousel"
                    >
                      <div className="carousel-inner">
                        {modelimg15.map((item, key) => (
                          <div
                            className={`carousel-item ${
                              key === 0 ? "active" : ""
                            }`}
                            key={key}
                          >
                            <div className="image-container">
                              <img
                                src={item.src}
                                className="d-block w-100"
                                style={{ width: "100%", height: "300px" }} // Set a fixed height and width for the images
                                alt={`Image ${key + 1}`}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                      <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExample10"
                        data-bs-slide="prev"
                      >
                        <span
                          className="carousel-control-prev-icon"
                          aria-hidden="true"
                        />
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExample10"
                        data-bs-slide="next"
                      >
                        <span
                          className="carousel-control-next-icon"
                          aria-hidden="true"
                        />
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div>
                    <div className="card_content img " style={{ zIndex: "2" }}>
                      <h2 className="card_title">Process Plant As-Built</h2>
                      <br />
                      <p className="card_text">
                        <b>Project Over View:</b> As-build 3D model of Process
                        plant where used to connect tie-in points, clash
                        detection of new piping, and construction coordination
                        drawings.
                        <br />
                        <b>Type :</b> BIM MEP Models
                        <br />
                        <b>Sector:</b> Industrail Building
                        <br />
                        <b>Scope :</b> BIM MEP
                        <br />
                        <b>Deliverables:</b> LOD 300 3D Revit MEP model of
                        electrical conduit, ductwork, hot and cold water piping,
                        cable-tray, pipe hangars, valves, equipement, and
                        structural steel using laser scan point clouds
                      </p>
                    </div>

                    {/* <div className="row">
                      {modelimg15.map((item, key) => (
                        <div className="col-xl-12 col-md-12 col-sm-12">
                          <div className="client_logo mb-3">
                            <img src={item.src} alt="404 - Not Given" />
                          </div>
                        </div>
                      ))}
                    </div> */}
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="modal fade"
              id="exampleModal11"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-scrollable">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                      West End Commercial
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                  </div>
                  <div className="modal-body">
                    <div
                      id="carouselExample11"
                      className="carousel slide"
                      data-bs-ride="carousel"
                    >
                      <div className="carousel-inner">
                        {modelimg12.map((item, key) => (
                          <div
                            className={`carousel-item ${
                              key === 0 ? "active" : ""
                            }`}
                            key={key}
                          >
                            <div className="image-container">
                              <img
                                src={item.src}
                                className="d-block w-100"
                                style={{ width: "100%", height: "300px" }} // Set a fixed height and width for the images
                                alt={`Image ${key + 1}`}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                      <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExample11"
                        data-bs-slide="prev"
                      >
                        <span
                          className="carousel-control-prev-icon"
                          aria-hidden="true"
                        />
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExample11"
                        data-bs-slide="next"
                      >
                        <span
                          className="carousel-control-next-icon"
                          aria-hidden="true"
                        />
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div>
                    <div className="card_content img " style={{ zIndex: "2" }}>
                      <h2 className="card_title">West End Commercial</h2>
                      <br />
                      <p className="card_text">
                        <b>Project Over View:</b> AS-build 3D model of Exterior
                        & Roof of Commercial Building From laser scanned data.
                        <br />
                        <b>Type :</b> Scan-To-BIM Models
                        <br />
                        <b>Sector:</b> Commercial Building
                        <br />
                        <b>Scope :</b> BIM Architecture
                        <br />
                        <b>Deliverables:</b> LOD 400 3D Revit model with
                        Accurate Architectural Details in exterior.
                      </p>
                    </div>

                    {/* <div className="row">
                      {modelimg12.map((item, key) => (
                        <div className="col-xl-12 col-md-12 col-sm-12">
                          <div className="client_logo mb-3">
                            <img src={item.src} alt="404 - Not Given" />
                          </div>
                        </div>
                      ))}
                    </div> */}
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="modal fade"
              id="exampleModal12"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-scrollable">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                      Varick Shopping Mall
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                  </div>
                  <div className="modal-body">
                    <div
                      id="carouselExample12"
                      className="carousel slide"
                      data-bs-ride="carousel"
                    >
                      <div className="carousel-inner">
                        {modelimg11.map((item, key) => (
                          <div
                            className={`carousel-item ${
                              key === 0 ? "active" : ""
                            }`}
                            key={key}
                          >
                            <div className="image-container">
                              <img
                                src={item.src}
                                className="d-block w-100"
                                style={{ width: "100%", height: "300px" }} // Set a fixed height and width for the images
                                alt={`Image ${key + 1}`}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                      <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExample12"
                        data-bs-slide="prev"
                      >
                        <span
                          className="carousel-control-prev-icon"
                          aria-hidden="true"
                        />
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExample12"
                        data-bs-slide="next"
                      >
                        <span
                          className="carousel-control-next-icon"
                          aria-hidden="true"
                        />
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div>
                    <div className="card_content img " style={{ zIndex: "2" }}>
                      <h2 className="card_title">Varick Shopping Mall</h2>
                      <br />
                      <p className="card_text">
                        <b>Project Over View:</b> AS-build 3D model of complete
                        Interior, Exterior & Roof of a Shopping Mall From laser
                        scanned data.
                        <br />
                        <b>Type :</b> Scan-To-BIM Models
                        <br />
                        <b>Sector:</b> Commercial Building
                        <br />
                        <b>Scope :</b> BIM Architecture
                        <br />
                        <b>Deliverables:</b> LOD 400 3D Revit model with
                        Accurate Architectural Details.
                      </p>
                    </div>

                    {/* <div className="row">
                      {modelimg11.map((item, key) => (
                        <div className="col-xl-12 col-md-12 col-sm-12">
                          <div className="client_logo mb-3">
                            <img src={item.src} alt="404 - Not Given" />
                          </div>
                        </div>
                      ))}
                    </div> */}
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="modal fade"
              id="exampleModal13"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-scrollable">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                      329 Main St-Brooklyn NY.
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                  </div>
                  <div className="modal-body">
                    <div
                      id="carouselExample13"
                      className="carousel slide"
                      data-bs-ride="carousel"
                    >
                      <div className="carousel-inner">
                        {modelimg10.map((item, key) => (
                          <div
                            className={`carousel-item ${
                              key === 0 ? "active" : ""
                            }`}
                            key={key}
                          >
                            <div className="image-container">
                              <img
                                src={item.src}
                                className="d-block w-100"
                                style={{ width: "100%", height: "300px" }} // Set a fixed height and width for the images
                                alt={`Image ${key + 1}`}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                      <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExample13"
                        data-bs-slide="prev"
                      >
                        <span
                          className="carousel-control-prev-icon"
                          aria-hidden="true"
                        />
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExample13"
                        data-bs-slide="next"
                      >
                        <span
                          className="carousel-control-next-icon"
                          aria-hidden="true"
                        />
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div>
                    <div className="card_content img " style={{ zIndex: "2" }}>
                      <h2 className="card_title">329 Main St-Brooklyn NY.</h2>
                      <br />
                      <p className="card_text">
                        <b>Project Over View:</b> AS-build 3D model of complete
                        Interior, Exterior & Roof of a commerical Building From
                        laser scanned data.
                        <br />
                        <b>Type :</b>Scan-To-BIM Models
                        <br />
                        <b>Sector:</b> Commercial Building
                        <br />
                        <b>Scope :</b> BIM Architecture
                        <br />
                        <b>Deliverables:</b> LOD 400 3D Revit model with precise
                        exterior details.
                      </p>
                    </div>

                    {/* <div className="row">
                      {modelimg10.map((item, key) => (
                        <div className="col-xl-12 col-md-12 col-sm-12">
                          <div className="client_logo">
                            <img src={item.src} alt="404 - Not Given" />
                          </div>
                        </div>
                      ))}
                    </div> */}
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="modal fade"
              id="exampleModal14"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-scrollable">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                      JJ Exterior Facade
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                  </div>
                  <div className="modal-body">
                    <div
                      id="carouselExample14"
                      className="carousel slide"
                      data-bs-ride="carousel"
                    >
                      <div className="carousel-inner">
                        {modelimg9.map((item, key) => (
                          <div
                            className={`carousel-item ${
                              key === 0 ? "active" : ""
                            }`}
                            key={key}
                          >
                            <div className="image-container">
                              <img
                                src={item.src}
                                className="d-block w-100"
                                style={{ width: "100%", height: "300px" }} // Set a fixed height and width for the images
                                alt={`Image ${key + 1}`}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                      <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExample14"
                        data-bs-slide="prev"
                      >
                        <span
                          className="carousel-control-prev-icon"
                          aria-hidden="true"
                        />
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExample14"
                        data-bs-slide="next"
                      >
                        <span
                          className="carousel-control-next-icon"
                          aria-hidden="true"
                        />
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div>
                    <div className="card_content img " style={{ zIndex: "2" }}>
                      <h2 className="card_title">JJ Exterior Facade </h2>
                      <br />
                      <p className="card_text">
                        <b>Project Over View:</b> Exterior AS-build 3D model of
                        JJ Library Building From laser scanned data.
                        <br />
                        <b>Type :</b> Scan-To-BIM Models
                        <br />
                        <b>Sector:</b> Public Building
                        <br />
                        <b>Scope :</b> BIM Architecture
                        <br />
                        <b>Deliverables:</b> LOD 400 3D Revit model with precise
                        exterior details.
                      </p>
                    </div>

                    {/* <div className="row">
                      {modelimg9.map((item, key) => (
                        <div className="col-xl-12 col-md-12 col-sm-12">
                          <div className="client_logo">
                            <img src={item.src} alt="404 - Not Given" />
                          </div>
                        </div>
                      ))}
                    </div> */}
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="modal fade"
              id="exampleModal15"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-scrollable">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                      Flushing Ave-Brooklyn NY.
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                  </div>
                  <div className="modal-body">
                    <div
                      id="carouselExample15"
                      className="carousel slide"
                      data-bs-ride="carousel"
                    >
                      <div className="carousel-inner">
                        {modelimg8.map((item, key) => (
                          <div
                            className={`carousel-item ${
                              key === 0 ? "active" : ""
                            }`}
                            key={key}
                          >
                            <div className="image-container">
                              <img
                                src={item.src}
                                className="d-block w-100"
                                style={{ width: "100%", height: "300px" }} // Set a fixed height and width for the images
                                alt={`Image ${key + 1}`}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                      <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExample15"
                        data-bs-slide="prev"
                      >
                        <span
                          className="carousel-control-prev-icon"
                          aria-hidden="true"
                        />
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExample15"
                        data-bs-slide="next"
                      >
                        <span
                          className="carousel-control-next-icon"
                          aria-hidden="true"
                        />
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div>
                    <div className="card_content img " style={{ zIndex: "2" }}>
                      <h2 className="card_title">Flushing Ave-Brooklyn NY.</h2>
                      <br />
                      <p className="card_text">
                        <b>Project Over View:</b> AS-build 3D model of complete
                        Interior, Exterior & Roof of a commerical Building From
                        laser scanned data.
                        <br />
                        <b>Type :</b> Scan-To-BIM Models
                        <br />
                        <b>Sector:</b> Commercial Building
                        <br />
                        <b>Scope :</b> BIM Architecture
                        <br />
                        <b>Deliverables:</b> LOD 400 3D Revit model with precise
                        exterior details.
                      </p>
                    </div>

                    {/* <div className="row">
                      {modelimg8.map((item, key) => (
                        <div className="col-xl-12 col-md-12 col-sm-12">
                          <div className="client_logo mb-3">
                            <img src={item.src} alt="404 - Not Given" />
                          </div>
                        </div>
                      ))}
                    </div> */}
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="modal fade"
              id="exampleModal16"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-scrollable">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                      6 Clark
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                  </div>
                  <div className="modal-body">
                    <div
                      id="carouselExample16"
                      className="carousel slide"
                      data-bs-ride="carousel"
                    >
                      <div className="carousel-inner">
                        {modelimg7.map((item, key) => (
                          <div
                            className={`carousel-item ${
                              key === 0 ? "active" : ""
                            }`}
                            key={key}
                          >
                            <div className="image-container">
                              <img
                                src={item.src}
                                className="d-block w-100"
                                style={{ width: "100%", height: "300px" }} // Set a fixed height and width for the images
                                alt={`Image ${key + 1}`}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                      <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExample16"
                        data-bs-slide="prev"
                      >
                        <span
                          className="carousel-control-prev-icon"
                          aria-hidden="true"
                        />
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExample16"
                        data-bs-slide="next"
                      >
                        <span
                          className="carousel-control-next-icon"
                          aria-hidden="true"
                        />
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div>
                    <div className="card_content img " style={{ zIndex: "2" }}>
                      <h2 className="card_title">6 Clark</h2>
                      <br />
                      <p className="card_text">
                        <b>Project Over View:</b> AS-build 3D model used for
                        upgrade and Renovation from 3D laser scanned Data and
                        Photographs.
                        <br />
                        <b>Type :</b> Scan-To-BIM Models
                        <br />
                        <b>Sector:</b> Residencial Building
                        <br />
                        <b>Scope :</b> BIM Architecture
                        <br />
                        <b>Deliverables:</b> LOD 300 3D Revit model with
                        accurate landscape.
                      </p>
                    </div>

                    {/* <div className="row">
                      {modelimg7.map((item, key) => (
                        <div className="col-xl-12 col-md-12 col-sm-12">
                          <div className="client_logo mb-3">
                            <img src={item.src} alt="404 - Not Given" />
                          </div>
                        </div>
                      ))}
                    </div> */}
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>

          <li className="cards_item">
            <div className="card ">
              <div className="card_image">
                <img src={img2} />
              </div>
              <div className="card_content img " style={{ zIndex: "2" }}>
                <h2 className="card_title">Heritage church Facade </h2>
                <br />
                <p className="card_text">
                  <b>Project Over View:</b> A detailed Facade Model of a
                  heritage Church Building From Given photographs and old
                  drawings.
                  <br />
                  <b>Type :</b> BIM Models
                  <br />
                  <b>Sector:</b> Public Building
                  <br />
                  <b>Scope :</b> BIM Architecture
                  <br />
                  <b>Deliverables:</b> LOD 500 As-build Achitectural model with
                  surrounding building blocks.
                </p>
                <button
                  className="btn card_btn"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal1"
                >
                  See More
                </button>
              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="card">
              <div className="card_image">
                <img src={img3} />
              </div>
              <div className="card_content">
                <h2 className="card_title">City Hall </h2> <br />
                <p className="card_text">
                  <b>Project Over View:</b> Detailed Exterior model of a City
                  hall in New york
                  <br />
                  <b>Type :</b> BIM Models <br />
                  <b>Sector:</b> Public Building <br />
                  <b>Scope :</b> BIM Architecture
                  <br />
                  <b>Deliverables:</b> LOD 500 As-build Achitectural <br />
                  model. <br />
                </p>
                <button
                  className="btn card_btn"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal2"
                >
                  See More
                </button>
              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="card">
              <div className="card_image">
                <img src={img4} />
              </div>
              <div className="card_content">
                <h2 className="card_title">3D Dome </h2>
                <br />
                <p className="card_text">
                  <b>Project Over View:</b> To review caliber and skill of the
                  team, NineFive BIM's team has developed an incredible 3D model
                  of a Dome with detailed facade.
                  <br />
                  <b>Building Type :</b> BIM Models <br />
                  <b>Sector:</b> Public Building <br />
                  <b>Scope :</b> BIM Architecture <br />
                  <b>Deliverables:</b>
                </p>
                <button
                  className="btn card_btn"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal3"
                >
                  See More
                </button>
              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="card">
              <div className="card_image">
                <img src={img5} />
              </div>
              <div className="card_content">
                <h2 className="card_title">Landsdale Park</h2>
                <br />
                <p className="card_text">
                  <b>Project Over View:</b> AS-build 3D model to use for
                  renovation work, based on CAD drawings and Photographs. <br />
                  <b>Type :</b> BIM Models <br />
                  <b> Sector:</b> Residencial Building <br />
                  <b>Scope :</b> BIM Architecture & Structure <br />
                  <b>Deliverables:</b> LOD 400 Model to be delivered Along with
                  quantity and Material take off. <br />
                </p>
                <button
                  className="btn card_btn"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal4"
                >
                  See More
                </button>
              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="card">
              <div className="card_image">
                <img src={img6} />
              </div>
              <div className="card_content">
                <h2 className="card_title">173 King's Rd.</h2>
                <br />
                <p className="card_text">
                  <b>Project Over View:</b> AS-build 3D model, based on CAD
                  drawings and Photographs. <br />
                  <b>Type :</b> BIM Models <br />
                  <b>Sector:</b> Residencial Building <br />
                  <b>Scope :</b> BIM Architecture <br />
                  <b> Deliverables:</b> LOD 300 3D Revit model with accurate
                  landscape.
                </p>
                <br />
                <button
                  className="btn card_btn"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal5"
                >
                  See More
                </button>
              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="card">
              <div className="card_image">
                <img src={img7} />
              </div>
              <div className="card_content">
                <h2 className="card_title">School</h2>
                <br />
                <p className="card_text">
                  <b>Project Over View:</b> 3D model of the School is to manage
                  the design, construction and renovation of school facilities
                  in New York City. <br />
                  <b>Type :</b> BIM Models <br />
                  <b>Sector:</b> Public Building <br />
                  <b>Scope:</b> BIM Architecture <br />
                  <b>Deliverables:</b>LOD 400 BIM Architectural Model
                </p>
                <br />
                <button
                  className="btn card_btn"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal6"
                >
                  See More
                </button>
              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="card">
              <div className="card_image">
                <img src={img8} />
              </div>
              <div className="card_content">
                <h2 className="card_title">Villa</h2>
                <br />
                <p className="card_text">
                  <b> Project Over View:</b> AS-build 3D model, based on CAD
                  drawings and Photographs. <br />
                  <b>Type :</b> BIM Models <br />
                  <b>Sector:</b> Residencial Building <br />
                  <b>Scope :</b> BIM Architecture <br />
                  <b>Deliverables:</b> LOD 300 3D Revit model with accurate
                  materials.
                </p>
                <br />
                <button
                  className="btn card_btn"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal7"
                >
                  See More
                </button>
              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="card">
              <div className="card_image">
                <img src={img9} />
              </div>
              <div className="card_content">
                <h2 className="card_title">Chemical Refinery As-build</h2>
                <br />
                <p className="card_text">
                  <b>Project Over View:</b> As-build 3D model of a chemical
                  refinery to re-work and prefabrication of new piping during an
                  upgrade. <br />
                  <b>Type :</b> BIM MEP Models <br />
                  <b>Sector:</b> Industrail Building <br />
                  <b>Scope :</b> BIM MEP <br />
                  <b>Deliverables:</b> LOD 300 3D Revit MEP model with clash
                  detection.
                </p>
                <button
                  className="btn card_btn"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal8"
                >
                  See More
                </button>
              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="card">
              <div className="card_image">
                <img src={img10} />
              </div>
              <div className="card_content">
                <h2 className="card_title">As-Build Chiller Plant</h2>
                <br />
                <p className="card_text">
                  <b>Project Over View:</b> As-build 3D model of chiller plant
                  facility where used to create as-built p&id drawings for
                  engineering design, clash detection, and coordination
                  drawings. <br />
                  <b>Type :</b> BIM MEP Models <br />
                  <b>Sector:</b> Industrail Building <br />
                  <b>Scope :</b> BIM MEP <br />
                  <b>Deliverables:</b> LOD 300 3D Revit MEP model of piping,
                  valves, equipement, and structural steel using laser scan
                  point clouds.
                </p>
                <button
                  className="btn card_btn"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal9"
                >
                  See More
                </button>
              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="card">
              <div className="card_image">
                <img src={img11} />
              </div>
              <div className="card_content">
                <h2 className="card_title">Process Plant As-Built</h2>
                <br />
                <p className="card_text">
                  <b>Project Over View:</b> As-build 3D model of Process plant
                  where used to connect tie-in points, clash detection of new
                  piping, and construction coordination drawings. <br />
                  <b>Type :</b> BIM MEP Models <br />
                  <b>Sector:</b> Industrail Building <br />
                  <b>Scope :</b> BIM MEP <br />
                  <b>Deliverables:</b> LOD 300 3D Revit MEP model of electrical
                  conduit, ductwork, hot and cold water piping, cable-tray, pipe
                  hangars, valves, equipement, and structural steel using laser
                  scan point clouds
                </p>
                <button
                  className="btn card_btn"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal10"
                >
                  See More
                </button>
              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="card">
              <div className="card_image">
                <img src={img12} />
              </div>
              <div className="card_content">
                <h2 className="card_title">West End Commercial</h2>
                <br />
                <p className="card_text">
                  <b> Project Over View:</b> AS-build 3D model of Exterior &
                  Roof of Commercial Building From laser scanned data. <br />
                  <b>Type :</b> Scan-To-BIM Models <br />
                  <b>Sector:</b> Commercial Building <br />
                  <b>Scope :</b> BIM Architecture <br />
                  <b>Deliverables:</b> LOD 400 3D Revit model with Accurate
                  Architectural Details in exterior.
                  <br />
                  <br />
                  <br />
                  <br />
                </p>
                <button
                  className="btn card_btn"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal11"
                >
                  See More
                </button>
              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="card">
              <div className="card_image">
                <img src={img13} />
              </div>
              <div className="card_content">
                <h2 className="card_title">Varick Shopping Mall</h2>
                <br />
                <p className="card_text">
                  <b>Project Over View:</b> AS-build 3D model of complete
                  Interior, Exterior & Roof of a Shopping Mall From laser
                  scanned data.
                  <br />
                  <b>Type :</b> Scan-To-BIM Models <br />
                  <b>Sector:</b> Commercial Building <br />
                  <b>Scope :</b> BIM Architecture <br />
                  <b>Deliverables:</b> LOD 400 3D Revit model with Accurate
                  Architectural Details.
                  <br />
                  <br />
                  <br />
                </p>
                <button
                  className="btn card_btn"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal12"
                >
                  See More
                </button>
              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="card">
              <div className="card_image">
                <img src={img14} />
              </div>
              <div className="card_content">
                <h2 className="card_title">329 Main St-Brooklyn NY.</h2>
                <br />
                <p className="card_text">
                  <b>Project Over View:</b> AS-build 3D model of complete
                  Interior, Exterior & Roof of a commerical Building From laser
                  scanned data. <br />
                  <b> Type :</b> Scan-To-BIM Models <br />
                  <b>Sector:</b> Commercial Building
                  <br />
                  <b> Scope :</b> BIM Architecture <br />
                  <b> Deliverables:</b> LOD 400 3D Revit model with precise
                  exterior details.
                </p>
                <button
                  className="btn card_btn"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal13"
                >
                  See More
                </button>
              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="card">
              <div className="card_image">
                <img src={img15} />
              </div>
              <div className="card_content">
                <h2 className="card_title">JJ Exterior Facade</h2>
                <br />
                <p className="card_text">
                  <b>Project Over View:</b> Exterior AS-build 3D model of JJ
                  Library Building From laser scanned data. <br />
                  <b>Type :</b> Scan-To-BIM Models
                  <br />
                  <b>Sector:</b> Public Building <br />
                  <b>Scope :</b> BIM Architecture <br />
                  <b>Deliverables:</b> LOD 400 3D Revit model with precise
                  exterior details.
                  <br />
                  <br />
                </p>
                <button
                  className="btn card_btn"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal14"
                >
                  See More
                </button>
              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="card">
              <div className="card_image">
                <img src={img16} />
              </div>
              <div className="card_content">
                <h2 className="card_title">Flushing Ave-Brooklyn NY.</h2>
                <br />
                <p className="card_text">
                  <b>Project Over View:</b> AS-build 3D model of complete
                  Interior, Exterior & Roof of a commerical Building From laser
                  scanned data. <br />
                  <b> Type :</b> Scan-To-BIM Models <br />
                  <b>Sector:</b> Commercial Building <br />
                  <b>Scope :</b> BIM Architecture <br />
                  <b>Deliverables:</b> LOD 400 3D Revit model with precise
                  exterior details.
                </p>
                <button
                  className="btn card_btn"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal15"
                >
                  See More
                </button>
              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="card">
              <div className="card_image">
                <img src={img17} />
              </div>
              <div className="card_content">
                <h2 className="card_title">6 Clark</h2>
                <br />
                <p className="card_text">
                  <b>Project Over View:</b> AS-build 3D model used for upgrade
                  and Renovation from 3D laser scanned Data and Photographs.{" "}
                  <br />
                  <b>Type :</b> Scan-To-BIM Models <br />
                  <b>Sector:</b> Residencial Building <br />
                  <b>Scope :</b> BIM Architecture <br />
                  <b>Deliverables:</b> LOD 300 3D Revit model with accurate
                  landscape.
                </p>
                <br />

                <button
                  className="btn card_btn"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal16"
                >
                  See More
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>

      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={img1}
            alt="img-1"
            style={{ width: "500px", height: "500px" }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal> */}

      {/* 
      <div className="container-fluid mt-5 mb-5">
   
      </div> */}

      {/* <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal> */}

      {/* <Model /> */}

      <MaterialLink href="https://wa.me/+971503384826" target="_blank">
        <IconButton
          size="large"
          className="bg-dark text-success"
          style={{ position: "fixed", bottom: 45, right: 40 }}
        >
          <WhatsApp />
        </IconButton>
      </MaterialLink>
      <Footer />
    </>
  );
};

export default Portfolio;
