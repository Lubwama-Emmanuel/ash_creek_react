import styles from "./Portfolio.module.css";
import data from "../investments";

const Company = (props) => {
  return (
    <div className={styles.portfolio}>
      <div className={styles.imagesect}>
        <img src={props.image} alt="" className={styles.company_logo} />
      </div>
      <div className={styles.textsect}>
        <h5>{props.title.toUpperCase()}</h5>
        <a
          href={props.link}
          className={styles.company_link}
          target="_blank"
          rel="noreferrer"
        >
          {props.link.toLowerCase()}
        </a>
        <p>{props.desc}</p>
      </div>
    </div>
  );
};

const Portfolio = () => {
  return (
    <section className={styles.section_portfolio}>
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
      {/* <Separator /> */}
    </section>
  );
};

export default Portfolio;
