import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { addDoc, collection } from "firebase/firestore";
import React from "react";
import { database } from "../../Adapters/firebase";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

type ContactObject = {
  name: string;
  email: string;
  mobile: string;
  code: string | number;
  comments: string;
};

export const ContactUs = () => {
  document.title = "NineFive BIM - Contact Us";

  const [contactUsObject, setContactUsObject] = React.useState<ContactObject>({
    name: "",
    email: "",
    mobile: "",
    code: "",
    comments: "",
  });
  const [disabled, setDisabled] = React.useState<boolean>(false);

  const onSubmit = async () => {
    setDisabled(true);
    if (!/[ a-zA-Z]{3,30}/.test(contactUsObject.name)) {
      window.alert("Please provide valid full name");
    } else if (
      !/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i.test(
        contactUsObject.email
      )
    ) {
      window.alert("Please provide valid email address");
    } else if (contactUsObject.code === "") {
      window.alert("Please Select appropriate country code");
    } else if (!/[0-9]/.test(contactUsObject.mobile)) {
      window.alert("Please provide valid mobile number");
    } else {
      await addDoc(collection(database, "contactus"), contactUsObject).then(
        () => {
          setContactUsObject({
            name: "",
            email: "",
            mobile: "",
            code: "",
            comments: "",
          });
        }
      );
    }
    setDisabled(false);
  };

  return (
    <>
      <Header />
      <div className="container mt-5 mb-5 text-center">
        {/* <iframe
          className="w-100"
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d577.3279295903818!2d72.46996372797607!3d22.993527405931736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9a575b5e977b%3A0x8484baffec8c8490!2sAPPLEWOODS%20SORREL%2C%20Applewoods%20Twp%20Main%20Rd%2C%20Near%20Shantipura%20Cross%20Road%2C%20Ahmedabad%2C%20Gujarat%20380058!5e0!3m2!1sen!2sin!4v1641884502138!5m2!1sen!2sin"
          height="500"
          allowFullScreen
          loading="lazy"
        ></iframe> */}
      </div>
      <div className="container mt-5 mb-5 text-center p-3">
        <div className="row">
          <div className="col-lg-6 mb-3 justify-center d-flex flex-column p-4">
            <h4 className="blueText fw-bold">
              Give NineFive BIM a chance to help you
            </h4>
            <div className="border-start-orange shadow p-4 mt-3 mb-3 w-100">
              <h5 className="blueText">
                <br />
                Ahmedabad, Gujarat - 380 058
              </h5>
            </div>
            <div className="border-start-orange shadow p-4 mt-3 mb-3 w-100">
              <a href="tel:917016591928" className="text-decoration-none">
                <h5 className="blueText fw-bold letter-spacing2">
                  (+91) 70165 91928
                </h5>
              </a>
            </div>
            <div className="border-start-orange shadow p-4 mt-3 mb-3 w-100">
              <a
                href="mailto:ab@ninefivebim.com"
                className="text-decoration-none"
              >
                <h5 className="blueText fw-bold letter-spacing2">
                  ab@ninefivebim.com
                </h5>
              </a>
            </div>
          </div>
          <div className="col-lg-6 mb-3 justify-center d-flex flex-column p-4">
            <h2 className="text-center blueText fw-bolder mb-5">
              Enquire About
            </h2>
            <TextField
              variant="outlined"
              type="text"
              value={contactUsObject.name}
              label="Full Name*"
              placeholder="Please Enter Your Full Name"
              className="w-100 mt-2 mb-2"
              onChange={(e) => {
                setContactUsObject({
                  ...contactUsObject,
                  name: e.target.value,
                });
              }}
            />
            <TextField
              variant="outlined"
              label="Email*"
              value={contactUsObject.email}
              color="primary"
              type="email"
              placeholder="someone@provider.com"
              className="w-100 mt-2 mb-2"
              onChange={(e) => {
                setContactUsObject({
                  ...contactUsObject,
                  email: e.target.value,
                });
              }}
            />
            <div className="row mt-2 mb-2">
              <div className="col-3">
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Code</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="code"
                    className="w-100"
                    value={contactUsObject.code}
                    onChange={(e) => {
                      setContactUsObject({
                        ...contactUsObject,
                        code: Number(e.target.value),
                      });
                    }}
                  >
                    <MenuItem value="">Select code</MenuItem>
                    <MenuItem value={91}>+91</MenuItem>
                    <MenuItem value={1}>+1</MenuItem>
                    <MenuItem value={971}>+971</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className="col-9">
                <TextField
                  variant="outlined"
                  label="Mobile*"
                  type="type"
                  value={contactUsObject.mobile}
                  placeholder="Valid Mobile number"
                  className="w-100"
                  onChange={(e) => {
                    setContactUsObject({
                      ...contactUsObject,
                      mobile: e.target.value,
                    });
                  }}
                />
              </div>
            </div>
            <TextField
              variant="outlined"
              label="Comments"
              multiline
              value={contactUsObject.comments}
              type="text"
              placeholder="Your input would be valuable for us"
              className="w-100 mt-2 mb-2"
              onChange={(e) => {
                setContactUsObject({
                  ...contactUsObject,
                  comments: e.target.value,
                });
              }}
            />
            <div className="container text-center w-50 mt-3 mb-3">
              <button
                className={`
                        form-control btn-primary blueBG
                    `}
                onClick={onSubmit}
                disabled={disabled}
              >
                Send Query
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
