import styles from "./Portfolio.module.css";
import data from "../investments";

const Company = (props) => {
  return (
    <section className={styles.portfolio}>
      <div className={styles.imagesect}>
        <img src={props.image} alt="" className={styles.company_logo} />
      </div>
      <div className={styles.textsect}>
        <h5>{props.title.toUpperCase()}</h5>
        <p>{props.desc}</p>
        <a
          href={props.link}
          className={styles.company_link}
          target="_blank"
          rel="noreferrer"
        >
          {props.link.toLowerCase()}
        </a>
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
          key={el.id}
        />
      ))}
    </>
  );
};

export default Portfolio;
