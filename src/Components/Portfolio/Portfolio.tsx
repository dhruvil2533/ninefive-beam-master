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
// import Modal from "react-bootstrap/Modal";
// import Button from "react-bootstrap/Button";
import projectsData from "../../Constants/projectsData";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Model from "../../Constants/Model";
// import Model from "../../Constants/Model";
import "./port.css";
// import "./images1";

const Portfolio = () => {
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
        <div
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
        </div>

        <div className="container-fluid text-center mt-5 mb-5">
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
        </div>
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
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                      Modal title
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                  </div>
                  <div className="modal-body">
                    <div className="card_image">
                      <img src={img2} />
                    </div>
                    <div className="card_content img " style={{ zIndex: "2" }}>
                      <h2 className="card_title">
                        Heritage church Facade model
                      </h2>
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
                        <b>Deliverables:</b> LOD 500 As-build Achitectural model
                        with surrounding building blocks.
                        <br />
                        <br />
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
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                      Modal title
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                  </div>
                  <div className="modal-body">
                    <div className="card_image">
                      <img src={img3} />
                    </div>
                    <div className="card_content img " style={{ zIndex: "2" }}>
                      <h2 className="card_title">Heritage church</h2>
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
                        <b>Deliverables:</b> LOD 500 As-build Achitectural model
                        with surrounding building blocks.
                        <br />
                        <br />
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
              id="exampleModal3"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                      Modal title
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                  </div>
                  <div className="modal-body">
                    <div className="card_image">
                      <img src={img4} />
                    </div>
                    <div className="card_content img " style={{ zIndex: "2" }}>
                      <h2 className="card_title">Heritage church</h2>
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
                        <b>Deliverables:</b> LOD 500 As-build Achitectural model
                        with surrounding building blocks.
                        <br />
                        <br />
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
              id="exampleModal4"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                      Modal title
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                  </div>
                  <div className="modal-body">
                    <div className="card_image">
                      <img src={img5} />
                    </div>
                    <div className="card_content img " style={{ zIndex: "2" }}>
                      <h2 className="card_title">Heritage church</h2>
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
                        <b>Deliverables:</b> LOD 500 As-build Achitectural model
                        with surrounding building blocks.
                        <br />
                        <br />
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
              id="exampleModal5"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                      Modal title
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                  </div>
                  <div className="modal-body">
                    <div className="card_image">
                      <img src={img6} />
                    </div>
                    <div className="card_content img " style={{ zIndex: "2" }}>
                      <h2 className="card_title">Heritage church</h2>
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
                        <b>Deliverables:</b> LOD 500 As-build Achitectural model
                        with surrounding building blocks.
                        <br />
                        <br />
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
              id="exampleModal6"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                      Modal title
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                  </div>
                  <div className="modal-body">
                    <div className="card_image">
                      <img src={img7} />
                    </div>
                    <div className="card_content img " style={{ zIndex: "2" }}>
                      <h2 className="card_title">Heritage church</h2>
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
                        <b>Deliverables:</b> LOD 500 As-build Achitectural model
                        with surrounding building blocks.
                        <br />
                        <br />
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
              id="exampleModal7"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                      Modal title
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                  </div>
                  <div className="modal-body">
                    <div className="card_image">
                      <img src={img8} />
                    </div>
                    <div className="card_content img " style={{ zIndex: "2" }}>
                      <h2 className="card_title">Heritage church</h2>
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
                        <b>Deliverables:</b> LOD 500 As-build Achitectural model
                        with surrounding building blocks.
                        <br />
                        <br />
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
              id="exampleModal8"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                      Modal title
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                  </div>
                  <div className="modal-body">
                    <div className="card_image">
                      <img src={img9} />
                    </div>
                    <div className="card_content img " style={{ zIndex: "2" }}>
                      <h2 className="card_title">Heritage church</h2>
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
                        <b>Deliverables:</b> LOD 500 As-build Achitectural model
                        with surrounding building blocks.
                        <br />
                        <br />
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
              id="exampleModal9"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                      Modal title
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                  </div>
                  <div className="modal-body">
                    <div className="card_image">
                      <img src={img10} />
                    </div>
                    <div className="card_content img " style={{ zIndex: "2" }}>
                      <h2 className="card_title">Heritage church</h2>
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
                        <b>Deliverables:</b> LOD 500 As-build Achitectural model
                        with surrounding building blocks.
                        <br />
                        <br />
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
              id="exampleModal10"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                      Modal title
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                  </div>
                  <div className="modal-body">
                    <div className="card_image">
                      <img src={img11} />
                    </div>
                    <div className="card_content img " style={{ zIndex: "2" }}>
                      <h2 className="card_title">Heritage church</h2>
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
                        <b>Deliverables:</b> LOD 500 As-build Achitectural model
                        with surrounding building blocks.
                        <br />
                        <br />
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
              id="exampleModal11"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                      Modal title
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                  </div>
                  <div className="modal-body">
                    <div className="card_image">
                      <img src={img12} />
                    </div>
                    <div className="card_content img " style={{ zIndex: "2" }}>
                      <h2 className="card_title">Heritage church</h2>
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
                        <b>Deliverables:</b> LOD 500 As-build Achitectural model
                        with surrounding building blocks.
                        <br />
                        <br />
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
              id="exampleModal12"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                      Modal title
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                  </div>
                  <div className="modal-body">
                    <div className="card_image">
                      <img src={img13} />
                    </div>
                    <div className="card_content img " style={{ zIndex: "2" }}>
                      <h2 className="card_title">Heritage church</h2>
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
                        <b>Deliverables:</b> LOD 500 As-build Achitectural model
                        with surrounding building blocks.
                        <br />
                        <br />
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
              id="exampleModal13"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                      Modal title
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                  </div>
                  <div className="modal-body">
                    <div className="card_image">
                      <img src={img14} />
                    </div>
                    <div className="card_content img " style={{ zIndex: "2" }}>
                      <h2 className="card_title">Heritage church</h2>
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
                        <b>Deliverables:</b> LOD 500 As-build Achitectural model
                        with surrounding building blocks.
                        <br />
                        <br />
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
              id="exampleModal14"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                      Modal title
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                  </div>
                  <div className="modal-body">
                    <div className="card_image">
                      <img src={img15} />
                    </div>
                    <div className="card_content img " style={{ zIndex: "2" }}>
                      <h2 className="card_title">Heritage church</h2>
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
                        <b>Deliverables:</b> LOD 500 As-build Achitectural model
                        with surrounding building blocks.
                        <br />
                        <br />
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
              id="exampleModal15"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                      Modal title
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                  </div>
                  <div className="modal-body">
                    <div className="card_image">
                      <img src={img16} />
                    </div>
                    <div className="card_content img " style={{ zIndex: "2" }}>
                      <h2 className="card_title">Heritage church</h2>
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
                        <b>Deliverables:</b> LOD 500 As-build Achitectural model
                        with surrounding building blocks.
                        <br />
                        <br />
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
              id="exampleModal16"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                      Modal title
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                  </div>
                  <div className="modal-body">
                    <div className="card_image">
                      <img src={img17} />
                    </div>
                    <div className="card_content img " style={{ zIndex: "2" }}>
                      <h2 className="card_title">Heritage church</h2>
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
                        <b>Deliverables:</b> LOD 500 As-build Achitectural model
                        with surrounding building blocks.
                        <br />
                        <br />
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
          </>

          <li className="cards_item">
            <div className="card ">
              <div className="card_image">
                <img src={img2} />
              </div>
              <div className="card_content img " style={{ zIndex: "2" }}>
                <h2 className="card_title">Heritage church Facade model</h2>
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
                  <br />
                  <br />
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
                <h2 className="card_title">City Hall Model</h2> <br />
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
                  <br />
                  <br />
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
                <h2 className="card_title">3D Dome Model</h2>
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
                  <br />
                  <br />
                  <br />
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
                  quantity and Material take off. <br /> <br />
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
                  <br />
                  <br />
                  <br />
                </p>

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
                <h2 className="card_title">School Model</h2>
                <br />
                <p className="card_text">
                  <b>Project Over View:</b> 3D model of the School is to manage
                  the design, construction and renovation of school facilities
                  in New York City. <br />
                  <b>Type :</b> BIM Models <br />
                  <b>Sector:</b> Public Building <br />
                  <b>Scope:</b> BIM Architecture <br />
                  <b>Deliverables:</b>LOD 400 BIM Architectural Model
                  <br />
                  <br />
                  <br />
                </p>
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
                  <br />
                  <br />
                  <br />
                  <br />
                </p>
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
                  <br />
                  <br />
                  <br />
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
                <h2 className="card_title">JJ Exterior Facade Model</h2>
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

      <MaterialLink href="https://wa.me/7016591928" target="_blank">
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
