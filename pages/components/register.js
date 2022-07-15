/* eslint-disable react/no-unescaped-entities */
import {
  Modal,
  Button,
  Text,
  Input,
  Row,
  Checkbox,
  useModal,
} from "@nextui-org/react";
import { useState } from "react";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import {
  BsCheckCircle,
  BsXCircle,
  BsFillExclamationCircleFill,
} from "react-icons/bs";
import emailjs from "emailjs-com";

export default function Register() {
  const { setVisible, bindings } = useModal();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [schoolname, setSchoolname] = useState("");
  const [gradYear, setGradYear] = useState("");
  const [schoolType, setSchoolType] = useState("");
  const [admsEmail, setAdmsEmail] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [paymentname, setPaymentname] = useState("");
  const [accept, setAccept] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openNotice, setOpenNotice] = useState(false);
  const [openFail, setOpenFail] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      firstname == "" ||
      lastname == "" ||
      email == "" ||
      schoolname == "" ||
      gradYear == "" ||
      schoolType == "" ||
      admsEmail == "" ||
      paymentMethod == "" ||
      paymentname == "" ||
      accept == false
    ) {
      alert("Please input information into all the fields");
    } else {
      console.log("Sending");
      var templateParams = {
        email: email,
        firstname: firstname,
        lastname: lastname,
        email: email,
        schoolname: schoolname,
        graduationYear: gradYear,
        schoolType: schoolType,
        schoolEmail: admsEmail,
        paymentMethod: paymentMethod,
        paymentName: paymentname,
      };
      emailjs
        .send(
          "service_fzbqtdm",
          "template_jc7ztfb",
          templateParams,
          "SyhUqyuRyVsHaHeA9"
        )
        .then(
          (result) => {
            emailjs.send(
              "service_fzbqtdm",
              "template_ktvhbzq",
              templateParams,
              "SyhUqyuRyVsHaHeA9"
            );
            console.log(result);
            setSubmitted(true);
            setFirstname("");
            setLastname("");
            setEmail("");
            setSchoolname("");
            setGradYear("");
            setSchoolType("");
            setAdmsEmail("");
            setPaymentMethod("");
            setPaymentname("");
            setAccept(false);
            setOpenSuccess(true);
            setVisible(false);
          },
          (error) => {
            console.log(error);
            setOpenFail(true);
          }
        );

      // let data = {
      //   firstname,
      //   lastname,
      //   email,
      //   schoolname,
      //   gradYear,
      //   schoolType,
      //   admsEmail,
      //   paymentMethod,
      //   paymentname,
      //   accept,
      // };
      // fetch("/api/contact", {
      //   method: "POST",
      //   headers: {
      //     Accept: "application/json, text/plain, */*",
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(data),
      // }).then((res) => {
      //   console.log("Response received");
      //   if (res.status === 200) {
      //     console.log("Response succeeded!");
      //     setSubmitted(true);
      //     setFirstname("");
      //     setLastname("");
      //     setEmail("");
      //     setSchoolname("");
      //     setGradYear("");
      //     setSchoolType("");
      //     setAdmsEmail("");
      //     setPaymentMethod("");
      //     setPaymentname("");
      //     setAccept(false);
      //     setOpenSuccess(true);
      //     setVisible(false);
      //   } else {
      //     setOpenFail(true);
      //   }
      // });
    }
  };

  return (
    <div
      style={{
        marginTop: "10px",
      }}
    >
      <Button rounded onClick={() => setVisible(true)}>
        <p className={styles.Registerbutton}> Register</p>
      </Button>
      <Modal open={openNotice} width="430px">
        <Modal.Body style={{ height: "330px" }}>
          <div className={styles.successCard}>
            <div
              style={{
                height: "4em",
                color: "rgba(255, 204, 0, 1)",
                marginTop: "10px",
              }}
            >
              <BsFillExclamationCircleFill size="1x" />
            </div>
            <div
              style={{
                marginLeft: "80px",
                marginTop: "10px",
                fontFamily: "Helvetica",
                fontWeight: 550,
                fontSize: "20px",
              }}
            >
              Terms and Conditions
            </div>
            <div style={{ margin: "10px" }}>
              This process may take up to a few days since the system is not
              automated. We reserve all rights to accept or reject users to
              receive donations. Fees and tax will be included in the amount
              transferred. If you wish to stop receiving donations or have any
              other question please email us at ssukr2022@gmail.com
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button auto onClick={() => setOpenNotice(false)}>
            Understood
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal
        scroll
        width="800px"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        {...bindings}
      >
        <Modal.Header>
          <Text size={22}>Register to recieve donation weekly</Text>
        </Modal.Header>
        <Modal.Body style={{ height: "800px" }}>
          <span
            className={styles.donateCards}
            // style={{ backgroundColor: "#000000", height: "200px" }}
          >
            <div className={styles.donateImageInDonate}>
              <Image
                src="/registerBox.svg"
                alt="Donate Image"
                width={400}
                height={800}
                objectFit="cover"
              />
            </div>
            <div className={styles.donateText} style={{ padding: "30px" }}>
              <div>
                By filling out this form, we will send a confirmation email to
                your email and a verification email to your administration to
                verify your need. We will reach back to you via email as soon as
                the onboarding is successful.
              </div>
              <form>
                <div>
                  <label>First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First name"
                    onChange={(e) => {
                      setFirstname(e.target.value);
                    }}
                  />
                  <label>Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last name"
                    onChange={(e) => {
                      setLastname(e.target.value);
                    }}
                  />
                  <label>Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="example@gmail.com"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                  <label>Educational Instution Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Educational Instution Name"
                    onChange={(e) => {
                      setSchoolname(e.target.value);
                    }}
                  />
                  <label>Graduation Year</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="2022"
                    onChange={(e) => {
                      setGradYear(e.target.value);
                    }}
                  />
                  <div>
                    <label>Educational Instution Type</label>
                    <select
                      className="form-control"
                      onChange={(e) => {
                        setSchoolType(e.target.value);
                      }}
                    >
                      <option>Please Select</option>
                      <option>Private High School</option>
                      <option>Public High School</option>
                      <option>Private College/University</option>
                      <option>Public College/University</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <label>
                    Educational Instution Contact Email to verify your need
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="example@school.org"
                    onChange={(e) => {
                      setAdmsEmail(e.target.value);
                    }}
                  />
                  <div>
                    <label>Method to Recieve Donation</label>
                    <select
                      className="form-control"
                      onChange={(e) => {
                        setPaymentMethod(e.target.value);
                      }}
                    >
                      <option>Please Select</option>
                      <option>Paypal</option>
                      <option>Venmo</option>
                    </select>
                  </div>
                  <label>Paypal/Venmo username</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="username"
                    onChange={(e) => {
                      setPaymentname(e.target.value);
                    }}
                  />
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                    onChange={() => {
                      setAccept(true);
                    }}
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    I understand the{" "}
                    <a style={{ color: "#084FFE" }} onClick={setOpenNotice}>
                      terms and conditions
                    </a>
                  </label>
                </div>
                <button
                  className="btn btn-secondary"
                  auto
                  flat
                  onClick={() => setVisible(false)}
                >
                  Cancel
                </button>
                <button
                  className="btn btn-primary"
                  type="submit"
                  onClick={(e) => {
                    handleSubmit(e);
                  }}
                >
                  Submit form
                </button>
              </form>
            </div>
          </span>

          {/* 
            <form className={styles.main}>
              <formGroup className={styles.inputGroup}>
                <label htmlFor="firstname">First Name</label>
                <input
                  type="text"
                  onChange={(e) => {
                    setFirstname(e.target.value);
                  }}
                  name="firstname"
                  className={styles.inputField}
                />
              </formGroup>
              <formGroup className={styles.inputGroup}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  name="email"
                  className={styles.inputField}
                />
              </formGroup>
              <formGroup className={styles.inputGroup}>
                <label htmlFor="message">Message</label>
                <input
                  type="text"
                  onChange={(e) => {
                    setAccept(e.target.value);
                  }}
                  name="message"
                  className={styles.inputField}
                />
              </formGroup>
            </form>
          </div> */}

          {/* <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Email"
            contentLeft={<Mail fill="currentColor" />}
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Password"
            contentLeft={<Password fill="currentColor" />}
          />
          <Row justify="space-between">
            <Checkbox>
              <Text size={14}>Remember me</Text>
            </Checkbox>
            <Text size={14}>Forgot password?</Text>
          </Row>
          */}
        </Modal.Body>
        {/* <Modal.Footer>
          <input
            type="submit"
            // onClick={(e) => {
            //   handleSubmit(e);
            // }}
          />
          {/* <Button auto flat color="error" onClick={() => setVisible(false)}>
            Close
          </Button>
          <Button auto onClick={() => setVisible(false)}>
            Agree
          </Button> 
        </Modal.Footer> */}
      </Modal>
      <Modal open={openSuccess} width="450px">
        <Modal.Body style={{ height: "320px" }}>
          <div className={styles.successCard}>
            <div style={{ height: "4em", color: "#61E651", marginTop: "10px" }}>
              <BsCheckCircle size="1x" />
            </div>
            <div
              style={{
                marginLeft: "160px",
                marginTop: "10px",
                fontFamily: "Helvetica",
                fontWeight: 550,
                fontSize: "20px",
              }}
            >
              Success
            </div>
            <div style={{ marginLeft: "10px" }}>
              Thank you for registering to recieve donation. We send a
              confirmation email to your email and a verification email to your
              school's email. As soon as we get a response from them we will
              proceed with proving you the weekly funds.
            </div>
            <div style={{ margin: "10px" }}>
              If you did not recieve the email, please try submmit again or
              email us at ssukr2022@gmail.com
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button auto onClick={() => setOpenSuccess(false)}>
            Done
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal open={openFail} width="450px">
        <Modal.Body style={{ height: "320px" }}>
          <div className={styles.successCard}>
            <div style={{ height: "4em", color: "#F63636", marginTop: "10px" }}>
              <BsXCircle size="1x" />
            </div>
            <div
              style={{
                marginLeft: "140px",
                marginTop: "10px",
                fontFamily: "Helvetica",
                fontWeight: 550,
                fontSize: "20px",
              }}
            >
              Unsuccessful
            </div>
            <div style={{ marginLeft: "10px" }}>
              Something went wrong. Please try again or contact us at
              ssukr2022@gmail.com
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button auto onClick={() => setOpenFail(false)}>
            Done
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
