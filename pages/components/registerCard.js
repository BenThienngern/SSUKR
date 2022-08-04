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
      <section className={styles.donateCardsReal}>
        <div className={styles.donateImageInDonate}>
          <Image
            src="/DonateCard.svg"
            alt="Donate Image"
            width={464}
            height={226}
            objectFit="cover"
          />
        </div>
        <div className={styles.donateText1}>
          <h3 className={styles.donateTextTitle}>Donate</h3>
          <p className={styles.update}>
            <BsClockFill />
            <span className={styles.updateText}>
              Next Round of Donations: 15 Aug 2022
            </span>
          </p>
          <Text>
            Donate to help Ukrainian student studying abroad in the US who face
            financial hardships due to the war back in Ukraine. Each week we
            will divide the funds and send to those who registered to recieve
            it. We hope that this small contribution can truly impact their
            lives in these tough times.
          </Text>
          <Row justify="flex-end">
            <script
              type="text/javascript"
              defer
              src="https://donorbox.org/install-popup-button.js"
            ></script>
            <a
              className="dbox-donation-button"
              style={{ textDecoration: "none" }}
              href="https://donorbox.org/support-ukrainian-students-in-the-us"
            >
              <Button rounded color="warning" className={styles.DBbutton}>
                <p className={styles.button}> Donate</p>
              </Button>
            </a>
          </Row>
        </div>
      </section>

      {/* <Divider />
          <Card.Footer>

          </Card.Footer> */}
    </Card>
  );
}
