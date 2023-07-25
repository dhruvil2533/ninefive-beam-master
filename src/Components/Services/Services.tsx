import React from "react";
import { Card, CardContent, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";
import Description from "../../Constants/ServiceBrief";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { WhatsApp } from "@mui/icons-material";
import { IconButton, Link as MaterialLink } from "@mui/material";
import ServiceData from "../../Constants/Services.json";

type MouseOverType = {
  mouseOver: boolean;
  key: number;
};

const DescriptionCard = () => {
  const deviceWidth = window.innerWidth;
  const [over, setOver] = React.useState<MouseOverType>({
    mouseOver: false,
    key: -1,
  });
  return (
    <>
      <div className="section_Padding"></div>

      <h2
        className="text-center blueText mb-5 fw-bolder letter-spacing2 "
        // style={{ marginTop: "7%" }}
      >
        Our Services
      </h2>
      <div className="container">
        <div className="row ">
          {Description.slice(0, 3).map(
            (
              data,
              key // Display the first three cards in the first row
            ) => (
              <div
                className="col-md-4 mb-5 " // Adjust the column sizes as per your preference
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
                  <CardContent data-aos="fade-right" data-aos-delay={500}>
                    <h6 className="text-center blueText textBlue fw-bolder letter-spacing1 mb-0 mb-lg-2">
                      {data.name}
                    </h6>
                    <h6 className="text-justify blueText mt-3">
                      {data.description}
                    </h6>
                    <br />
                    <br />
                    <Link
                      to={`/sub-service/0/${data.name}`}
                      className="text-white know-more-btn  text-decoration-none btn btn-secondary"
                    >
                      Know More
                    </Link>
                  </CardContent>
                  <br />
                  <br />
                </Card>
              </div>
            )
          )}
        </div>

        <div className="row  justify-content-center">
          {Description.slice(3).map(
            (
              data,
              key // Display the remaining two cards in the second row
            ) => (
              <div
                className="col-md-4 mb-5" // Adjust the column sizes as per your preference
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
                  <CardContent data-aos="fade-right" data-aos-delay={400}>
                    <h6 className="text-center blueText textBlue fw-bolder letter-spacing1 mb-2">
                      {data.name}
                    </h6>
                    <h6 className="text-justify blueText mt-3">
                      {data.description}
                    </h6>
                    <br />
                    <br />
                    <Link
                      to={`/sub-service/0/${data.name}`}
                      className="text-white know-more-btn  text-decoration-none btn btn-secondary"
                    >
                      Know More
                    </Link>
                  </CardContent>
                  <br />
                  <br />
                </Card>
              </div>
            )
          )}
        </div>
      </div>

      {/* <div className="container">
        <div className="card-container">
          {Description.map((data, key) => {
            return (
              <div key={key} className="cardall">
                <div className="blueBG05 p-3 h-100">
                  <img
                    src={`/images/services/${data.image}`}
                    className="img-thumbnail"
                    alt=""
                  />
                  <h6 className={`text-center fw-bold mt-5 text-white`}>
                    {data.name}
                  </h6>
                  <h6 className={`text-justify fw-bold mt-5 text-white`}>
                    {data.description}
                  </h6>
                  <Link
                    to={`/sub-service/0/${data.name}`}
                    className="text-white know-more-btn  text-decoration-none btn btn-secondary"
                  >
                    Know More
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div> */}
      {/* <div className="d-lg-flex" style={{ margin: "5% 0" }}>
        {Description.map((data, key) => {
          return (
            <div
              key={key}
              className="border border-light m-0 p-1"
              style={{
                width: deviceWidth > 992 ? "33%" : "100%",
              }}
            >
              <div className="blueBG05 p-3 h-100 ">
                <img
                  src={`/images/services/${data.image}`}
                  className="img-thumbnail"
                  alt=""
                  // data-aos="zoom-in"
                  // data-aos-delay={700}
                />
                <h6
                  className={`text-center fw-bold mt-5 text-white`}
                  // data-aos="fade-right"
                  // data-aos-delay={700}
                >
                  {data.name}
                </h6>
                <h6
                  className={`text-justify fw-bold mt-5 text-white`}
                  // data-aos="fade-right"
                  // data-aos-delay={700}
                >
                  {data.description}
                </h6>

                <Link
                  to={`/sub-service/0/${data.name}`}
                  className="text-white know-more-btn  text-decoration-none btn btn-secondary"
                >
                  Know More
                </Link>
              </div>
            </div>
          );
        })}
      </div> */}
      <Footer />
    </>
  );
};

export const Services = () => {
  document.title = "NineFive Bim - Services";
  return (
    <>
      <Header />
      {/* <div
        style={{
          height: "100vh",
        }}
      > */}
      <DescriptionCard />
      {/* </div> */}
      <MaterialLink href="https://wa.me/7016591928" target="_blank">
        <IconButton
          size="large"
          className="bg-dark text-success"
          style={{ position: "fixed", bottom: 45, right: 40 }}
        >
          <WhatsApp />
        </IconButton>
      </MaterialLink>
      {/* <Footer /> */}
    </>
  );
};
