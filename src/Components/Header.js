import { useState } from "react";
import styles from "./Header.module.css";
import { useEffect } from "react";

const data = [
  {
    id: 1,
    item: "Home",
    link: "#top",
  },
  {
    id: 2,
    item: "Investments",
    link: "#investments",
  },
  {
    id: 3,
    item: "Who We Are",
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
      <a href={link} className={styles.listLink}>
        {item}
      </a>
    </li>
  );
};

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  });

  return (
    <header className={styles.header} id="#top">
      <div>
        {(toggleMenu || screenWidth > 600) && (
          <ul className={styles.navbar}>
            {data.map((el) => (
              <List item={el.item} link={el.link} key={el.id} />
            ))}
          </ul>
        )}

        <button className={styles.menu_btn} onClick={handleMenu}>
          <i className="fa fa-bars"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;
