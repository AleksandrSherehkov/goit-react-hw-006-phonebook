import { GlobalStyle } from 'utilities/styles/GlobalStyle';
import { Section } from 'components/Section/Section';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { Message } from 'components/Message/Message';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';

// const KEY_LOCAL_STORAGE = 'Phonebook-contacs';

export const App = () => {
  const contacts = useSelector(selectContacts);
  // const [contacts, setContacts] = useLocalStorage(KEY_LOCAL_STORAGE, contactsList);
  // const [filter, setFilter] = useState('');

  // const createContact = data => {
  //   const newContact = {
  //     id: nanoid(),
  //     ...data,
  //   };
  //   checkForDuplicate(newContact);
  // };

  // const checkForDuplicate = newContact => {
  //   contacts.some(contact => contact.name.toLowerCase() === newContact.name.toLowerCase())
  //     ? onReportWarning(newContact)
  //     : addContact(newContact);
  // };

  // const addContact = newContact => {
  //   setContacts(prev => [newContact, ...prev]);
  // };

  // const onReportWarning = ({ name }) => {
  //   Report.warning(`${name}`, 'This user is already in the contact list.', 'OK');
  // };

  // const deleteContact = contactId => {
  //   setContacts(prev => prev.filter(contact => contact.id !== contactId));
  // };

  // const changeFilter = ({ target: { value } }) => {
  //   setFilter(value);
  // };

  // const filtredContacts = () => {
  //   const normalizedFilter = filter.toLowerCase();
  //   return contacts.filter(({ name }) => name.toLowerCase().includes(normalizedFilter));
  // };

  return (
    <>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        {contacts.length > 0 ? <ContactList /> : <Message text="Contact list is empty." />}
      </Section>
      <GlobalStyle />
    </>
  );
};
