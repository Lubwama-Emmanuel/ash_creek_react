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

import CookieConsent from "react-cookie-consent";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Merchant />
      <BusinessModel />
      <Investments />
      <Across />
      <Portfolio />
      <WhoAreWe />
      <Members />
      <Contact />
      <Footer />
      <CookieConsent debug={true}>This site uses cookies.</CookieConsent>
    </div>
  );
}

export default App;
