import "react-toastify/dist/ReactToastify.css";

import Across from "./Components/Across/Across";
import BusinessModel from "./Components/BusinessModel/BusinessModel";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Investments from "./Components/Investments/Investments";
import Merchant from "./Components/Merchant/Merchant";
import Portfolio from "./Components/Portfolio/Portfolio";
import WhoAreWe from "./Components/WhoAreWe/WhoAreWe";
import Members from "./Components/Members/Members";
import Contact from "./Components/Contact/Contact";
import styles from "./App.module.css";

import Footer from "./Components/Footer/Footer";

function Main() {
  return (
    <main className={styles.main}>
      <Merchant />
      <BusinessModel />
      <Investments />
      <Across />
      <Portfolio />
      <WhoAreWe />
      <Members />
      <Contact />
    </main>
  );
}

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Hero />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
