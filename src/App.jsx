import { useState, useEffect } from 'react'
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import './App.css'

const initialContacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

const App = () =>
{
  const [contacts, setContacts] = useState(() => {
    const getContactsFromStorage = JSON.parse(
      window.localStorage.getItem("contacts")
    );
    if (getContactsFromStorage) return getContactsFromStorage;

    return initialContacts;
  });

  const [filter, setFilter] = useState("");

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  });

  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contacts) => contacts.id !== contactId);
    });
  };

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const addContact = (contact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, contact];
    });
  };

  return (
    <div >
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={visibleContacts} onDelete={deleteContact} />
    </div>
  );
}
export default App
