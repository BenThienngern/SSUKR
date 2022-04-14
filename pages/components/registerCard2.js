import { Card, Grid, Text, Divider, Button, Row } from "@nextui-org/react";
import styles from "../../styles/Home.module.css";
import Image from "next/image";
import { BsClockFill } from "react-icons/bs";
import Register from "./register";

export default function RegisterCard() {
  return (
    <Card className={styles.registeredCard}>
      {/* <Card.Header>
            <Text b>Card Title</Text>
          </Card.Header>
          <Divider /> */}
      <section className={styles.donateCards}>
        <div className={styles.registerText}>
          <h3>Recieve Donation</h3>
          <p className={styles.update}>
            <BsClockFill />
            <span className={styles.updateText}>
              Next Round of Donations: 11 Apr 2022
            </span>
          </p>
          <Text>
            Some quick example text to build on the card title and make up the
            bulk of the card content.
          </Text>
          <Row justify="flex-end">
            <Register />
          </Row>
        </div>
        <div className={styles.registerImage}>
          <Image
            src="/RegisterCard.svg"
            alt="Donate Image"
            width={500}
            height={226}
            objectFit="cover"
          />
        </div>
      </section>

      {/* <Divider />
          <Card.Footer>

          </Card.Footer> */}
    </Card>
  );
}
