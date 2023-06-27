import React from "react";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import Description from "../../Constants/ServiceBrief";
import { Card, CardContent, CardMedia } from "@mui/material";
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../../Adapters/firebase";
import { Carousel, Spinner } from "react-bootstrap";
// import { Projects } from "../Projects/Projects";[]
import { AllServiceList } from "../../Constants/AllServices";
import { Link } from "react-router-dom";
import { WhatsApp } from "@mui/icons-material";
import { IconButton, Link as MaterialLink } from "@mui/material";

type ImageProps = {
  path: string;
  className?: string;
};

export const Image = (props: ImageProps) => {
  const [image, setImage] = React.useState<string>("");
  const [loader, setLoader] = React.useState<boolean>(true);

  const getImage = React.useCallback(async () => {
    await getDownloadURL(ref(storage, props.path)).then((url) => {
      setImage(url);
      setTimeout(() => {
        setLoader(false);
      }, 500);
    });
  }, [setImage, props.path, setLoader]);

  React.useEffect(() => {
    getImage();
  }, [getImage]);

  return (
    <div className="container text-center">
      {loader ? (
        <Spinner animation="border" variant="primary" />
      ) : (
        <img
          src={image}
          alt=""
          className={`img-thumbnail border-0 ${props.className}`}
          loading="lazy"
        />
      )}
    </div>
  );
};

