import { Card, CardContent, CardMedia } from "@mui/material";
import React from "react";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { WhatsApp } from "@mui/icons-material";
import { IconButton, Link as MaterialLink } from "@mui/material";
import Accountability from "../../Assets/Images/Core Values/accountability.png";
import Integrity from "../../Assets/Images/Core Values/integrity.png";
import Respect from "../../Assets/Images/Core Values/respect.png";
import Teamwork from "../../Assets/Images/Core Values/teamwork.png";
import img0 from "../Portfolio/images2/portfolio-image1.jpg";
import Aboutcards from "../../Constants/aboutus";
export const AboutUs = () => {
  document.title = "NineFive BIM - About Us";
  return (
    <div className="container-fluid p-0">
      <Header />
      {/* <div
        className=" img-container mb-5 "
        data-aos="zoom-in"
        data-aos-delay={700}
        id="about_us"
      >
        <h1 className="text-bold text-center">NineFive BIM</h1>
        <h3 className="text-center">
          We have done projects across residential, commercial, industrial,
          institutional and other segments.
        </h3>
      </div> */}

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

          <h1 className="text-bold text-center">NineFive BIM</h1>

          <h3 className="text-center">(About Us)</h3>
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
      <div className="section_Padding"></div>
      <div className="container mt-5 mb-5">
        <h3 className="text-center col-12 blueText mt-5 mb-3 fw-bolder letter-spacing2">
          About Us
        </h3>
        <p
          className="text-justify blueText text-center"
          data-aos="fade-left"
          data-aos-delay={300}
        >
          NineFive BIM integrates & aligns with your design team to provide you
          solutions that enhances your efforts and helps you take informed
          decisions. <br />
          <br />
          To deliver the very best to clients, NineFive BIM believes that along
          with technology, enhancement of people skills is critical. Regular
          Training forms an integral part of work ethics.
        </p>
        <h3
          className="text-center col-12 blueText mt-5 mb-3 fw-bolder letter-spacing2"
          data-aos="zoom-in"
          data-aos-delay={300}
        >
          Who We Are?
        </h3>
        <p
          className="text-justify blueText"
          data-aos="fade-up-left"
          data-aos-delay={300}
        >
          NineFive BIM was established in January 2016 with the basic principle
          of Work ethics, Quality deliverance, and hustle-free outsourcing
          service-providing Company. With several years of experience in diverse
          companies, we understand the outsourcing requirements of clients,
          Arbaaz came up with a vision to make outsourcing more Reliable,
          Trustworthy and Hustle-free. Hence, by designing a smooth workflow and
          building a strong foundation, we deliver EXCELLENCE at NineFive BIM.
          With an Oath to serve the vision of Arbaaz, This Company will provide
          innovative outsourcing solutions to lead the industry with state of
          the art quality, on-time delivery, and affordable prices.
        </p>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-4 p-4">
            <div className="container mt-3 mb-3 text-center">
              <img
                src="/images/icons/mission-icon.svg"
                alt=""
                className="img-thumbnail p-0 border-0 bg-transparent w-50"
              />
            </div>
            <h4 className="fw-bolder text-center blueText mt-3 mb-3">
              Mission
            </h4>
            <p className=" blueText text-justify">
              We aim to maintain the highest standards of professionalism,
              integrity, high-quality client satisfaction, and technological
              know-how for our clients throughout the project-ideation process.
              We promise to establish a long-lasting working relationship built
              on trust and on-time delivery of products that will satisfy the
              client.
            </p>
          </div>
          <div className="col-lg-4 p-4">
            <div className="container mt-3 mb-3 text-center">
              <img
                src="/images/icons/vision-icon.svg"
                alt=""
                className="img-thumbnail p-0 border-0 bg-transparent w-50"
              />
            </div>
            <h4 className="fw-bolder text-center blueText mt-3 mb-3">Vision</h4>
            <p className=" blueText text-justify">
              Our vision is to be a leading global participant in the
              pre-construction industry by integrating cutting-edge and
              developing technology into our projects with our in-depth
              knowledge, effective teamwork, and communication to add value to
              what we produce.
            </p>
          </div>
          <div className="col-lg-2"></div>
        </div>
      </div>

      <div className="container p-3">
        <h3
          className="text-center col-12 blueText mt-5 mb-3 fw-bolder letter-spacing2 "
          data-aos="zoom-in"
          data-aos-delay={300}
        >
          Core Values
        </h3>

        <div className="container">
          <div className="row justify-content-center">
            {Aboutcards.map((data, key) => (
              <div
                className="col-12 col-md-6 col-lg-3 mb-4 p-2" // Adjust the column sizes as per your preference
                data-aos="zoom-in"
                data-aos-delay={key * 100} // Delay the animation for each card
                key={key}
              >
                <Card className="h-100 me-2 shadow-lg card-filling">
                  <img
                    src={`/images/services/${data.image}`}
                    alt=""
                    className="img-thumbnail border-0 p-0 rounded-0 bg-transparent"
                  />
                  <CardContent data-aos="fade-right" data-aos-delay={500}>
                    <h2 className="text-center blueText textBlue fw-bolder letter-spacing1 mb-2">
                      {data.name}
                    </h2>
                    <h6 className="text-justify blueText mt-3">
                      {data.description}
                    </h6>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* <div className="col-lg-3 p-3">
          <Card
            className="shadow"
            data-aos="zoom-out"
            data-aos-delay={400}
            style={{ height: "100%" }}
          >
            <CardContent>
              <img
                src={Accountability}
                height={"300px"}
                width={"100%"}
                alt=""
              />
              <h3 className="text-center blueText textBlue fw-bold letter-spacing1 d-none d-lg-block mb-2">
                Accountability
              </h3>

              <h6 className="text-justify text-center blueText mt-3">
                Each of us is responsible for our words, our actions, and our
                results.
              </h6>
            </CardContent>
          </Card>
        </div>
        <div className="col-lg-3 p-3">
          <Card
            className="shadow"
            data-aos="zoom-out"
            data-aos-delay={400}
            style={{ height: "100%" }}
          >
            <CardContent>
              <img src={Respect} height={"300px"} width={"100%"} alt="" />
              <h3 className="text-center blueText textBlue fw-bold letter-spacing1 d-none d-lg-block mb-2">
                Respect
              </h3>

              <h6 className="text-justify text-center blueText mt-3">
                We value everyone and treat people with dignity and
                professionalism.
              </h6>
            </CardContent>
          </Card>
        </div>
        <div className="col-lg-3 p-3">
          <Card
            className="shadow"
            data-aos="zoom-out"
            data-aos-delay={400}
            style={{ height: "100%" }}
          >
            <CardContent>
              <img src={Integrity} height={"300px"} width={"100%"} alt="" />
              <h3 className="text-center blueText textBlue fw-bold letter-spacing1 d-none d-lg-block mb-2">
                Integrity
              </h3>

              <h6 className="text-justify text-center blueText mt-3">
                We build trust through responsible actions and honest
                relationships.
              </h6>
            </CardContent>
          </Card>
        </div>
        <div className="col-lg-3 p-3">
          <Card
            className="shadow"
            data-aos="zoom-out"
            data-aos-delay={400}
            style={{ height: "100%" }}
          >
            <CardContent>
              <img src={Teamwork} height={"300px"} width={"100%"} alt="" />
              <h3 className="text-center blueText textBlue fw-bold letter-spacing1 d-none d-lg-block mb-2">
                Teamwork
              </h3>

              <h6 className="text-justify text-center blueText mt-3">
                We achieve more when we collaborate and all work together.
              </h6>
            </CardContent>
          </Card>
        </div> */}
      </div>
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
    </div>
  );
};
