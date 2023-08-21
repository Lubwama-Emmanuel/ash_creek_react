import styles from "./Portfolio.module.css";
import data from "../../Data/investments";

const Company = (props) => {
  return (
    <div className={styles.portfolio}>
      <div className={styles.imagesect}>
        {props.link ? (
          <>
            <a
              href={props.link}
              alt={props.title}
              target="_blank"
              rel="noreferrer"
            >
              <img src={props.image} alt="" className={styles.company_logo} />
            </a>
          </>
        ) : (
          <img src={props.image} alt="" className={styles.company_logo} />
        )}
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
    <section className={styles.sec_portfolio}>
      <h2 className={styles.heading}>Portfolio</h2>
      <div className={styles.section_portfolio}>
        {data.map((el) => (
          <Company
            image={el.image}
            title={el.title}
            link={el.link}
            desc={el.desc}
            key={el.id}
          />
        ))}
      </div>
      {/* <Separator /> */}
    </section>
  );
};

export default Portfolio;
