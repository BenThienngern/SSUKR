import $ from "jquery";
import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
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
      {/* <nav className="navbar navbar-expand-lg fixed-top py-3">
        <div className="container">
          <div id="navbarSupportedContent" className="collapse navbar-collapse"> */}
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
      {/* </div>
        </div>
      </nav> */}
      {/* <div className="container">
        <a className="navbar-brand" href="#">
          Techomor
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div> */}
    </header>
  );
}
// import { useEffect, useState } from "react";

// export default function Navigation() {
//   const [clientWindowHeight, setClientWindowHeight] = useState("");

//   const [backgroundTransparacy, setBackgroundTransparacy] = useState(0);
//   const [padding, setPadding] = useState(30);
//   const [boxShadow, setBoxShadow] = useState(0);

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   });

//   const handleScroll = () => {
//     setClientWindowHeight(window.scrollY);
//   };

//   useEffect(() => {
//     let backgroundTransparacyVar = clientWindowHeight / 600;

//     if (backgroundTransparacyVar < 1) {
//       let paddingVar = 30 - backgroundTransparacyVar * 20;
//       let boxShadowVar = backgroundTransparacyVar * 0.1;
//       setBackgroundTransparacy(backgroundTransparacyVar);
//       setPadding(paddingVar);
//       setBoxShadow(boxShadowVar);
//     }
//   }, [clientWindowHeight]);

//   return (
//     <nav
//       className="navbar navbar-expand-lg navbar-light fixed-top"
//       style={{
//         background: `rgba(0, 0, 0, ${backgroundTransparacy})`,
//         padding: `${padding}px 0px`,
//         boxShadow: `rgb(0 0 0 / ${boxShadow}) 0px 0px 20px 6px`,
//       }}
//     >
//       <div className="container">
//         <a className="navbar-brand" href="#">
//           Techomor
//         </a>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-toggle="collapse"
//           data-target="#navbarText"
//           aria-controls="navbarText"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarText">
//           <ul className="navbar-nav mr-auto">
//             <li className="nav-item active">
//               <a className="nav-link" href="#">
//                 Home
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#">
//                 About
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#">
//                 Contact
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }
// import { useState, useEffect } from "react";
// import Link from "next/link";
// import styles from "../../styles/Home.module.css";
// import { useRouter } from "next/router";

// export default function Navigation() {
//   const [test, setTest] = useState(false); // Defaults to `false`
//   const router = useRouter();

//   useEffect(() => {
//     const header = document.querySelector("header");
//     if (router.pathname === "/") {
//       setTest(true);
//       header.classList.add("active");
//     }
//   }, []);

//   useEffect(() => {
//     const header = document.querySelector("header");
//     function checkScroll() {
//       if (window.innerWidth <= 768) {
//         header.classList.remove("active");
//         console.log("here");
//       }
//       if (window.scrollY === 0) {
//         header.classList.add("active");
//         console.log("there");
//       }
//     }
//     if (test) {
//       window.addEventListener("scroll", checkScroll);

//       return () => window.removeEventListener("resize", checkScroll);
//     }
//     console.log(header);
//   }, [test]);
//   return (
//     <header className={styles.header}>
//       <h1>
//         <Link href="/">
//           <a>
//             <span className="offscreen">Home</span>
//           </a>
//         </Link>
//       </h1>
//     </header>
//   );
// }
