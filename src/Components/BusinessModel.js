import styles from "./BusinessModel.module.css";
import businessModel from "../businessModel.jpg";

const BusinessModel = () => {
  return (
    <section className={styles.sec_business}>
      <div className={styles.image_container}>
        <img
          src={businessModel}
          alt="business people agreeing"
          className={styles.image}
        />
        <div className={styles.text_container2}>
          <h3>Business development </h3>
          <p>
            Especially for startups, most entrepreneurs have a keen eye for
            market needs, product viability and have built a workable
            technology, product, or solution. But not all of them have a
            competitive advantage in distribution. And that makes all the
            difference. <br></br>
            <br></br>
            Where needed, Ash Creek members roll up their sleeves to make warm
            introductions and/or to follow through to enterprise sales.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BusinessModel;
