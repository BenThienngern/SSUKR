import Navigation from ".//components/navigation";
import Footer from ".//components/footer";
import LogTable from ".//components/table";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Head from "next/head";
import { BsClockFill } from "react-icons/bs";

export default function Log() {
  return (
    <div>
      <Head>
        <title>Activity Log</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <div className={styles.frontImage}>
        <Image
          src="/logpage.svg"
          alt="Log Page Image"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div>
        <h2 className={styles.h2}>
          <span className={styles.h2spanLog}>Transparency Notice</span>
          <p className={styles.minortext}>
            We are committed to make this website as transparent as possible and
            will show all proof of our financial activities. We will show proof
            of transactions and all onboarding activities on this page (updated
            weekly).
          </p>
        </h2>
      </div>
      <div className={styles.divDonateLog}>
        <span className={styles.mainLogCard}>
          {" "}
          <div
            style={{
              position: "absolute",
              margin: "30px",
              marginLeft: "30px",
              color: "#000000",
              fontFamily: "Helvetica",
              fontStyle: "normal",
              fontWeight: "500",
            }}
          >
            <h3>Limitations</h3>
          </div>
          <text
            style={{
              position: "absolute",
              fontSize: "20px",
              margin: "30px",
              marginLeft: "32px",
              marginTop: "71px",
              color: "#000000",
              fontFamily: "Helvetica",
              fontStyle: "normal",
              fontWeight: "500",
            }}
          >
            This whole project is founded by three high school students who
            simply want to make a difference. Due to this, we faced a lot of
            limitations in developing this project. We apologize for any
            unpleasant experience using the website. We will try our best to
            keep improving it as we gain more knowledge about management and
            development. Please read further into this section to learn more
            about our limitations as well as how we are keeping the whole
            process as transparent as possible despite the limitations we faced.
          </text>
        </span>
        <span className={styles.donateLogCard1}>
          <div
            style={{
              position: "absolute",
              margin: "30px",
              marginLeft: "30px",
              color: "#000000",
              fontFamily: "Helvetica",
              fontStyle: "normal",
              fontWeight: "500",
            }}
          >
            <h3>Tax and Fee</h3>
          </div>
          <text
            style={{
              position: "absolute",
              fontSize: "20px",
              margin: "30px",
              marginLeft: "32px",
              marginTop: "70px",
              color: "#000000",
              fontFamily: "Helvetica",
              fontStyle: "normal",
              fontWeight: "500",
            }}
          >
            Because we are currently very small, we are not able to get our
            project properly registered as a nonprofit organization that would
            grant us tax exemption and discounted fees on Paypal. However, we
            still want to help support the students in need as much as we can.
            Therefore, we can still receive donations and transfer them out just
            that we have to pay fees and taxes.
          </text>
        </span>
        <span className={styles.donateLogCard2}>
          <div
            style={{
              position: "absolute",
              margin: "30px",
              marginLeft: "30px",
              color: "#000000",
              fontFamily: "Helvetica",
              fontStyle: "normal",
              fontWeight: "500",
            }}
          >
            <h3>Not automated yet</h3>
          </div>
          <text
            style={{
              position: "absolute",
              fontSize: "20px",
              margin: "30px",
              marginLeft: "32px",
              marginTop: "70px",
              color: "#000000",
              fontFamily: "Helvetica",
              fontStyle: "normal",
              fontWeight: "500",
            }}
          >
            Due to the same limitations, we struggle to fully automate the
            transaction distribution, verification, and update information on
            the website. Therefore, all of these have to be done by hand which
            means all our processes including updating the information on this
            website may take up to a few days.
          </text>
        </span>
        <span className={styles.donateLogCard3}>
          {" "}
          <div
            style={{
              position: "absolute",
              margin: "30px",
              marginLeft: "30px",
              color: "#000000",
              fontFamily: "Helvetica",
              fontStyle: "normal",
              fontWeight: "500",
            }}
          >
            <h3>We are scaling</h3>
          </div>
          <text
            style={{
              position: "absolute",
              fontSize: "20px",
              margin: "30px",
              marginLeft: "32px",
              marginTop: "70px",
              color: "#000000",
              fontFamily: "Helvetica",
              fontStyle: "normal",
              fontWeight: "500",
            }}
          >
            This website is far from perfect due to the fact that we only have
            one developer working on it. We will continue to improve the website
            as we continue to scale this nonprofit project. Sorry for any
            inconvenience.
          </text>
        </span>
      </div>
      <div className={styles.table}>
        <p className={styles.update}>
          <BsClockFill />
          <span className={styles.updateText}>
            Last Update: 11 Apr 2022 11:57AM PST
          </span>
        </p>
        <LogTable />
      </div>
      <Footer />
    </div>
  );
}
