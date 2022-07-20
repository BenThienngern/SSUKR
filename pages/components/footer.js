import Image from "next/image";
import styles from "../../styles/Home.module.css";

export default function Footer() {
  return (
    <div>
      <footer className={styles.footer}>
        <div>
          <h3 className={styles.over}>
            <span className={styles.contact}> Contact Us </span>
            <p className={styles.line1}> Email: ssukr2022@gmail.com</p>
            <p className={styles.line1}> Call: -</p>
          </h3>
        </div>
        <div>
          <h3 className={styles.overright}>
            <span className={styles.contact}> Follow Us On</span>
            <p className={styles.line1}> Instagram @light.blue.stars.fund</p>
            <p className={styles.line1}> Facebook @...</p>
          </h3>
        </div>
        <hr size="4" width="90%" className={styles.hr} />
        <p className={styles.credit}>
          Website Developed using NEXT JS by Ben Thienngern
        </p>
      </footer>
    </div>
  );
}
