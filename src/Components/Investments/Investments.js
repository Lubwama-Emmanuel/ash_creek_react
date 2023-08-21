import styles from "./Investments.module.css";

// Investments component
const Investments = () => {
  return (
    <section id="investments" className={styles.investments}>
      <div className={styles.separator}></div>
      <div className={styles.third}>
        <div className={styles.text_container3}>
          <h2> Investments </h2>
          <p>
            Most of our investments have been made in conjunction with family
            offices and other investment groups. It is not unusual for us to
            create a Special Purpose Entity (SPE), a limited liability company,
            for investing in situations where the investment may be larger.
            There is no minimum investment.<br></br>
            <br></br>
            Before we invest, we conduct extensive due diligence to make sure
            the economic, marketing and financial models all work together.
            <br></br>
            <br></br>
            Finally, one of the businesses funded back in 2019 has become a
            Unicorn and will exit the year with a $1 billion valuation.{" "}
            <br></br>
          </p>
        </div>
        <img src="others/growing_plants.jpg" alt="" className={styles.image3} />
      </div>
    </section>
  );
};

export default Investments;
