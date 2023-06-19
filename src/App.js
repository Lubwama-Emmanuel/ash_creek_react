import Across from "./Components/Across";
import BusinessModel from "./Components/BusinessModel";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Investments from "./Components/Investments";
import Merchant from "./Components/Merchant";
import Portfolio from "./Components/Portfolio";
import WhoAreWe from "./Components/WhoAreWe";
import Members from "./Components/Members";
import Contact from "./Components/Contact";
import styles from "./App.module.css";

import Footer from "./Components/Footer";

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
