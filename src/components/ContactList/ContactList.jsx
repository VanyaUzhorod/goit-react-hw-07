import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contactsSlice";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  return (
    <ul className={css.list}>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <Contact {...contact} />
        </li>
      ))}
    </ul>
  );
};
export default ContactList;
