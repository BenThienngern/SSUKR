import Navigation from ".//components/Navigation";
import Image from "next/image";
import Head from "next/head";
import Footer from ".//components/Footer";
import DonationCard from ".//components/registerCard";
import RegisterCard from ".//components/registerCard2";
import styles from "../styles/Home.module.css";

export default function Donate() {
  return (
    <div>
      <Head>
        <title>Donate to Ukrainian Students in the US</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
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
      <div className={styles.divDonate}>
        <span className={styles.aboutDonationCard}>
          <span className={styles.donateCards}>
            <span className={styles.verticalLine}></span>
            <div className={styles.donateImage}>
              <h1 className={styles.regish1}>
                Donation goes to support the cost of living for Ukrainian
                students studying abroad
              </h1>
            </div>
            <div className={styles.donateText}>
              <div className={styles.donateSmallText}>
                Thank you for your interest in applying to be an Admission
                Ambassador. Admission Ambassadors not only give tours to
                prospective families, but also play a significant role in the
                execution of admission events including Discover Webb Day,
                Revisit Day and other events as necessary throughout the school
                year. Thank you for your interest in applying to be an Admission
                Ambassador.
              </div>
            </div>
          </span>
        </span>
        <span className={styles.aboutRegisterCard}>
          <span className={styles.donateCards}>
            <span className={styles.verticalLine}></span>
            <div className={styles.donateImage}>
              <div className={styles.donateSmallText}>
                Thank you for your interest in applying to be an Admission
                Ambassador. Admission Ambassadors not only give tours to
                prospective families, but also play a significant role in the
                execution of admission events including Discover Webb Day,
                Revisit Day and other events as necessary throughout the school
                year. Thank you for your interest in applying to be an Admission
                Ambassador.
              </div>
            </div>
            <div className={styles.donateText}>
              <h1 className={styles.regish1}>
                Donation goes to support the cost of living for Ukrainian
                students studying abroad
              </h1>
            </div>
          </span>
        </span>
      </div>
      <Footer />
    </div>
  );
}