import { Card, Grid, Text, Divider, Button, Row } from "@nextui-org/react";
import styles from "../../styles/Home.module.css";
import Image from "next/image";
import { BsClockFill } from "react-icons/bs";
import Register from "./register";

export default function RegisterCard() {
  return (
    <Card className={styles.registeredCard}>
      <section className={styles.donateCards}>
        <div className={styles.registerText}>
          <h3 className={styles.donateTextTitle}>Recieve Donation</h3>
          <p className={styles.update}>
            <BsClockFill />
            <span className={styles.updateText}>
              Last Round of Donations: Nov 2022
            </span>
          </p>
          <Text>
            If you are a Ukrainian student in the United States who may benefit
            from this donation please register to be a recipient. We will
            transfer the donation money to your Paypal/Venmo account weekly to
            help with your cost of living.
          </Text>
          <Row justify="center">
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
