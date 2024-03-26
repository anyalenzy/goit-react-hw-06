import css from "./Contact.module.css";
import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
export default function Contact({ contact: { id, name, number }, onDelete }) {
  return (
    <li className={css.contactItem}>
      <div>
        <p className={css.contactName}>
          <FaUser />
          {name}
        </p>
        <p className={css.contactNumber}>
          <FaPhoneAlt />
          {number}
        </p>
      </div>
      <button className={css.deleteBtn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
}
