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

export const AboutUs = () => {
  document.title = "NineFive BIM - About Us";
  return (
    <div className="container-fluid p-0">
      <Header />
      <div
        className="container img-container mb-5 "
        data-aos="zoom-in"
        data-aos-delay={700}
        id="about_us"
      >
        <h1 className="text-bold text-center">NineFive BIM</h1>
        <h3 className="text-center">
          We have done projects across residential, commercial, industrial,
          institutional and other segments.
        </h3>
      </div>
      <div className="container mt-5 mb-5">
        <h5
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
        </h5>
        <h3
          className="text-center col-12 orangeText mt-5 mb-3 fw-bolder letter-spacing2"
          data-aos="zoom-in"
          data-aos-delay={300}
        >
          Who We Are?
        </h3>
        <h5
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
        </h5>
      </div>

      <div className="row">
        <div className="col-lg-3"></div>
        <div className="col-lg-3 p-2">
          <div className="container mt-3 mb-3 text-center">
            <img
              src="/images/icons/mission-icon.svg"
              alt=""
              className="img-thumbnail p-0 border-0 bg-transparent w-50"
            />
          </div>
          <h4 className="fw-bolder text-center orangeText mt-3 mb-3">
            Mission
          </h4>
          <h6 className="text-center blueText">
            We aim to maintain the highest standards of professionalism,
            integrity, high-quality client satisfaction, and technological
            know-how for our clients throughout the project-ideation process. We
            promise to establish a long-lasting working relationship built on
            trust and on-time delivery of products that will satisfy the client.
          </h6>
        </div>
        <div className="col-lg-3 p-2">
          <div className="container mt-3 mb-3 text-center">
            <img
              src="/images/icons/vision-icon.svg"
              alt=""
              className="img-thumbnail p-0 border-0 bg-transparent w-50"
            />
          </div>
          <h4 className="fw-bolder text-center orangeText mt-3 mb-3">Vision</h4>
          <h6 className="text-center blueText">
            Our vision is to be a leading global participant in the
            pre-construction industry by integrating cutting-edge and developing
            technology into our projects with our in-depth knowledge, effective
            teamwork, and communication to add value to what we produce.
          </h6>
        </div>
        <div className="col-lg-3"></div>
      </div>

      <div className="row p-3">
        <h2
          className="text-center col-12 blueText mt-5 mb-3 fw-bolder letter-spacing2 "
          data-aos="zoom-in"
          data-aos-delay={300}
        >
          Core Values
        </h2>
        <div className="col-lg-3 p-3">
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
              <h3 className="text-center orangeText textBlue fw-bold letter-spacing1 d-none d-lg-block mb-2">
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
              <h3 className="text-center orangeText textBlue fw-bold letter-spacing1 d-none d-lg-block mb-2">
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
              <h3 className="text-center orangeText textBlue fw-bold letter-spacing1 d-none d-lg-block mb-2">
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
              <h3 className="text-center orangeText textBlue fw-bold letter-spacing1 d-none d-lg-block mb-2">
                Teamwork
              </h3>

              <h6 className="text-justify text-center blueText mt-3">
                We achieve more when we collaborate and all work together.
              </h6>
            </CardContent>
          </Card>
        </div>
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
