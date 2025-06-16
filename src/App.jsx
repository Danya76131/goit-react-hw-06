import { useDispatch, useSelector } from "react-redux";
import { addContact } from "./redux/contactsSlice";
import { changeFilter } from "./redux/filtersSlice";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";

function App() {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.name);
  const dispatch = useDispatch();
  const filteredContacts = contacts.filter((c) =>
    c.name.toLowerCase().includes(filter.toLowerCase())
  );
  const handleAddContact = (contact) => {
    dispatch(addContact(contact));
  };
  const handleFilterChange = (value) => {
    dispatch(changeFilter(value));
  };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onAdd={handleAddContact} />
      <SearchBox value={filter} onChange={handleFilterChange} />
      <ContactList contacts={filteredContacts} />
    </>
  );
}

export default App;
