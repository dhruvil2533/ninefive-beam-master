import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { database, storage } from "../../Adapters/firebase";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { Accordion, Carousel, Spinner } from "react-bootstrap";
import ReactHtmlParser from "react-html-parser";
import { getDownloadURL, ref } from "firebase/storage";
import { DesciplineList } from "../../Constants/DesciplineList";
import SoftwareList from "../../Constants/SoftwareList";
import { Tooltip } from "@mui/material";
import { Padding, WhatsApp } from "@mui/icons-material";
import { IconButton, Link as MaterialLink } from "@mui/material";
import services from "../../Constants/Services.json";
import BIMServices from "../../Constants/BIMServices";
import BIMConsultation from "../../Constants/BIMConsultation";
import CADService from "../../Constants/CADServices";
import VisualServices from "../../Constants/3DVisualServices";
import ModelingServices from "../../Constants/3DModelingServices";
import img1 from "./sub_images/scan-to-bim.jpg";

export const SubService = () => {
  const { service, name } = useParams();
  const [bimService, setBimService] = useState(false);
  const [bimConsultation, setBimConsultation] = useState(false);
  const [cadService, setCadService] = useState(false);
  const [visualsService, setVisualsService] = useState(false);
  const [modelingService, setModelingService] = useState(false);
  // const string = `${name}`;
  // const regexPattern = /\s+/g;
  // const ans = string.replace(regexPattern, "");
  // const isBimService = true;

  if (name === "BIM Services" && !bimService) {
    setBimService(true);
  }
  if (name === "BIM Consultation" && !bimConsultation) {
    setBimConsultation(true);
  }
  if (name === "CAD Drafting Services" && !cadService) {
    setCadService(true);
  }
  if (name === "3D Visuals & Rendering Services" && !visualsService) {
    setVisualsService(true);
  }
  if (name === "3D modeling Services" && !modelingService) {
    setModelingService(true);
  }

  // css of discription
  const para = {
    fontSize: "15px",
  };

  return (
    <div className="container-fluid p-0">
      <Header />

      <div className="container mt-5 mb-5">
        <h4
          className="redText col-12 fw-bold mb-5 text-center display-5"
          data-aos="zoom-in"
          data-aos-delay={100}
        >
          {name}
        </h4>
        {bimService &&
          BIMServices.map((data, key) => {
            return (
              <div className="row sub_ser">
                <div className="col-6 text-center">
                  <img src={data.img} className="" alt="" />
                </div>
                <div
                  key={key}
                  className="col-6 container sub-services-container mt-2 mb-5"
                >
                  <div>
                    <h6
                      className={`text-start heading-text mt-5 mb-3 fw-bold letter-spacing2 display-6`}
                      data-aos="fade-right"
                      data-aos-delay={100}
                    >
                      {data.name}
                    </h6>
                    <p
                      style={para}
                      className={`text-start text-justify mt-2 lead`}
                      data-aos="fade-right"
                      data-aos-delay={100}
                    >
                      {data.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        {bimConsultation &&
          BIMConsultation.map((data, key) => {
            return (
              <div className="row sub_ser">
                <div className="col-6 text-center">
                  <img src={data.img} alt="" />
                </div>
                <div
                  key={key}
                  className="col-6 container sub-services-container mt-2 mb-5"
                >
                  <h6
                    className={`text-center heading-text mt-5 mb-3 fw-bold letter-spacing2 display-6`}
                    data-aos="fade-right"
                    data-aos-delay={100}
                  >
                    {data.name}
                  </h6>
                  <p
                    className={` text-start text-justify mt-5 lead`}
                    data-aos="fade-right"
                    data-aos-delay={100}
                  >
                    {data.description}
                  </p>
                </div>
              </div>
            );
          })}
        {cadService &&
          CADService.map((data, key) => {
            return (
              <div className="row sub_ser">
                <div className="col-6 text-center">
                  <img src={data.img} alt="" />
                </div>
                <div
                  key={key}
                  className="col-6 container sub-services-container mt-2 mb-5"
                >
                  <h6
                    className={`text-center heading-text mt-5 mb-3 fw-bold letter-spacing2 display-6`}
                    data-aos="fade-right"
                    data-aos-delay={100}
                  >
                    {data.name}
                  </h6>
                  <p
                    className={`text-start text-justify mt-5 lead`}
                    data-aos="fade-right"
                    data-aos-delay={100}
                  >
                    {data.description}
                  </p>
                </div>
              </div>
            );
          })}
        {visualsService &&
          VisualServices.map((data, key) => {
            return (
              // <div
              //   key={key}
              //   className="container sub-services-container mt-5 mb-5"
              // >
              //   <h6
              //     className={`text-center mt-5 mb-3 fw-bold letter-spacing2 display-6`}
              //     data-aos="fade-right"
              //     data-aos-delay={700}
              //   >
              //     {data.name}
              //   </h6>
              //   <h6
              //     className={`text-justify mt-5 lead`}
              //     data-aos="fade-right"
              //     data-aos-delay={700}
              //   >
              //     {data.description}
              //   </h6>
              // </div>
              <div className="row sub_ser">
                <div className="col-6 text-center">
                  <img src={data.img} alt="" />
                </div>
                <div
                  key={key}
                  className="col-6 container sub-services-container mt-2 mb-5"
                >
                  <h6
                    className={`text-center heading-text mt-5 mb-3 fw-bold letter-spacing2 display-6`}
                    data-aos="fade-right"
                    data-aos-delay={100}
                  >
                    {data.name}
                  </h6>
                  <p
                    className={`text-start text-justify mt-5 lead`}
                    data-aos="fade-right"
                    data-aos-delay={100}
                  >
                    {data.description}
                  </p>
                </div>
              </div>
            );
          })}
        {modelingService &&
          ModelingServices.map((data, key) => {
            return (
              // <div
              //   key={key}
              //   className="container sub-services-container mt-5 mb-5"
              // >
              //   <h6
              //     className={`text-center mt-5 mb-3 fw-bold letter-spacing2 display-6`}
              //     data-aos="fade-right"
              //     data-aos-delay={700}
              //   >
              //     {data.name}
              //   </h6>
              //   <h6
              //     className={`text-justify mt-5 lead`}
              //     data-aos="fade-right"
              //     data-aos-delay={700}
              //   >
              //     {data.description}
              //   </h6>
              // </div>
              <div className="row sub_ser">
                <div className="col-6 text-center">
                  <img src={data.img} alt="" />
                </div>
                <div
                  key={key}
                  className="col-6 container sub-services-container mt-2 mb-5"
                >
                  <h6
                    className={`text-center heading-text mt-5 mb-3 fw-bold letter-spacing2 display-6`}
                    data-aos="fade-right"
                    data-aos-delay={100}
                  >
                    {data.name}
                  </h6>
                  <p
                    className={`text-start text-justify mt-5 lead`}
                    data-aos="fade-right"
                    data-aos-delay={100}
                  >
                    {data.description}
                  </p>
                </div>
              </div>
            );
          })}
      </div>
      <div className="container-fluid mt-3 mb-3 p-0"></div>
      <MaterialLink href="https://wa.me/7016591928" target="_blank">
        <IconButton
          size="large"
          className="bg-dark text-success"
          style={{ position: "fixed", bottom: 40, right: 40 }}
        >
          <WhatsApp />
        </IconButton>
      </MaterialLink>
      <Footer />
    </div>
  );
};

// type ImageProps = {
//   path: string;
// };

// const Image = (props: ImageProps) => {
//   const [image, setImage] = React.useState<string>("");

//   const getImage = React.useCallback(async () => {
//     await getDownloadURL(ref(storage, props.path)).then((url) => {
//       setImage(url);
//     });
//   }, [props.path]);

//   React.useEffect(() => {
//     getImage();
//   }, [getImage]);

//   return (
//     <img src={image} alt="" className="img-thumbnail border-0 p-1 w-100" />
//   );
// };

// type DescriptionType = {
//   title: string;
//   description: string;
//   image?: string[];
//   descipline?: number[];
//   services?: string[];
//   software?: number[];
//   others?: string;
// };

// export const SubService = () => {
//   const { service, name } = useParams();
//   const route = useLocation().pathname.replaceAll("%20", " ");
//   const [loader, setLoader] = React.useState<boolean>(true);
//   const [images, setImages] = React.useState<JSX.Element[]>();
//   const [currentService, setCurrentService] = React.useState<number>(
//     Number(service) + 1
//   );
//   const [description, setDescription] = React.useState<DescriptionType>({
//     title: "",
//     description: "",
//     image: [],
//     descipline: [],
//     services: [],
//     software: [],
//     others: "",
//   });

//   const setData = React.useCallback(async () => {
//     const querySnapshot = await getDocs(
//       query(collection(database, "sub-services"), where("name", "==", name))
//     );
//     querySnapshot.forEach(async (obj) => {
//       setDescription(obj.data().description);
//     });
//     setLoader(false);
//   }, [name, setDescription]);

//   React.useEffect(() => {
//     setData();
//   }, [setData]);

//   const getImages = React.useCallback(async () => {
//     const array: JSX.Element[] = [];
//     description.image?.forEach(async (value) => {
//       array.push(<Image path={value} />);
//     });
//     await setImages(array);
//   }, [description.image]);

//   React.useEffect(() => {
//     getImages();
//   }, [getImages]);
//   return (
//     <>
//       <Header />
//       <div className="container-fluid mt-3 mb-3 p-0">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-4">
//               <Accordion defaultActiveKey={`${currentService}`}>
//                 {services.map((obj, key) => {
//                   return (
//                     <Accordion.Item key={`${obj.id}`} eventKey={`${obj.id}`}>
//                       <Accordion.Header>
//                         <h5 className="text-center drawerLargeFont fw-bold orangeText">
//                           {obj.name}
//                         </h5>
//                       </Accordion.Header>
//                       <Accordion.Body className="card p-0">
//                         <ul className="nav flex-column">
//                           {obj.subservice.map((value) => {
//                             return (
//                               <li
//                                 key={value}
//                                 className={`
//                                                                         nav-item p-3 border border-start-0 border-end-0
//                                                                         ${
//                                                                           route ===
//                                                                           `/sub-service/${key}/${value}`
//                                                                             ? "blueBG"
//                                                                             : "blueText"
//                                                                         }
//                                                                     `}
//                               >
//                                 <Link
//                                   className={`
//                                                                             drawerSmallFont text-decoration-none
//                                                                             ${
//                                                                               route ===
//                                                                               `/sub-service/${key}/${value}`
//                                                                                 ? "text-white"
//                                                                                 : "blueText"
//                                                                             }
//                                                                         `}
//                                   onClick={() => setCurrentService(obj.id)}
//                                   to={`/sub-service/${key}/${value}`}
//                                 >
//                                   {value}
//                                 </Link>
//                               </li>
//                             );
//                           })}
//                         </ul>
//                       </Accordion.Body>
//                     </Accordion.Item>
//                   );
//                 })}
//               </Accordion>
//             </div>
//             <div className="col-lg-8">
//               {/* {
//                     loader &&
//                     <div className='container text-center'>
//                         <Spinner variant="success" animation='border' style={{height: '10rem', width:'10rem'}} />
//                     </div>
//                     } */}
//               <>
//                 <div className="container text-center w-50"></div>
//                 <h5
//                   className="brownText text-justify"
//                   data-aos="fade-right"
//                   data-aos-delay={400}
//                 >
//                   {ReactHtmlParser(description.description)}
//                 </h5>
//                 <div className="container-fluid mt-5 text-center">
//                   <Carousel>
//                     {images?.map((value, key) => {
//                       return (
//                         <Carousel.Item key={key} interval={1000}>
//                           {value}
//                         </Carousel.Item>
//                       );
//                     })}
//                   </Carousel>
//                 </div>
//                 <div className="row h6 mt-5 fw-bold blueText">
//                   <h4
//                     className="redText col-12 fw-bold mb-5 text-center"
//                     data-aos="zoom-in"
//                     data-aos-delay={400}
//                   >
//                     Descipline
//                   </h4>
//                   {description.descipline?.map((value, key) => {
//                     return (
//                       <div
//                         className="col-lg-4 p-3"
//                         key={key}
//                         data-aos="fade-left"
//                         data-aos-delay={500}
//                       >
//                         <div className="row rounded border-0 shadow p-2">
//                           <div className="col-4">
//                             <img
//                               src={`/images/Descipline/${value}.svg`}
//                               alt=""
//                               className="img-thumbnail border-0"
//                             />
//                           </div>
//                           <div className="col-8 h-100 align-middle p-1">
//                             <div className="d-inline-block h-100"></div>
//                             <h6 className="fw-bold">
//                               {DesciplineList[value - 1]}
//                             </h6>
//                           </div>
//                         </div>
//                       </div>
//                     );
//                   })}
//                 </div>
//                 <div className="row h6 mt-5 fw-bold blueText">
//                   <h4
//                     className="redText col-12 fw-bold mb-5 text-center"
//                     data-aos="zoom-in"
//                     data-aos-delay={400}
//                   >
//                     Software
//                   </h4>
//                   {description.software?.map((value, key) => {
//                     return (
//                       <div
//                         className="col-lg-3 mb-3 p-3 text-center"
//                         key={key}
//                         data-aos="fade-right"
//                         data-aos-delay={500}
//                       >
//                         <div className="container">
//                           <Tooltip title={SoftwareList[value - 1]}>
//                             <img
//                               src={`/images/Softwares/${value}.svg`}
//                               alt=""
//                               className="img-thumbnail  shadow-lg w-100"
//                             />
//                           </Tooltip>
//                         </div>
//                       </div>
//                     );
//                   })}
//                 </div>
//                 {description.services && (
//                   <div className="row h6 mt-5 mb-5 fw-bold blueText">
//                     <h4
//                       className="redText col-12 fw-bold mb-5 text-center"
//                       data-aos="zoom-in"
//                       data-aos-delay={400}
//                     >
//                       Services
//                     </h4>
//                     {description.services?.map((value, key) => {
//                       return (
//                         <div
//                           className="col-lg-6 mb-3"
//                           key={key}
//                           data-aos="fade-right"
//                           data-aos-delay={500}
//                         >
//                           - {value}
//                         </div>
//                       );
//                     })}
//                   </div>
//                 )}
//                 {description.others && (
//                   <div className="h5 text-justify mt-4">
//                     {ReactHtmlParser(description.others)}
//                   </div>
//                 )}
//               </>
//             </div>
//           </div>
//         </div>
//       </div>
//       <MaterialLink href="https://wa.me/7016591928" target="_blank">
//         <IconButton
//           size="large"
//           className="bg-dark text-success"
//           style={{ position: "fixed", bottom: 400, right: 40 }}
//         >
//           <WhatsApp />
//         </IconButton>
//       </MaterialLink>
//       <Footer />
//     </>
//   );
// };
