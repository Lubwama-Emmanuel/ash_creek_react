import styles from "./Across.module.css";

const Across = () => {
  return (
    <section className={styles.fourth}>
      <div className={styles.img_div}>
        <div className={styles.text_container4}>
          <h2>Across Industries</h2>
          <p>
            Almost all of the companies in which Ash Creek members have invested
            are businesses that offer disruptive and/ or new technologies that
            have very little competition in their areas of expertise across 12
            industry verticals:<br></br>
          </p>
          <ul>
            <li>Adhesion: Mussel Polymers</li>
            <li>Asset Management: Diamond Standard</li>
            <li>Biotechnology: 22nd Century Group</li>
            <li>
              Consumer E-Commerce: Kickly, Thirstie, Raydiant, Swaponz, Ucode{" "}
            </li>
            <li>Communications: Ping</li>
            <li>Cybersecurity: BluSapphire, Cyber Safety</li>
            <li>Environmental: 7ac, Nanovapor, Zoneflow</li>
            <li>FinTech/Financial Services: Foundation CREF, Ion Pacific</li>
            <li>Healthcare: Accure Acne, Asenda Health, The Safe Group</li>
            <li>Media: Infillion</li>
            <li>Social Media/Web 3.0: The Infinite Reality</li>
            <li>Solar: Toledo Solar</li>
          </ul>
        </div>
        <img src="others/industries.png" alt="industries" />
      </div>
    </section>
  );
};

export default Across;
