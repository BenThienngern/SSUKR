/* eslint-disable react/no-unescaped-entities */
import Navigation from ".//components/navigation";
import { Modal, Button } from "@nextui-org/react";
import Image from "next/image";
import Head from "next/head";
import { useState } from "react";
import Footer from ".//components/footer";
import DonationCard from ".//components/registerCard";
import RegisterCard from ".//components/registerCard2";
import styles from "../styles/Home.module.css";
import { BsFillExclamationCircleFill } from "react-icons/bs";

export default function Donate() {
  const [openNotice, setOpenNotice] = useState(true);

  return (
    <div>
      <Head>
        <title>Donate to Ukrainian Students in the US</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <Modal open={openNotice} width="470px">
        <Modal.Body style={{ height: "410px" }}>
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
                marginLeft: "120px",
                marginTop: "10px",
                fontFamily: "Helvetica",
                fontWeight: 550,
                fontSize: "20px",
              }}
            >
              Donation notice
            </div>
            <div style={{ margin: "10px" }}>
              This project is developed and run by high school students who
              truly wish to make a difference. However, due to our small scale,
              we are unable to get the tax exemption for nonprofit and an
              organization's bank accounts. Therefore, all the money donated
              will be transferred to a personal account that is solely created
              for the donation purpose. We will then donate all the money after
              tax and fees to Ukrainian students in need.
            </div>
            <div style={{ margin: "10px" }}>
              For more information please visit our updates/notices page
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button auto onClick={() => setOpenNotice(false)}>
            Understood
          </Button>
        </Modal.Footer>
      </Modal>
      <div className={styles.frontImageDonate}>
        <Image
          src="/DonateBack.svg"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className={styles.donateCardCover}>
        <DonationCard />
      </div>
      <div>
        <RegisterCard />
      </div>
      <div className={styles.divDonate2}>
        <span className={styles.aboutDonationCard}>
          <span className={styles.donateCardsReal2}>
            <span className={styles.verticalLine}></span>
            <div className={styles.donateImage}>
              <h1 className={styles.regish2}>
                Donation goes to support the cost of living for Ukrainian
                students studying abroad
              </h1>
            </div>
            <div className={styles.donateText2}>
              <div className={styles.donateSmallText}>
                On February 24, 2022, Russia invaded Ukraine as a result of a
                series of conflicts between Russia and Ukraine. This resulted in
                thousands of deaths and millions of displaced Ukrainian people.
                Ukrainian bank accounts were frozen and thousands of businesses
                went out. In the US, there are about 6,000 Ukrainian students,
                all of whom cannot withdraw any cash or use their credit/debit
                cards. Through our organization, these struggling students, our
                recipients, can receive enough cash to support them each week.
              </div>
            </div>
          </span>
        </span>
        <span className={styles.aboutRegisterCard}>
          <span className={styles.donateCardsReal2}>
            <span className={styles.verticalLine}></span>
            <div className={styles.donateImage}>
              <div className={styles.donateSmallText}>
                You can donate through our website through Donorbox which is
                linked to Paypal and Zelle. After you donate through Donorbox,
                the money is transferred to our personal business account.
                There, the money will be stored. But in order for Ukrainian
                students to receive the money, they will have to receive
                permission from their respective colleges and then they will be
                registered recipients in our organization. Every week, each
                registered recipient will receive no more than $100. In this
                way, those who are financially struggling in the US can have a
                stable source of funds during the crisis.
              </div>
            </div>
            <div className={styles.donateText}>
              <h1 className={styles.regish21}>
                With our small contributions we believe we can truly make an
                impact
              </h1>
            </div>
          </span>
        </span>
      </div>
      <Footer />
    </div>
  );
}
