import React from "react";
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
      <h2 className="text-center blueText mt-5 mb-5 fw-bolder letter-spacing2 ">
        Our Services
      </h2>
      <div className="d-lg-flex" style={{ margin: "5% 0" }}>
        {Description.map((data, key) => {
          return (
            <div
              key={key}
              className="border border-light m-0 p-1"
              style={{ width: deviceWidth > 992 ? "20%" : "100%" }}
            >
              <div className="blueBG05 random p-3 h-100">
                <img
                  src={`/images/services/${data.image}`}
                  className="img-thumbnail"
                  alt=""
                  data-aos="zoom-in"
                  data-aos-delay={700}
                />
                <h6
                  className={`text-center fw-bold mt-5 text-white`}
                  data-aos="fade-right"
                  data-aos-delay={700}
                >
                  {data.name}
                </h6>
                <h6
                  className={`text-justify fw-bold mt-5 text-white`}
                  data-aos="fade-right"
                  data-aos-delay={700}
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
      </div>
    </>
  );
};

export const Services = () => {
  document.title = "NineFive Bim - Services";
  return (
    <>
      <Header />
      <div
        style={{
          height: "100vh",
        }}
      >
        <DescriptionCard />
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
    </>
  );
};
