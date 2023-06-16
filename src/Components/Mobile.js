import styles from "./Mobile.module.css";

let disp = "block";
const openMenu = () => {
  console.log("tapped");
  if (disp === "none") {
    disp = "block";
  } else if (disp === "block") {
    disp = "none";
  }
};

const MobileMenu = () => {
  return (
    <div className={styles.navbar}>
      <div
        style={{
          display: disp,
        }}
        id="my_links"
      >
        <a href="#dks"> Home</a>
        <a href="#dks"> Investments</a>
        <a href="#dks"> Who Are We</a>
        <a href="#dks"> Contact Us</a>
      </div>
      <a href="#my_link" className={styles.icon} onClick={openMenu()}>
        <i class="fa fa-bars"></i>
      </a>
    </div>
  );
};

export default MobileMenu;
