import { useSelector, useDispatch } from "react-redux";
import css from "./ContactList.module.css";
import Contact  from "../Contact/Contact";
import { deleteContact, selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const nameFilter = useSelector(selectNameFilter);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(nameFilter)
  );
  return (
    <ul className={css.contactList}>
      {filteredContacts.map((contact) => (
        <Contact
          item={contact}
          key={contact.id}
          onDelete={() => dispatch(deleteContact(contact.id))}
        />
      ))}
    </ul>
  );
};
export default ContactList;
