import { Card, Grid, Text, Divider, Button, Row } from "@nextui-org/react";
import styles from "../../styles/Home.module.css";
import Image from "next/image";
import { BsClockFill } from "react-icons/bs";

export default function DonationCard() {
  return (
    <Card className={styles.donateCard}>
      {/* <Card.Header>
            <Text b>Card Title</Text>
          </Card.Header>
          <Divider /> */}
      <section className={styles.donateCards}>
        <div className={styles.donateImage}>
          <Image
            src="/DonateCard.svg"
            alt="Donate Image"
            width={464}
            height={226}
            objectFit="cover"
          />
        </div>
        <div className={styles.donateText}>
          <h3>Donate</h3>
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
            <Button rounded color="warning">
              <p className={styles.button}> Donate</p>
            </Button>
          </Row>
        </div>
      </section>

      {/* <Divider />
          <Card.Footer>

          </Card.Footer> */}
    </Card>
  );
}
