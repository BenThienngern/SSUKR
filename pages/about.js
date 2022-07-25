/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Navigation from ".//components/navigation";
import Footer from ".//components/footer";
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";

export default function About() {
  return (
    <div>
      <Head>
        <title>About Support Ukrainian Students in the US</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
      </div>
      <div className={styles.divWhite}>
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
                Founded in March 2022, “Support Ukrainian Students in the US” is
                an organization based in California that aims to provide
                Ukrainian students in the US with financial aid for their living
                needs in the light of the war in Ukraine. Through taking
                donations from the public, aid is provided to students in the
                form of weekly payments.
              </p>
            </div>
          </div>
        </div>
        <hr
          size="7"
          style={{
            position: "absolute",
            top: "730px",
            left: "450px",
            width: "38%",
            opacity: "0.5",
          }}
          className={styles.abouthr}
        />
      </div>
      <div className={styles.divAbout}>
        <div className={styles.aboutCard1}>
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
            <h3>Our Mission</h3>
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
            Our mission is to help Ukrainian students who are living in the
            United States to feel less financially burdened by the current war,
            during a time when they are feeling worried about the well-being of
            family members back home and the unpredictable future. We hope to
            use our platform to help those in need, as much as we can.
          </text>
        </div>
        <span className={styles.aboutCard2}>
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
            <h3>About our team</h3>
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
            We are a group of high school students from the Webb School of
            California who came together to create this website. We share a
            passion to make an impact on our community and beyond. As our senior
            year is approaching, this project is one of the most important
            priorities in our hectic schedules as we see the urgency to tackle
            this issue.
          </text>
        </span>{" "}
        <span className={styles.aboutCard3}>
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
            <h3>Inspiration behind the project</h3>
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
            Witnessing one of our closest friends suddenly face financial
            struggle due to the war because her father quit his job to serve on
            the front lines, we want to help her to the best of our ability.
            That is why we create this platform hoping that we can generate a
            positive impact on the lives of people who are struggling because of
            the war.
          </text>
        </span>
        <span className={styles.aboutCard4}>
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
            <h3>Making an impact one person at a time</h3>
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
            Although we are currently very small and we have no idea how far we
            can take this project, we are trying our best to make a difference
            one person at a time. After all, that small amount of money that we
            are distributing to support Ukrainian students in times of crisis
            will hopefully create some impact on their lives.
          </text>
        </span>
      </div>
      <main
        style={{
          height: "820px",
        }}
      >
        <h1 className={styles.teamTitle}>Meet Our Team</h1>

        <span className={styles.mainAboutCard2}>
          <span className={styles.aboutText1}>
            <div style={{ borderRadius: "20px", overflow: "hidden" }}>
              <Image
                src="/nancy.svg"
                alt="nancy Image"
                width={400}
                height={410}
                objectFit="cover"
              />
            </div>
            <div className={styles.newsTitleText}>
              Nancy has lived in several places in her life, from Shanghai to
              Vancouver and then to California, where she currently attends
              boarding school. Through this, she has interacted with peers from
              all over the world and has learned from their distinct cultural
              backgrounds and experiences. As the Editor-in-Chief for the school
              paper, she hopes to use her platform to spread awareness on
              important issues, such as Ukraine’s current predicament, and to
              amplify the voices of those around her.
            </div>
          </span>
          <span className={styles.aboutText2}>
            <div style={{ borderRadius: "20px", overflow: "hidden" }}>
              <Image
                src="/nathan.svg"
                alt="nathan Image"
                width={400}
                height={410}
                objectFit="cover"
              />
            </div>
            <div className={styles.newsTitleText}>
              Nathan was born in California and has lived there for his entire
              life. As a student, he is very diligent and curious with
              satisfactory grades. Outside of school, he enjoys practicing the
              piano and saxophone and playing on the varsity tennis team. As he
              moves towards his senior year with college applications, he hopes
              he can make an impact on the world by helping more people,
              especially low-income families and struggling international
              students.
            </div>
          </span>
          <span className={styles.aboutText3}>
            <div style={{ borderRadius: "20px", overflow: "hidden" }}>
              <Image
                src="/ben.svg"
                alt="ben Image"
                width={400}
                height={410}
                objectFit="cover"
              />
            </div>
            <div className={styles.newsTitleText}>
              Ben was born and raised in Bangkok, Thailand. He is someone who is
              truly passionate about technology and the changing world. With
              various backgrounds in web-app development through self-study and
              internships, Ben formed and lead the team to tackle the financial
              hardship Ukrainian students faced during the war. Aside from his
              strong academics, Ben is also the captain of the school’s tennis
              team and an active member of the school’s leadership program.
            </div>
          </span>
        </span>
      </main>
      <Footer />
    </div>
  );
}
