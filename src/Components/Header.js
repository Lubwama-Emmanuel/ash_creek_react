import styles from "./Header.module.css";

const data = [
  {
    id: 1,
    item: "Home",
    link: "#top",
  },
  {
    id: 2,
    item: "Investments",
    link: "#investment",
  },
  {
    id: 3,
    item: "Who we are",
    link: "#who_are_we",
  },
  {
    id: 4,
    item: "Contact Us",
    link: "#contact_us",
  },
];

const List = ({ item, link }) => {
  return (
    <li className={styles.listItem}>
      {" "}
      <a href={link} className={styles.listLink}>
        {item}
      </a>
    </li>
  );
};

const Header = () => {
  return (
    <section className={styles.header} id="#top">
      <div>
        <ul className={styles.navbar}>
          {data.map((el) => (
            <List item={el.item} link={el.link} key={el.id} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Header;
