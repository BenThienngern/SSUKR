import $ from "jquery";
import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import { BsHouseDoor } from "react-icons/bs";
import { useRouter } from "next/router";

export default function Navigation() {
  const [backgroundTransparacy, setBackgroundTransparacy] = useState(0.7);
  useEffect(() => {
    if (typeof window !== "undefined") {
      $(function () {
        $(window).on("scroll", function () {
          if ($(window).scrollTop() > 300) {
            setBackgroundTransparacy(0.9);
          } else {
            setBackgroundTransparacy(0.7);
          }
        });
      });
    }
  });
  return (
    <header
      className={`navbar navbar-expand-lg fixed-top ${styles.navBar}`}
      style={{
        background: `rgba(0, 0, 0, ${backgroundTransparacy})`,
        position: "fixed",
        align: "top",
      }}
    >
      <div>
        <Link href="/">
          <a className={styles.top1} style={{ textDecoration: "none" }}>
            Main Page
          </a>
        </Link>
        <Link href="/donate">
          <a className={styles.top2} style={{ textDecoration: "none" }}>
            Donate/Recieve
          </a>
        </Link>
        <Link href="/log">
          <a className={styles.top3} style={{ textDecoration: "none" }}>
            Updates/Notice
          </a>
        </Link>
        <Link href="/about">
          <a className={styles.top4} style={{ textDecoration: "none" }}>
            About Us
          </a>
        </Link>
      </div>
    </header>
  );
}
