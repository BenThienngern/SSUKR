/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Navigation from ".//components/Navigation";
import Footer from ".//components/Footer";
import Head from "next/head";
import Image from "next/image";
import $ from "jquery";
import { Button, Row } from "@nextui-org/react";
import { useEffect } from "react";

export default function About() {
  // if (typeof window !== "undefined") {
  //   $(function () {
  //     $(window).on("scroll", function () {
  //       if ($(window).scrollTop() > 1) {
  //         $(".header").addClass("active");
  //       } else {
  //         $(".header").removeClass("active");
  //       }
  //     });
  //   });
  // }
  return (
    <div>
      <Head>
        <title>About Support Ukrainian Students in the US</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />

      {/* Dummy data */}
      <div
        style={{
          height: "400px",
        }}
      >
        <div className={styles.frontImage}>
          <Image
            src="/aboutPage.svg"
            alt="about Image"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <h1 className={styles.aboutTitle}>About Us</h1>
        <hr
          size="7"
          width="38%"
          style={{
            position: "absolute",
            top: "420px",
            left: "450px",

            opacity: "0.5",
          }}
        />
      </div>
      <div
        style={{
          height: "400px",
        }}
      >
        <div
          className="container px-4"
          style={{
            position: "absolute",
            top: "480px",
            left: "80px",
          }}
        >
          <div className="row gx-4 justify-content-center">
            <div className="col-lg-9">
              <p className={styles.aboutContent}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
        </div>
        <hr
          size="7"
          width="38%"
          style={{
            position: "absolute",
            top: "730px",
            left: "450px",

            opacity: "0.5",
          }}
        />
      </div>
      <div
        style={{
          height: "1270px",
          backgroundColor: "#000000",
          opacity: "0.1",
        }}
      >
        <span
          className={styles.aboutCard1}
          style={{
            top: "850px",
          }}
        ></span>
        <span
          className={styles.aboutCard1}
          style={{
            top: "1150px",
          }}
        ></span>{" "}
        <span
          className={styles.aboutCard1}
          style={{
            top: "1450px",
          }}
        ></span>
        <span
          className={styles.aboutCard1}
          style={{
            top: "1750px",
          }}
        ></span>
      </div>
      <main
        style={{
          height: "650px",
        }}
      >
        <h1 className={styles.newsTitle}>Meet Our Team</h1>
        <div className={styles.newsDes}>
          you for your interest in applying to be an Admission Ambassador.
          Admission Ambassadors not only give tours to prospective
        </div>

        <span className={styles.mainNewsCard}>
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
              Thank you for your interest in applying to be an Admission
              Ambassador. Admission Ambassadors not only give tours to
              prospective
            </div>
            <Row
              justify="center"
              style={{
                marginTop: "15px",
              }}
            >
              <a
                href="https://www.freecodecamp.org/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <Button rounded className={styles.button} color="warning">
                  More About Us
                </Button>
              </a>
            </Row>
          </span>
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
              Thank you for your interest in applying to be an Admission
              Ambassador. Admission Ambassadors not only give tours to
              prospective
            </div>
            <Row
              justify="center"
              style={{
                marginTop: "15px",
              }}
            >
              <a
                href="https://www.freecodecamp.org/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <Button rounded className={styles.button} color="warning">
                  More About Us
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
              Thank you for your interest in applying to be an Admission
              Ambassador. Admission Ambassadors not only give tours to
              prospective
            </div>
            <Row
              justify="center"
              style={{
                marginTop: "15px",
              }}
            >
              <a
                href="https://www.freecodecamp.org/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <Button rounded className={styles.button} color="warning">
                  More About Us
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