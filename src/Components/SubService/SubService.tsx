// import { collection, getDocs, query, where } from "firebase/firestore";
import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { storage } from "../../Adapters/firebase";

import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { Accordion } from "react-bootstrap";
import ReactHtmlParser from "react-html-parser";
import { getDownloadURL, ref } from "firebase/storage";
// import { DesciplineList } from "../../Constants/DesciplineList";
// import { SoftwareList } from "../../Constants/SoftwareList";
// import { Tooltip } from "@mui/material";
import services from "../../Constants/Services.json";
// import ReactHtmlParser from "react-html-parser";
import img1 from "../SubService/top images/38.png";
import { useLayoutEffect } from "react";
// import NineFiveLogo from "../../Assets/Images/logo.png";
type ImageProps = {
  path: string;
};

const Image = (props: ImageProps) => {
  const [image, setImage] = React.useState<string>("");

  const getImage = React.useCallback(async () => {
    await getDownloadURL(ref(storage, props.path)).then((url) => {
      setImage(url);
    });
  }, [props.path]);

  React.useEffect(() => {
    getImage();
  }, [getImage]);

  return (
    <img src={image} alt="" className="img-thumbnail border-0 p-1 w-100" />
  );
};

type DescriptionType = {
  title: string;
  description: string;
  image?: string[];
  descipline?: number[];
  services?: string[];
  software?: number[];
  others?: string;
};

export const SubService = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  const { service, name } = useParams();
  const route = useLocation().pathname.replaceAll("%20", " ");
  const [loader, setLoader] = React.useState<boolean>(true);
  const [images, setImages] = React.useState<JSX.Element[]>();
  const [currentService, setCurrentService] = React.useState<number>(
    Number(service) + 1
  );
  const [description, setDescription] = React.useState<DescriptionType>({
    title: "",
    description: "",
    image: [],
    descipline: [],
    services: [],
    software: [],
    others: "",
  });

  React.useEffect(() => {
    // Find the index of the service whose `id` matches `currentService`
    const activeServiceIndex = services.findIndex(
      (obj) => obj.id === currentService
    );

    if (activeServiceIndex !== -1) {
      // Find the first sub-service of the active service
      const firstSubService = services[activeServiceIndex]?.subservice[0];

      if (firstSubService) {
        // Set description to the first sub-service's data
        setDescription({
          title: firstSubService.name,
          description: firstSubService.description,
        });
      }
    }

    // Hide loader
    setLoader(false);
  }, [currentService, services]);

  const getImages = React.useCallback(async () => {
    const array: JSX.Element[] = [];
    description.image?.forEach(async (value) => {
      array.push(<Image path={value} />);
    });
    await setImages(array);
  }, [description.image]);

  React.useEffect(() => {
    getImages();
  }, [getImages]);

  return (
    <>
      <Header />
      <img src={img1} alt="" />
      <div className="container-fluid mt-3 mb-3 p-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <Accordion defaultActiveKey={`${currentService}`}>
                {services.map((obj, key) => {
                  return (
                    <Accordion.Item
                      key={`${obj.id}`}
                      eventKey={`${obj.id}`}
                      // Add a condition to check if it's the current service
                    >
                      <Accordion.Header>
                        <h5 className="text-center drawerLargeFont fw-bold blueText">
                          {obj.name}
                        </h5>
                      </Accordion.Header>
                      <Accordion.Body className=" p-0">
                        <ul className="nav flex-column ">
                          {obj.subservice.map((value) => {
                            return (
                              <li
                                className={`
                            nav-item p-3 border border-start-0 border-end-0 
                            
                           ${
                             route === `/sub-service/${key}/${value.name}`
                               ? "blueBG"
                               : "whiteText"
                           }
                          `}
                                key={value.id}
                              >
                                <Link
                                  className={`
                              drawerSmallFont text-decoration-none
                              ${
                                route === `/sub-service/${key}/${value.name}`
                                  ? "whiteText"
                                  : "blueText"
                              }
                            `}
                                  onClick={() => {
                                    setCurrentService(obj.id);
                                    setDescription({
                                      title: value.name,
                                      description: value.description,
                                    });
                                  }}
                                  to={`/sub-service/${key}/${value.name}`}
                                >
                                  {value.name}
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
            </div>
            <div className="col-lg-8" style={{ backgroundColor: "#ebebeb" }}>
              <>
                <h4
                  className="blueText fw-bold mt-4 text-center text-shadow"
                  data-aos="zoom-in"
                  data-aos-delay={400}
                >
                  {description.title}
                </h4>
                <div className="container text-center w-50">
                  <hr />
                </div>

                <h5
                  className="blueText text-justify"
                  data-aos="fade-right"
                  data-aos-delay={400}
                >
                  {ReactHtmlParser(description.description)}
                </h5>

                {description.services && (
                  <div className="row h6 mt-5 mb-5 fw-bold blueText">
                    <h4
                      className="redText col-12 fw-bold mb-5 text-center"
                      data-aos="zoom-in"
                      data-aos-delay={400}
                    >
                      Services
                    </h4>
                    {description.services?.map((value, key) => {
                      return (
                        <div
                          className="col-lg-6 mb-3"
                          key={key}
                          data-aos="fade-right"
                          data-aos-delay={500}
                        >
                          - {value}
                        </div>
                      );
                    })}
                  </div>
                )}
                {/* {description.others && (
                  <div className="h5 text-justify mt-4">
                    {ReactHtmlParser(description.others)}
                  </div>
                )} */}
              </>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
