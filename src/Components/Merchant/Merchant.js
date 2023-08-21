import styles from "./Merchant.module.css";

const Merchant = () => {
  return (
    <section className={styles.container}>
      <div className={styles.text_container}>
        <h2>A unique merchant bank</h2>
        <p>
          Ash Creek is a boutique Merchant Bank dedicated to assisting
          businesses who have a clear vision of their goals and objectives.{" "}
          <br></br>
          <br></br>
          Over 20+ years and 30+ investments, Ash Creek members have assisted
          small and mid-market companies to accelerate revenue growth and, only
          then, provide investors with a meaningful return.
        </p>
      </div>
      <img
        src={"others/buildingImage.jpg"}
        alt="building block with bricks"
        className={styles.image}
      />
    </section>
  );
};

export default Merchant;
