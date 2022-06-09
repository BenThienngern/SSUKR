/* eslint-disable react/no-unescaped-entities */
import { Modal, Button } from "@nextui-org/react";
import { useState } from "react";
import styles from "../../styles/Home.module.css";
import { BsFillExclamationCircleFill, BsXCircle } from "react-icons/bs";

export default function Notice() {
  const [openNotice, setOpenNotice] = useState(true);

  return (
    <Modal open={openNotice} width="430px">
      <Modal.Body style={{ height: "270px" }}>
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
              marginLeft: "50px",
              marginTop: "10px",
              fontFamily: "Helvetica",
              fontWeight: 550,
              fontSize: "20px",
            }}
          >
            Website unavailible on mobile
          </div>
          <div style={{ margin: "10px" }}>
            Currently, this website is only available on laptop screens. Sorry
            for the inconvenience, we are working on a version that supports
            mobile.
          </div>
          <div style={{ margin: "10px" }}>
            For any question please email us at ssukr2022@gmail.com
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button auto onClick={() => setOpenNotice(false)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
