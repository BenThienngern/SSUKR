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
import { Mail } from "./Mail";
import { Password } from "./Password";
import styles from "../../styles/Home.module.css";

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
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sending");
    let data = {
      firstname,
      lastname,
      email,
      schoolname,
      gradYear,
      schoolType,
      admsEmail,
      paymentMethod,
      paymentname,
      message,
    };
    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("Response received");
      if (res.status === 200) {
        console.log("Response succeeded!");
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
        setMessage("");
      }
    });
  };

  return (
    <div>
      <Button rounded onClick={() => setVisible(true)}>
        <p className={styles.Registerbutton}> Register</p>
      </Button>
      <Modal
        scroll
        width="600px"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        {...bindings}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Modal with a lot of content
          </Text>
        </Modal.Header>
        <Modal.Body>
          <div className={styles.container}>
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
                    setMessage(e.target.value);
                  }}
                  name="message"
                  className={styles.inputField}
                />
              </formGroup>
            </form>
          </div>
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
        <Modal.Footer>
          <input
            type="submit"
            onClick={(e) => {
              handleSubmit(e);
            }}
          />
          {/* <Button auto flat color="error" onClick={() => setVisible(false)}>
            Close
          </Button>
          <Button auto onClick={() => setVisible(false)}>
            Agree
          </Button> */}
        </Modal.Footer>
      </Modal>
    </div>
  );
}
