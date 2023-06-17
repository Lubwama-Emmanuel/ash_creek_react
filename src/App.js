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

import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <MobileMenu /> */}
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
    </div>
  );
}

export default App;