const Drawings = () => {
  const deviceWidth = window.innerWidth;

  const [index, setIndex] = React.useState<number>(1);

  React.useEffect(() => {
    if (index === 1) {
      setTimeout(() => {
        setIndex(2);
      }, 5000);
    } else if (index === 2) {
      setTimeout(() => {
        setIndex(3);
      }, 5000);
    } else if (index === 3) {
      setTimeout(() => {
        setIndex(4);
      }, 5000);
    }
    // else if (index === 4) {
    //   setTimeout(() => {
    //     setIndex(1);
    //   }, 5000);
    // }
  });

  return (
    <>
      {deviceWidth > 1200 ? (
        <div
          className="container-fluid m-0 p-0"
          style={{
            width: "100%",
            height: "100vh",
            backgroundImage: `url('/images/Drawings/${index}.png')`,
            backgroundPosition: "center center",
            backgroundSize: "100% 100%",
            zIndex: 999,
          }}
        >
          {index === 1 ? (
            <div
              className="container-fluid text-end pe-5"
              style={{
                position: "absolute",
                bottom: "30%",
                left: "0",
              }}
            >
              <h1 className="fw-bolder letter-spacing2 text-white text-uppercase">
                <span
                  style={{
                    background: "#2061abAA",
                    padding: ".75rem 1.5rem",
                  }}
                  data-aos="zoom-in"
                  data-aos-duration={2500}
                >
                  BIM Services
                </span>
              </h1>
            </div>
          ) : // <div className="container-fluid text-center p-0 h-100">
          //   <h4
          //     className="blueText fw-bold text-uppercase letter-spacing1 text-center pt-3 pb-3"
          //     style={{
          //       position: "absolute",
          //       top: "85%",
          //       left: "50%",
          //       borderBottom: "3px solid #2061ab",
          //       borderTop: "3px solid #2061ab",
          //     }}
          //     data-aos="zoom-in"
          //     data-aos-duration={1500}
          //   >
          //     CAD Services
          //   </h4>
          //   <h5
          //                             style={{
          //                                 position: 'absolute',
          //                                 top: '70%',
          //                                 width: '100%'
          //                             }}
          //                             data-aos="zoom-out"
          //                             data-aos-delay={1500}
          //                             data-aos-duration={1500}
          //                             className='text-dark fw-bold text-uppercase text-center d-block w-100'
          //                         >
          //                             The structural integration
          //                         </h5>
          // </div>
          index === 2 ? (
            <div
              className="conntainer-fluid text-end pe-5"
              style={{
                position: "absolute",
                bottom: "30%",
                left: "0",
              }}
            >
              <h2 className="fw-bolder letter-spacing2 text-white text-uppercase">
                <span
                  style={{
                    borderTop: "3px solid #2061AB",
                    borderBottom: "3px solid #2061AB",
                  }}
                  data-aos="fade-right"
                  data-aos-duration={1500}
                >
                  BIM Consultation
                </span>
              </h2>
            </div>
          ) : index === 3 ? (
            <div className="container-fluid h-100 p-0">
              <div
                className="w-50 h-100"
                style={{
                  position: "absolute",
                  left: 0,
                }}
              >
                <div
                  className="hv-center d-flex h-100"
                  style={{
                    width: "80%",
                  }}
                >
                  <h2
                    className="text-uppercase fw-bold letter-spacing2 blueText pb-2"
                    style={{
                      borderBottom: "3px solid #2061AB",
                    }}
                    data-aos="fade-right"
                    data-aos-duration={1500}
                  >
                    3D Visuals & Rendering Service
                  </h2>
                </div>
              </div>
              {/* <div
                className="w-50 h-100"
                style={{
                  position: "absolute",
                  left: "60%",
                }}
              >
                <div
                  className="hv-center d-flex h-100"
                  style={{
                    width: "80%",
                  }}
                >
                  <h2
                    className="text-uppercase fw-bold letter-spacing2 blueText pb-2"
                    style={{
                      borderBottom: "3px solid #2061AB",
                    }}
                    data-aos="fade-left"
                    data-aos-delay={1500}
                    data-aos-duration={1500}
                  >
                    Structural Modeling
                  </h2>
                </div>
              </div> */}
            </div>
          ) : (
            <div className="h-100 w-100">
              <h2
                className="text-uppercase blueText fw-bolder letter-spacing2 pt-3 pb-3"
                style={{
                  position: "absolute",
                  top: "55%",
                  right: "85%",
                  borderTop: "3px solid #2061AB",
                  borderBottom: "3px solid #2061AB",
                }}
                data-aos="fade-down"
                data-aos-duration={2500}
              >
                CAD Drafting Services
              </h2>
            </div>
          )}
        </div>
      ) : (
        <div className="container p-0 mt-5 mb-5">
          <Carousel fade>
            {[
              "Business Information Modeling",
              "Design Engineering",
              "Structural Modeling",
              "Detailed Architect Information",
            ].map((value, key) => {
              return (
                <Carousel.Item key={key} interval={3000}>
                  <img
                    src={`/images/Drawings/${key + 1}.png`}
                    alt=""
                    className="img-thumbnail border-0 p-0 rounded-0 bg-transparent"
                  />
                  <Carousel.Caption className="fw-bold blueText m-0">
                    <h6 className="m-0 p-0">
                      <span
                        className="p-1 pt-2 pb-2 text-white text-uppercase"
                        style={{
                          backgroundColor: "#2061AB99",
                          fontSize: ".95rem",
                        }}
                      >
                        {value}
                      </span>
                    </h6>
                  </Carousel.Caption>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
      )}
    </>
  );
};

export const Features = () => {
  return (
    <>
      <h2 className="text-center heading-text fw-bolder letter-spacing2 mt-5 pt-3">
        Why Choose NineFive BIM?
      </h2>
      <div className="features-section row mt-5 p-3 p-lg-5 pb-0">
        <img
          src={`/images/services/pc2.jpg`}
          alt=""
          className="border-0 p-0 rounded-0 bg-transparent"
          style={{ width: "100%", height: "100%" }}
        />
        <div>
          <h5 className="text-justify blueText mt-5">
            At NineFive BIM, we understand the complexities and challenges that
            come with outsourcing your architectural, engineering, and
            construction (AEC) projects. <br />
            <br />
            We strive to be your trusted partner in providing Building
            Information Modeling (BIM) services, revolutionizing the way you
            plan, design, construct, and manage your projects.
          </h5>
          <Link
            to="/about-us"
            className="blueText text-decoration-none btn btn-secondary"
            style={{
              backgroundColor: "white",
              marginTop: "25px",
              marginLeft: "40%",
            }}
          >
            Know More
          </Link>
        </div>
      </div>
    </>
  );
};

export const ServiceDescription = () => {
  const deviceWidth = window.innerWidth;
  return (
    <div className="row p-3 p-lg-5">
      <h2 className="text-center col-12 heading-text mb-5 fw-bolder letter-spacing2">
        What We Provide?
      </h2>
      {Description.map((data, key) => {
        return (
          <>
            {deviceWidth > 992 ? (
              <div
                className="mb-5 p-2"
                style={{ width: "20%" }}
                data-aos="zoom-in"
                data-aos-delay={300}
                key={key}
              >
                <Card className="h-100 shadow-lg card-filling">
                  <img
                    src={`/images/services/${data.image}`}
                    alt=""
                    className="img-thumbnail border-0 p-0 rounded-0 bg-transparent"
                  />
                  {/* <CardMedia>
                    <Image
                      data-aos="fade-right"
                      data-aos-delay={400}
                      path={`home/service/${data.image}`}
                      className="w-75 bg-transparent"
                    />
                  </CardMedia> */}
                  <CardContent data-aos="fade-right" data-aos-delay={700}>
                    <h6 className="text-center orangeText textBlue fw-bolder letter-spacing1 mb-0 mb-lg-2">
                      {data.name}
                    </h6>
                    <h6 className="text-justify blueText mt-3">
                      {data.description}
                    </h6>
                  </CardContent>
                </Card>
              </div>
            ) : (
              <div
                className="container mb-5 p-2"
                data-aos="zoom-in"
                data-aos-delay={300}
                key={key}
              >
                <Card className="h-100 shadow-lg card-filling">
                  {/* <CardMedia image="/public/images/services/bim-modeling.JPG" /> */}
                  {/* <Image
                      data-aos="fade-right"
                      data-aos-delay={400}
                      path={`home/service/${data.image}`}
                      className="w-75 bg-transparent"
                    /> */}
                  {/* </CardMedia> */}
                  <img
                    src={`/images/services/${data.image}`}
                    alt=""
                    className="img-thumbnail border-0 p-0 rounded-0 bg-transparent"
                  />
                  <CardContent data-aos="fade-right" data-aos-delay={700}>
                    <h6 className="text-center orangeText textBlue fw-bolder letter-spacing1 mb-2">
                      {data.name}
                    </h6>
                    <h6 className="text-justify blueText mt-3">
                      {data.description}
                    </h6>
                  </CardContent>
                </Card>
              </div>
            )}
          </>
        );
      })}
    </div>
  );
};

export const AllServices = () => {
  return (
    <div className="container-fluid mt-5 mb-5">
      <h2 className="text-center col-12 heading-text mt-5 mb-5 fw-bolder letter-spacing2">
        Our Services
      </h2>
      <div className="row" id="services_id">
        {AllServiceList.map((data, key) => {
          return (
            <Link
              to={data.link}
              className="col-lg-2 col-md-6   mb-4 text-decoration-none"
              // style={{ width: "20%" }}
              key={key}
              data-aos="zoom-in"
              data-aos-delay={100}
            >
              <div className="container text-center">
                <img
                  data-aos="fade-right"
                  data-aos-delay={400}
                  src={`images/ServiceIcons/${key}.svg`}
                  alt=""
                  className="img-thumbnail w-25 border-0 bg-transparent"
                />
                <h6
                  className="blueText fw-bold"
                  data-aos="fade-right"
                  data-aos-delay={800}
                >
                  {data.name}
                </h6>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export const DetailsBanner = () => {
  return (
    <div className="container-fluid details-section row p-3 p-lg-5 blueBG whiteText">
      <div>
        <h1 data-aos="zoom-in" data-aos-delay={100}>
          6+
        </h1>
        <h2>Years of experience</h2>
      </div>
      <div>
        <h1 data-aos="zoom-in" data-aos-delay={500}>
          700+
        </h1>
        <h2>Projects executed</h2>
      </div>
      <div>
        <h1 data-aos="zoom-in" data-aos-delay={900}>
          110,000+
        </h1>
        <h2>Sq. ft. area covered</h2>
      </div>
    </div>
  );
};

export const Home = () => {
  document.title = "NineFive BIM - Home";
  return (
    <>
      <Header />
      <Drawings />
      <Features />
      <ServiceDescription />
      <DetailsBanner />
      <AllServices />
      {/* <Projects /> */}
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
