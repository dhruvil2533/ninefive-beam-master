import { Slide } from "@mui/material";
import React from "react";
import { AdvisoryIcon } from "../../Assets/Icons/AdvisoryIcon";
import { BIMTrainingIcon } from "../../Assets/Icons/BIMTrainingIcon";
import { CollaborateIcon } from "../../Assets/Icons/CollaborateIcon";
import { ProjectTraining } from "../../Assets/Icons/ProjectTraining";
import { BIMConsulting } from "../../Constants/BIMConsulting";
import { Expertise } from "../../Constants/Expertise";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { WhatsApp } from "@mui/icons-material";
import { IconButton, Link as MaterialLink } from "@mui/material";

type ExpertiseCardProps = {
  name: string;
  description: string;
  index: number;
};

const ExpertiseCard = (props: ExpertiseCardProps) => {
  return (
    <div
      className="card p-2 border-0 h-100"
      data-aos="zoom-in"
      data-aos-delay={300}
    >
      <div className="container text-center p-2">
        {props.index === 0 ? (
          <AdvisoryIcon size={128} />
        ) : props.index === 1 ? (
          <BIMTrainingIcon size={128} />
        ) : (
          <ProjectTraining size={128} />
        )}
        <h4 className="text-center orangeText fw-bold">{props.name}</h4>
        <h6 className="text-center blueText">{props.description}</h6>
      </div>
    </div>
  );
};

export const BIM = () => {
  document.title = "NineFive BIM - BIM";
  const deviceWidth = window.innerWidth;

  const [index, setIndex] = React.useState<number>(0);
  const [show, setShow] = React.useState<boolean>(true);

  return (
    <>
      <Header />
      <div className="container">
        <div className="row p-2 mt-5 mb-5">
          <div className="col-md-4 mb-5">
            <div
              className="container text-center"
              data-aos="zoom-out"
              data-aos-delay={400}
            >
              <CollaborateIcon size={192} />
            </div>
          </div>
          <div className="col-lg-8 mb-5">
            <h3
              className="text-center orangeText mb-3 fw-bold"
              data-aos="zoom-out"
              data-aos-delay={600}
            >
              Experts Ready To Collaborate
            </h3>
            <h6 className="blueText" data-aos="fade-right" data-aos-delay={700}>
              Building Information Modeling is already here. But, all across the
              globe, companies are facing a great challenge trying to develop a
              strategy to implement BIM and maximize the benefits of building
              virtually. Many feel that it is almost impossible to switch from
              2D to BIM or to optimize their current BIM setup. At NineFive BIM,
              we are specialized in supporting companies in the building
              industry by offering a number of important elements that are
              necessary to develop the BIM strategy that suits your company.
            </h6>
          </div>
          {Expertise.map((doc, key) => {
            return (
              <div
                className={`
                                col-lg-4
                                ${
                                  key % 3 !== 2 && deviceWidth > 991
                                    ? "border-end"
                                    : ""
                                }
                                `}
                key={key}
              >
                <ExpertiseCard
                  index={key}
                  name={doc.name}
                  description={doc.description}
                />
              </div>
            );
          })}
        </div>
        <div className="container p-2 blueBG mt-5 mb-5">
          <h3
            className="text-center text-white mb-3 fw-bold pt-4 mb-4"
            data-aos="zoom-in"
            data-aos-delay={600}
          >
            The Way We Work
          </h3>
          <div className="row">
            <div className="col-lg-2"></div>
            <div className="col-lg-4">
              <ul className="list-group p-0">
                {BIMConsulting.map((value, key) => {
                  return (
                    <li
                      style={{ cursor: "pointer" }}
                      className={`
                                                h5 list-group-item border-0 mb-0 p-3 rounded-0
                                                ${
                                                  key ===
                                                  BIMConsulting.length - 1
                                                    ? ""
                                                    : "border-bottom border-light"
                                                }
                                                ${
                                                  key === index
                                                    ? "blueText"
                                                    : "blueBG text-white"
                                                }
                                            `}
                      onClick={() => {
                        setIndex(key);
                        setShow(false);
                        setTimeout(() => {
                          setShow(true);
                        }, 200);
                      }}
                    >
                      {value.name}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="col-lg-4 align-middle h-100">
              <div className="h-100 d-inline-block">
                <span></span>
              </div>
              <Slide direction="left" in={show} timeout={400}>
                <h5
                  className={`
                                text-white slow-transition
                                ${
                                  show
                                    ? "opacity-1 visible-1"
                                    : "opacity-0 visible-0"
                                }
                            `}
                >
                  {BIMConsulting[index]["description"]}
                </h5>
              </Slide>
            </div>
            <div className="col-lg-2"></div>
          </div>
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
    </>
  );
};
