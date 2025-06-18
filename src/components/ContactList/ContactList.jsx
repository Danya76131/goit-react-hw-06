import { useSelector } from "react-redux";
import { useMemo } from "react";
import Contact from "../Contact/Contact";
import { selectContacts, selectFilter } from "../../redux/selectors";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter).toLowerCase();

  // Мемоізація відфільтрованого списку
  const filteredContacts = useMemo(() => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter)
    );
  }, [contacts, filter]);

  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id}>
          <Contact id={id} name={name} number={number} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
