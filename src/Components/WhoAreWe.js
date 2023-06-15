import styles from "./WhoAreWe.module.css";
import Separator from "./Seperator";

const WhoAreWe = () => {
  return (
    <section id="who_are_we">
      <Separator height="60px" color="#f1f1f1" />
      <div className={styles.fifth}>
        <img src="places.png" alt="Your" />
        <div className={styles.text_container5}>
          <h3> Who We Are </h3>
          <p>
            We are 25+ business leaders with over 1,000 cumulative years of
            leadership experience running businesses across a broad array of
            industries. <br></br>
            And we bring that experience to bear for every one of our clients or
            investments.
          </p>
          <h6> Our Industry Experience</h6>
          <ul className={styles.list}>
            <li>Healthcare</li>
            <li>Mergers & Acquisitions</li>
            <li>Real Estate</li>
            <li>Retail</li>
            <li>Financial Services</li>
            <li>Consumer Marketing</li>
            <li>Energy and Industrial Technology</li>
            <li>Branding</li>
            <li>Insurance</li>
            <li>Private Equity</li>
            <li>Investment Banking</li>
            <li>Telecommunications</li>
            <li>Information Technology</li>
            <li>Human Resources</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhoAreWe;
