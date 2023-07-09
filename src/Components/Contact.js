import { useState } from "react";
import styles from "./Contact.module.css";
import Separator from "./Seperator";

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

const obj = {};

const Checkbox = (props) => {
  const [checked, setChecked] = useState(false);

  function getCheckedValue(e, checkedValue) {
    if (e.target.checked) {
      setChecked((v) => !v);
      obj.checkedValue = checkedValue;
      console.log(obj);
    }
  }

  return (
    <div style={{ width: "100%", marginleft: "5px" }}>
      <input
        type="checkbox"
        name={props.item}
        value={checked}
        onChange={(e) => getCheckedValue(e, props.item)}
      />
      <label>{props.item}</label>
    </div>
  );
};

const Information = () => {
  return (
    <div className={styles.company_info}>
      <h2>
        Tell us a little bit about <br></br> you and your company.
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
  const [name, setName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    obj.name = name;
    obj.companyName = companyName;
    obj.email = email;
    obj.phone = phone;
    obj.message = message;

    // Clear States
    setName("");
    setCompanyName("");
    setEmail("");
    setMessage("");
    setPhone("");
  }

  return (
    <div className={styles.company_form}>
      <form onSubmit={handleSubmit} autoComplete="off">
        <label>Name:</label>
        <br></br>
        <input
          type="text"
          name="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br></br>
        <label>Company Name:</label>
        <br></br>
        <input
          type="text"
          name="Company"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
        <br></br>
        <label>E-Mail:</label>
        <br></br>
        <input
          type="text"
          name="E-Mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br></br>
        <label>Phone:</label>
        <br></br>
        <input
          type="text"
          name="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <br></br>
        <label>Message:</label>
        <br></br>
        <input
          type="text"
          name="Message"
          id={styles.message_input}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <br></br>
        <button
          type="submit"
          className={styles.send_btn}
          // onClick={function success() {
          //   console.log("worked");
          //   console.log(obj);
          // }}
        >
          SEND
        </button>
      </form>
    </div>
  );
};

const Contact = () => {
  return (
    <section id="contact_us">
      <Separator height="75px" />
      <div className={styles.contact_con} id="contact_us">
        <Information />
        <CompanyForm />
      </div>
    </section>
  );
};

export default Contact;
