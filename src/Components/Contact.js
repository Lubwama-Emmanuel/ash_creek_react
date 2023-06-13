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
      <label for={props.item}>{props.item}</label>
    </div>
  );
};

const Information = () => {
  return (
    <div className={styles.company_info}>
      <h2 style={{ marginBottom: "10px" }}>
        Tell us a little bit about you and you company
      </h2>
      <p>And we will get right back to you.</p>
      <p style={{ marginBottom: "10px" }}>
        We look forward to hearing from you!
      </p>
      <div style={{ paddingLeft: "15px" }}>
        {data.map((el) => (
          <Checkbox item={el.item} />
        ))}
      </div>
    </div>
  );
};

const CompanyForm = () => {
  return (
    <div className={styles.company_form}>
      <form>
        <label for="name">Name:</label>
        <br></br>
        <input type="text" name="Name" />
        <br></br>
        <label for="compnay">Company Name:</label>
        <br></br>
        <input type="text" name="Company" />
        <br></br>
        <label for="E-Mail">E-Mail:</label>
        <br></br>
        <input type="text" name="E-Mail" />
        <br></br>
        <label for="Phone">Phone:</label>
        <br></br>
        <input type="text" name="Phone" />
        <br></br>
        <label for="Message">Message:</label>
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
    <section className={styles.contact_con}>
      <Information />
      <CompanyForm />
    </section>
  );
};

export default Contact;
