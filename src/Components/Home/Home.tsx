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
import img1 from "./images/ninefive1.jpg";
import img2 from "./images/ninefive2.jpg";
import img3 from "./images/ninefive3.jpg";
import img4 from "./images/ninefive4.jpg";
import ServiceData from "../../Constants/Services.json";
// import { useLayoutEffect } from "react";

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
  // useLayoutEffect(() => {
  //   window.scrollTo(0, 0);
  // });
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
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide carousel-fade mt-5"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <h2
              className="img_heading text-shadow"
              // style={{
              //   position: "absolute",
              //   bottom: "30%",
              //   left: "2%",
              //   color: "white",
              //   zIndex: " 1",
              //   fontWeight: "700",
              //   borderBottom: "3px solid white",
              //   borderTop: "3px solid white",
              // }}
            >
              Bim Services
            </h2>
            <img src={img1} className="d-block carousal_img  " alt="..." />
          </div>
          <div className="carousel-item">
            <h2
              className="img_heading text-shadow"
              // style={{
              //   position: "absolute",
              //   bottom: "30%",
              //   left: "2%",
              //   color: "white",
              //   zIndex: " 1",
              //   fontWeight: "700",
              //   borderBottom: "3px solid white",
              //   borderTop: "3px solid white",
              // }}
            >
              CAD Drafting Services
              {/* BIM Consultation */}
            </h2>
            <img src={img2} className="d-block carousal_img" alt="..." />
          </div>
          <div className="carousel-item">
            <h2
              className="img_heading text-shadow"
              // style={{
              //   position: "absolute",
              //   bottom: "30%",
              //   left: "2%",
              //   color: "white",
              //   zIndex: " 1",
              //   fontWeight: "700",
              //   borderBottom: "3px solid white",
              //   borderTop: "3px solid white",
              // }}
            >
              Reverse engineering <br />
              Scan-To-BIM services
              {/* 3D Visuals & Rendering Service */}
            </h2>
            <img src={img3} className="d-block carousal_img" alt="..." />
          </div>
          <div className="carousel-item">
            <h2
              className="img_heading text-shadow"
              // style={{
              //   position: "absolute",
              //   bottom: "30%",
              //   left: "2%",
              //   color: "white",
              //   zIndex: " 1",
              //   fontWeight: "700",
              //   borderBottom: "3px solid white",
              //   borderTop: "3px solid white",
              // }}
            >
              3D Visuals & Rendering <br /> Service
              {/* CAD Drafting Services */}
            </h2>
            <img src={img4} className="d-block carousal_img" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export const Features = () => {
  return (
    <>
      <h2 className="text-center heading-text fw-bolder letter-spacing2 mt-5 pt-3">
        Why Choose NineFive BIM?
      </h2>
      <div className="container">
        <div className="row justify-content-center choose_col">
          <div className="col text-centerm  m-auto">
            <img
              src={`/images/services/pc2.jpg`}
              alt=""
              className="  choose_img ms-4 mt-4"
            />
          </div>
          <div className="col text-start">
            <div>
              <p className=" blueText mt-5 fs-5">
                NineFive BIM was established in January 2016 with the basic
                principle of Work ethics, Quality deliverance, and hustle-free
                outsourcing service-providing Company. With several years of
                experience in diverse companies, we understand the outsourcing
                requirements of clients, Arbaaz came up with a vision to make
                outsourcing more Reliable, Trustworthy and Hustle-free. Hence,
                by designing a smooth workflow and building a strong foundation,
                we deliver EXCELLENCE at NineFive BIM. With an Oath to serve the
                vision of Arbaaz, This Company will provide innovative
                outsourcing solutions to lead the industry with state of the art
                quality, on-time delivery, and affordable prices.
                <br />
                <br /> At NineFive BIM, we understand the complexities and
                challenges that come with outsourcing your architectural,
                engineering, and construction (AEC) projects. <br />
                <br />
                {/* We strive to be your trusted partner in providing Building
                Information Modeling (BIM) services, revolutionizing the way you
                plan, design, construct, and manage your projects. */}
              </p>
              <br />

              <Link to="/about-us" className=" choose_btn text-decoration-none">
                Know More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* <h2 className="text-center heading-text fw-bolder letter-spacing2 mt-5 pt-3">
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
          <h5 className=" blueText mt-5">
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
      </div> */}
    </>
  );
};

export const ServiceDescription = () => {
  const deviceWidth = window.innerWidth;
  return (
    <div className="row p-3 p-lg-5 mt-5">
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
                  <div className="d-flex flex-column h-100">
                    <img
                      src={`/images/services/${data.image}`}
                      alt=""
                      className="img-thumbnail border-0 p-0 rounded-0 bg-transparent"
                    />
                    <CardContent
                      data-aos="fade-right"
                      data-aos-delay={500}
                      className="flex-grow-1 d-flex flex-column justify-content-between"
                    >
                      <div>
                        <h6 className="text-center blueText textBlue fw-bolder letter-spacing1 mb-0 mb-lg-2">
                          {data.name}
                        </h6>
                        <h6 className="text-justify blueText mt-3">
                          {data.description}
                        </h6>
                      </div>
                      <div>
                        <Link
                          to={`/sub-service/${key}/${ServiceData[key].subservice[0].description[1]}`}
                          className="text-white text-decoration-none btn btn-secondary"
                        >
                          Know More
                        </Link>
                      </div>
                    </CardContent>
                  </div>
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
                  <CardContent data-aos="fade-right" data-aos-delay={500}>
                    <h6 className="text-center blueText textBlue fw-bolder letter-spacing1 mb-2">
                      {data.name}
                    </h6>
                    <h6 className="text-justify blueText mt-3">
                      {data.description}
                    </h6>
                    <div>
                      <Link
                        to={`/sub-service/${key}/${ServiceData[key].subservice[0].description[1]}`}
                        className="text-white text-decoration-none btn btn-secondary"
                      >
                        Know More
                      </Link>
                    </div>
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
        Our Expertise
      </h2>
      <div className="row" id="services_id">
        {AllServiceList.map((data, key) => {
          return (
            <Link
              to={data.link}
              className="col-lg-2 col-md-6   mb-4 text-decoration-none "
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
