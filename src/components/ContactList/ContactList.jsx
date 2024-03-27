import { useSelector } from "react-redux";
import { selectContacts, selectNameFilter } from "../../redux/selectors";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const getVisibleContacts = (contacts, filter) => {
  if (filter.length > 0) {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.trim().toLowerCase())
    );
  } else {
    return contacts;
  }
};
export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
  const visibleContacts = getVisibleContacts(contacts, filter);
  return (
    <>
      {visibleContacts.length !== 0 ? (
        <ul className={css.contactList}>
          {visibleContacts.map((contact) => (
            <Contact key={contact.id} contact={contact} />
          ))}
        </ul>
      ) : (
        <p className={css.textInfo}>Your phonebook is empty!</p>
      )}
    </>
  );
}
