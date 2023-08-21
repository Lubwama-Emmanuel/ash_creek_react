import styles from "./Members.module.css";
import data from "../../Data/membersList";
import { useState } from "react";

const ReadMore = ({ v }) => {
  const text = v;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  if (text) {
    return (
      <p className={styles.text}>
        {isReadMore ? text.slice(0, 215) : text}
        <span
          onClick={toggleReadMore}
          className={styles.read_or_hide}
          id={styles.read}
        >
          {isReadMore ? "...Read More" : " Show Less"}
        </span>
      </p>
    );
  }
};

const Member = (props) => {
  return (
    <div className={styles.member}>
      <img src={props.image} alt={props.name} className={styles.member_image} />
      <div className={styles.member_info}>
        <p className={styles.member_name}>{props.name}</p>
        <p className={styles.member_position}>MANAGING DIRECTOR</p>
      </div>
      <ReadMore v={props.desc} />
    </div>
  );
};

const Members = () => {
  return (
    <section className={styles.members_con}>
      <h2 style={{ marginBottom: "60px", fontSize: "42px" }}>Our Members</h2>
      <div className={styles.members}>
        {data.map((el) => (
          <Member image={el.image} name={el.name} desc={el.desc} key={el.id} />
        ))}
      </div>
    </section>
  );
};

export default Members;
