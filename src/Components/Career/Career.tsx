import React from "react";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

const Benefits = [
  "We also believe in the advantages of face to face interaction and collaboration, so curating an enticing office experience remains a priority for us. Our office is so much more than a place people go to work. Each of our offices has been built to draw people together, inspire to create, and foster community. It's more than a workplace. We invite all who enter to find a space that feels their own.",
  "Flexibility at NineFive BIM isn't new and all roles at NineFive BIM are flexible in one way or another. Before the pandemic, NineFive BIM embraced flexible work some of our employees were fully remote, while most in-office employees had flexible schedules.",
  "As we look to the future of work, we are increasing our existing flexibility. We believe that flexibility increases productivity and satisfaction, decreases our carbon footprint related to commuting, and enables us to attract and retain a more diverse and inclusive workforce.",
];

export const Career = () => {
  return (
    <>
      <Header />
      <div className="container-fluid mt-5 mb-5">
        <div className="container-fluid mt-3 mb-3 p-3 rounded-3">
          <h1 className="orangeText text-center fw-bold mt-3 mb-3">
            JOIN OUR TEAM
          </h1>
          <div className="container mt-4 mb-4 text-center">
            <img
              src="/images/team.svg"
              alt=""
              className="img-thumbnail border-0 w-75 bg-transparent"
            />
          </div>
          <div className="container orangeBG">
            <div className="row">
              {Benefits.map((value, key) => {
                return (
                  <div className="col-lg-4" key={key}>
                    <div
                      className={`
                                                card border-0 rounded-0 h-100 bg-transparent p-2
                                                ${
                                                  key % 3 === 2
                                                    ? "border-0"
                                                    : "border-end"
                                                }
                                            `}
                    >
                      <img
                        src={`/images/Career/${key + 1}.svg`}
                        alt=""
                        className="img-thumbnail bg-transparent p-0 border-0"
                      />
                      <h6 className="p-3 text-white">{value}</h6>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
