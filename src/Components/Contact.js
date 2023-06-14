import styles from "./Contact.module.css";

const data = [
  {
    id: 1,
    item: "Set up a call",
  },
  {
    id: 2,
    item: "Looking for an investment",
  },
  {
    id: 3,
    item: "Looking for help with my business",
  },
  {
    id: 4,
    item: "Have a question",
  },
  {
    id: 5,
    item: "Have a 3rd-party investment",
  },
  {
    id: 6,
    item: "Interested",
  },
];

const Checkbox = (props) => {
  return (
    <div style={{ width: "100%", marginleft: "5px" }}>
      <input type="checkbox" name={props.item} />
      <label>{props.item}</label>
    </div>
  );
};

const Information = () => {
  return (
    <div className={styles.company_info}>
      <h2>
        Tell us a little bit about <br></br> you and you company.
      </h2>
      <p>
        And we will get right back to you.<br></br>
        We look forward to hearing from you!
      </p>
      <div style={{ paddingTop: "10px", paddingLeft: "25px" }}>
        {data.map((el) => (
          <Checkbox item={el.item} key={el.id} />
        ))}
      </div>
    </div>
  );
};

const CompanyForm = () => {
  return (
    <div className={styles.company_form}>
      <form>
        <label>Name:</label>
        <br></br>
        <input type="text" name="Name" />
        <br></br>
        <label>Company Name:</label>
        <br></br>
        <input type="text" name="Company" />
        <br></br>
        <label>E-Mail:</label>
        <br></br>
        <input type="text" name="E-Mail" />
        <br></br>
        <label>Phone:</label>
        <br></br>
        <input type="text" name="Phone" />
        <br></br>
        <label>Message:</label>
        <br></br>
        <input type="text" name="Message" id={styles.message_input} />
        <br></br>
        <button className={styles.send_btn}>SEND</button>
      </form>
    </div>
  );
};

const Contact = () => {
  return (
    <section className={styles.contact_con} id="contact_us">
      <Information />
      <CompanyForm />
    </section>
  );
};

export default Contact;