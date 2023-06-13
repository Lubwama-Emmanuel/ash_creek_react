import styles from "./Members.module.css";
import Brain from "../Brian-LinkedIn-picture.jpeg";

const Member = () => {
  return (
    <div className={styles.member}>
      <img src={Brain} alt="Brain" className={styles.member_image} />
      <div className={styles.member_info}>
        <p className={styles.member_name}>
          <strong>BRIAN ANDREOLI</strong>
        </p>
        <p className={styles.member_position}>MANAGING DIRECTOR</p>
      </div>
      <p>
        International tax partner with three multinational firms; tax principal
        with three of the big four accounting firms: corporate tax experience
        are two major pharmaceutical companies. Extensive experience in
        litigation, mergers and acquisitions, restructuring and general business
        matters. Etcetera
      </p>
    </div>
  );
};

const Members = () => {
  return (
    <section>
      <h2>Our Members</h2>
      <div className={styles.members}>
        <Member />
        <Member />
        <Member />
        <Member />
        <Member />
        <Member />
        <Member />
        <Member />
      </div>
    </section>
  );
};

export default Members;
