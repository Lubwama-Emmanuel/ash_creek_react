import styles from "./Portfolio.module.css";
import data from "../investments";

const Company = (props) => {
  return (
    <section className={styles.portfolio}>
      <div className={styles.imagesect}>
        <img src={props.image} alt="" class={styles.company_logo} />
      </div>
      <div className={styles.textsect}>
        <h5>{props.title.toUpperCase()}</h5>
        <a href={props.link}>{props.link.toLowerCase()}</a>
        <p>{props.desc}</p>
      </div>
    </section>
  );
};

const Portfolio = () => {
  return (
    <>
      <h1 className={styles.heading}> portfolio</h1>
      {data.map((el) => (
        <Company
          image={el.image}
          title={el.title}
          link={el.link}
          desc={el.desc}
        />
      ))}
    </>
  );
};

export default Portfolio;
