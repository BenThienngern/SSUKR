/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/link-passhref */
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React, { Component } from "react";
import Navigation from ".//components/navigation";
import Footer from ".//components/footer";
import Notice from ".//components/notice";
import Link from "next/link";
import { Button, Row } from "@nextui-org/react";
import Script from "next/script";
class Index extends Component {
  state = {};
  render() {
    return (
      <div>
        <Head>
          <title>Support Ukrainian Students in the US</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {/* <Notice /> */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=UA-235348691-1"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-235348691-1');
        `}
        </Script>
        <Navigation />
        <div>
          <div className={styles.frontImage}>
            <Image
              src="/Vector.svg"
              alt="Cover Image"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div>
            <h2 className={styles.h2}>
              <span className={styles.h2span}>Our Mission</span>
              <p className={styles.minortext}>
                Witnessing one of our closest friends suddenly face financial
                struggles due to her father serving on the war's front lines
                inspired us to create a platform that helps Ukrainian students
                who face similar hardship recieve donations weekly to help
                support their cost of living.
              </p>
              <div>
                <Link href="/donate">
                  <Button
                    rounded
                    color="warning"
                    className={styles.classicButton}
                  >
                    <p className={styles.button}> Donate</p>
                  </Button>
                </Link>
              </div>
            </h2>
          </div>
        </div>

        <main className={styles.main}>
          <h1 className={styles.title}>Light Blue Stars Fund</h1>
          <hr size="7" width="60%" className={styles.mainhr} />
          <span className={styles.aboutMainCard}>
            <span className={styles.donateCards}>
              <span className={styles.verticalLine2} />
              <div className={styles.donateImage}>
                <h1 className={styles.regish1}>
                  A student-run nonprofit that aims to support Ukrainian
                  students in the US.
                </h1>
                <div className={styles.mainButton}>
                  <Link href="/about">
                    <Button rounded>
                      <p className={styles.Registerbutton}> More About Us</p>
                    </Button>
                  </Link>
                </div>
              </div>
              <div className={styles.donateText}>
                <div className={styles.mainSmallText}>
                  Our mission is to help Ukrainian students who are living in
                  the United States to feel less financially burdened by the
                  current war, during a time when they are feeling worried about
                  the well-being of family members back home and the
                  unpredictable future. We hope to use our platform to help
                  those in need, as much as we can.
                </div>
              </div>
            </span>
          </span>
        </main>
        <div className={styles.divDonate}>
          <span className={styles.mainExplainCard}>
            <h2 className={styles.mainWebGuide}>How does this website work?</h2>
            <text className={styles.textExplainCard}>
              We aim to provide weekly funds to support Ukrainian students
              studying in the US to support their cost of living which may be
              disrupted because of the war back in Ukraine. We take donations
              through Donor Box which will send money to our bank account
              (currently a private account due to some limitations). At the end
              of each week, we will divide the funds based on the number of
              users registered to receive support and transfer them out via
              Paypay or Venmo. For Ukrainian students who wish to receive the
              donations, they can fill out a form on the donate/receive page
              which will automatically send their educational institution an
              email to verify their need.
            </text>
          </span>
        </div>
        <main className={styles.mainOfNews}>
          <h1 className={styles.newsTitle}>News Surrounding the Issue</h1>
          <div className={styles.newsDes}>
            The ongoing war has a huge impact on Ukrainian students who are
            studying abroad here are a few article that highlight this issue
          </div>

          <span className={styles.mainNewsCard}>
            <span className={styles.newsText2}>
              <div style={{ borderRadius: "20px", overflow: "hidden" }}>
                <Image
                  src="/news2.svg"
                  alt="news2 Image"
                  width={400}
                  height={270}
                  objectFit="cover"
                />
              </div>
              <div className={styles.newsTitleText}>
                "Ukrainian students in the U.S. watch a war on their homeland
                unfold from abroad" NPR
              </div>
              <Row
                justify="center"
                style={{
                  marginTop: "15px",
                }}
              >
                <a
                  href="https://www.npr.org/2022/03/20/1087766118/ukrainian-students-us-colleges#:~:text=Some%201%2C700%20Ukrainians%20are%20studying,from%20thousands%20of%20miles%20away."
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <Button rounded className={styles.button} color="warning">
                    Read More
                  </Button>
                </a>
              </Row>
            </span>

            <span className={styles.newsText3}>
              <div style={{ borderRadius: "20px", overflow: "hidden" }}>
                <Image
                  src="/news3.svg"
                  alt="news Image"
                  width={400}
                  height={270}
                  objectFit="cover"
                />
              </div>
              <div className={styles.newsTitleText}>
                "Ukrainian students in the U.S. face emotional, financial
                hardships" Marketplace
              </div>
              <Row
                justify="center"
                style={{
                  marginTop: "15px",
                }}
              >
                <a
                  href="https://www.marketplace.org/2022/03/07/ukrainian-students-u-s-face-emotional-financial-hardships/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <Button rounded className={styles.button} color="warning">
                    Read More
                  </Button>
                </a>
              </Row>
            </span>
            <span className={styles.newsText1}>
              <div style={{ borderRadius: "20px", overflow: "hidden" }}>
                <Image
                  src="/news1.svg"
                  alt="news1 Image"
                  width={400}
                  height={270}
                  objectFit="cover"
                />
              </div>
              <div className={styles.newsTitleText}>
                "U.S. Colleges, and Their Russian and Ukrainian Students, Are
                Caught Up In a Crisis" TIME
              </div>
              <Row
                justify="center"
                style={{
                  marginTop: "15px",
                }}
              >
                <a
                  href="https://time.com/6154517/russian-ukrainian-college-students-u-s/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <Button rounded className={styles.button} color="warning">
                    Read More
                  </Button>
                </a>
              </Row>
            </span>
          </span>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Index;
