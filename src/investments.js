const data = [
  {
    id: 1,
    image: "investments/7AC_Logo-150x150-1 (1).png",
    title: "7AC TECHNOLOGY LLC",
    desc: "7AC has been acquired by Emerson.  7AC provides  new approach to air conditioning technology, developing extreme energy savings and the ability to maximize climate friendly refrigerants.",
    // link: "HTTP://WWW.7ACTECH.COM",
    link: "https://www.emerson.com/en-us/news/corporate/7ac-acquisition",
  },
  {
    id: 4,
    image: "investments/ACS-Logo.png",
    title: "ADVANCED CYBER SAFETY",
    desc: "CSI is a state-of-the-art, high growth, cyber security company with multiple products targeted to enterprises and consumers. CSI is NOT an anti-virus vendor – CSI’s key product, EndpointLockTM, provides PREVENTION from zero-day malware. The EndpointLock product is part of FirstData’s merchant package.",
    link: "https://www.advancedcybersecurity.com",
  },
  {
    id: 27,
    image: "investments/accure.png",
    title: "Accure Acne, Inc.",
    desc: "Accure has developed (and the FDA has approved) a laser-based tool that isolates destruction of the subcutaneous gland with specific wavelengths – but without touching nearby tissues or glands. This provides long-term relief for acne sufferers.",
    link: "https://www.accureacne.com",
  },
  {
    id: 2,
    image: "investments/aw.jpg",
    title: "ALLWORKS",
    desc: "AllWork helps brands and retailers more efficiently staff their stores and respond to the challenges presented by the work preferences of Millennials. The company’s enterprise SaaS solution enables brands and retailers to source, schedule, monitor, train and evaluate their BA, freelance and in-store support, allowing them to maximize sales and reduce costs.",
    link: "http://WWW.ALLWORKNOW.COM",
  },

  {
    id: 26,
    image: "investments/asenda.png",
    title: "Asenda Health",
    desc: "Acenda Health is determined to build the only connected platform in the chronic care and postacute care industry, where providers can collect, exchange, analyze and act on patient data in real time. In doing so, the company’s technology and infrastructure will have a large disruptive impact on the industry, leading to lower costs (for insurers, state Medicaid and Medicare), reduced financial risk for providers, and ultimately improve patient outcomes.",
    // link: "https://acendahealth.org/ ",
    link: "",
  },
  {
    id: 3,
    image: "investments/blusap.png",
    title: "BLUSAPPHIRE",
    desc: "The first and only Unified Cyber Defense Platform with Intelligent Response Automation. It’s a Platform not just another tool. BluSapphire Enhanced Detection & Response (EDR) product is an elegant and ease to use platform to address the cyber defense stack – detection, analysis, response & remediation – a single tool that utilizes AI and machine learning to span the cyber defense stack in a single pane of glass.",
    link: "http://WWW.BLUSAPPHIRE.NET",
  },

  {
    id: 25,
    image: "investments/diamond.png",
    title: "Diamond Standard, Inc.",
    desc: "Diamond trading firm that crafts gemstones into a commodity – coins, bars and funds. An entirely new commodity for exchange, that is regulated by the Bermuda Monetary Authority and has won approval to list futures linked to its products on CME Group’s Chicago Mercantile exchange, along with options traded via MIAX.",
    link: "https://www.diamondstandard.co",
  },
  {
    id: 18,
    image: "investments/foundation.png",
    title: "Foundation CREF",
    desc: "The Foundation CREF platform gives the investor/developer/builder the tools they need to generate superior profit margins on any property they purchase through the Foundation CREF platform. The platform can provide capital -single family loans up to $5mm amd multifamily bridge loans up to $30mm.",
    link: "https://foundationcref.com",
  },
  {
    id: 5,
    image: "investments/infillion.png",
    title: "Infillion, Inc.",
    desc: "Company incorporated video, and OOH advertising.  The platform incorporates the sophistication of precision targeting with premium inventory, coupled with agile creative and actionable insights. It is a product built to deliver Return on Ad Spend with simplicity and scale.",
    link: "https://infillion.com",
  },
  {
    id: 20,
    image: "investments/infinity_full.svg",
    title: "Infinite reality",
    desc: "The Infinite Reality is a metaverse company and social media platform. Not only are brands now able to connect directly with consumers in an immersive and engaging world, but users can capture value by creating and sharing original content from all over the world. The Infinite Reality community includes celebrities, athletes, and artists who work side-by-side with the world’s most recognized brands and governments to create a full suite of metaverse experiences and capabilities. ",
    link: "https://theinfinitereality.com",
  },
  {
    id: 24,
    image: "investments/ion.png",
    title: "Ion Pacific",
    desc: "Ion pacific is a venture capital fund with a focus on the broadly defined technology community providing creative liquidity solutions to GP's, LP's and special situations – with a local presence in the US, Hong Kong, Europe and Israel.",
    link: "https://ionpacific.com",
  },
  {
    id: 7,
    image: "investments/klickly.jpg",
    title: "KLICKLY",
    desc: "Klickly’s proprietary direct-to-consumer/pay-for-performance technology allows brands to prioritize across channels, and create in-add purchases in places where it has historically been most difficult to reach new customers in the digital world.",
    link: "https://klickly.com",
  },
  {
    id: 21,
    image: "investments/mussel.png",
    title: "Mussel Polymers",
    desc: "Adhesion in wet environments has been a fundamental challenge, impacting everything from submarines to domestic fish tanks. Mussel has developed a solution based on biomimicry of mussels for industrial coatings, Dept of Defense needs, coral reefs , electronics and dental applications.",
    link: "https://www.musselpolymers.com",
  },
  {
    id: 9,
    image: "investments/nano.png",
    title: "NANOVAPOR",
    desc: "NanoVapor Inc. offers breakthrough nanotechnologies in the industrial management of vapors from gasoline, petrochemicals, oil and its derivatives. By working at the molecular level, NanoVapor’s systems are significantly safer, faster, healthier, greener, and more cost effective than conventional methods.",
    link: "https://WWW.NANOVAPOR.COM",
  },
  {
    id: 10,
    image: "investments/pingloud.png",
    title: "PING",
    desc: "“The future is voice.” ping is patented, cross platform voice technology that allows users to hear all their messages and email read aloud, when touching their device is dangerous, illegal (driving) or simply inconvenient. Software-only telematics provides drivers, parents, fleets and auto insurers, extensive driving behavior, analysis and reporting.",
    link: "HTTPS://WWW.PINGLOUD.COM",
  },
  {
    id: 23,
    image: "investments/raydiant.png",
    title: "Raydiant",
    desc: "Raydiant acquired our investment PERCH Interactive.  Raydiant is a leading in-location digital experience platform with over 200,000 devices and customers like McDonald’s, First Bank, Harvard University and Thomson Reuters.",
    link: "https://www.raydiant.com",
  },
  {
    id: 13,
    image: "investments/swaponz.jpg",
    title: "SWAPONZ",
    desc: "Swaponz is a technology and consumer product company that is combining its patented Infinite Swap product platform with the power and excitement of Augmented Reality to inform and engage customers at the point of sale and during events. Their partnership with Dreamscape Immersive combines Virtual Reality and Augmented Reality technologies to create a new form of mainstream location-based entertainment.",
    link: "HTTPS://SWAPONZ.COM",
  },
  {
    id: 14,
    image: "investments/thirstie.jpg",
    title: "THIRSTIE",
    desc: "The new standard in enterprise e-commerce for liquor brands. Thirstie builds the most powerful and flexible tools to enable internet commerce. Whether you’re a large or small brand, Thirstie’s meticulously-designed APIs and unmatched functionality help you create the best possible product experience for your customers. Many of the world’s most recognized brands are scaling faster and more efficiently by building their businesses on Thirstie.",
    link: "HTTPS://THIRSTIE.COM",
  },
  // {
  //   id: 15,
  //   image: "investments/tsu.png",
  //   title: "TSŪ",
  //   desc: "Tsū is a social media platform whose users capture value by creating and sharing original content from all over the world. Our community includes celebrities, athletes, artists, and everyday people.",
  //   link: "HTTPS://TSULOVERS.COM",
  // },
  {
    id: 12,
    image: "investments/safe.png",
    title: "The Safe Group",
    desc: "Using their proprietary technology, Safe Health Group, Inc. and the Mayo Clinic have launched a platform to reduce the cost of care in commodity diagnostics at scale. The platform enables rapid implementations of custom digital health applications which combine digital provider services, AI-based care automation and remote point-of-care diagnostics.",
    link: "https://safehealth.me",
  },
  {
    id: 22,
    image: "investments/toledo.png",
    title: "Toledo Solar, Inc",
    desc: "The state-of-the-art manufacturer and distributor of cadmium Telluride (“CdTe”) thin-film solar panels. Manufactures solar panels for home roofs and windows using vapor disposition technology.",
    link: "https://toledo-solar.com",
  },
  {
    id: 17,
    image: "investments/unicode.png",
    title: "Ucode Programming Academy",
    desc: "A complete solution for children learning a naturally recognized curriculum, exercises and quizzes that also facilitates numbers literacy and analytical thinking. In person or online young coders learn Scratch, Python, Java, HTML and SQL.",
    link: "https://www.ucode.com",
  },
  {
    id: 19,
    image: "investments/xxvi.png",
    title: "XXII",
    desc: "XII acquired the Ash Creek investment GVB BioPharma. 22nd Century is an agricultural biotechnology and intellectual-property company. The company is focused on utilizing advanced alkaloid plant techniques to improve health and wellness through tobacco harm reduction, reduced nicotine tobacco, help/cannibals and hops.",
    link: "https://xxiicentury.com",
  },
  {
    id: 16,
    image: "investments/zz.jpg",
    title: "ZONEFLOW",
    desc: "Zone Flow focuses on the development of reactor technologies to improve the efficiency of the production of hydrogen and syngas by the steam methane reforming (SMR) process. SMR is the dominant process worldwide for the production of hydrogen and its derivatives.",
    link: "http://WWW.ZONEFLOWTECH.COM",
  },
];

// function compare(a, b) {
//   if (a.title < b.title) {
//     return -1;
//   }
//   if (a.title > b.title) {
//     return 1;
//   }
//   return 0;
// }
// const sorted = data.sort(compare);
// console.log(sorted);

export default data;
