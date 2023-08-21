import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import styles from "./Contact.module.css";
import Separator from "../ui/Seperator";
import axios from "axios";

const data = [
  {
    id: 1,
    item: "Set up a call",
    checked: false,
  },
  {
    id: 2,
    item: "Looking for an investment",
    checked: false,
  },
  {
    id: 3,
    item: "Looking for help with my business",
    checked: false,
  },
  {
    id: 4,
    item: "Have a question",
    checked: false,
  },
  {
    id: 5,
    item: "Have a 3rd-party investment",
    checked: false,
  },
  {
    id: 6,
    item: "Interested",
    checked: false,
  },
];

const obj = {};
let checkedValues = [];

const Checkbox = ({ data }) => {
  const [isChecked, setIsChecked] = useState(false);

  function getCheckedValue(e, checkedValue) {
    setIsChecked((checked) => !checked);
    if (e.target.checked) {
      checkedValues.push(checkedValue.item);
      obj.checkedValue = checkedValues;
    }
  }

  return (
    <div style={{ width: "100%", marginleft: "5px" }}>
      <input
        type="checkbox"
        name={data}
        checked={isChecked}
        onChange={(e) => getCheckedValue(e, data)}
      />
      <label>{data.item}</label>
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
        {data.map((el, index) => {
          return <Checkbox data={el} key={el.id} />;
        })}
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

  let notify;

  async function handleSubmit(e) {
    e.preventDefault();
    obj.name = name;
    obj.companyName = companyName;
    obj.email = email;
    obj.phone = phone;
    obj.message = message;

    if (
      !obj.checkedValue ||
      !obj.name ||
      !obj.companyName ||
      !obj.email ||
      !obj.phone ||
      !obj.message
    ) {
      notify = () => toast.error("Some fields are missing");
      notify();
      return;
    }

    try {
      const res = await axios.post(
        "https://api.ashcreekadvisors.com/api/EmailSender/contact/newContact",

        obj
      );

      if (res.statusText === "OK") {
        console.log(obj);
        notify = () => toast.success("Sent Successfully");
        notify();
        setTimeout(function () {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }, 3000);
      }
    } catch (error) {
      notify = () => toast.error("Check your internet");
      notify();
    }

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
        <button type="submit" className={styles.send_btn}>
          SEND
        </button>
      </form>
      <ToastContainer />
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
