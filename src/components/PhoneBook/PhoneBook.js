import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Container } from 'components/PhoneBook/PhoneBook.styled';
import { useSelector } from 'react-redux';
import { getContactsData } from 'redux/contactsSlice';

export const PhoneBook = () => {
  // const [contacts, setContacts] = useState(() => {
  //   return JSON.parse(localStorage.getItem('contacts')) || [];
  // });
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  const { contactsList } = useSelector(getContactsData);

  // const handleSubmit = (values, { resetForm }) => {
  //   resetForm();

  //   const { name, number } = values;
  //   const contact = {
  //     name,
  //     number,
  //   };
  //   const sameContact = checkContactsBook(contact, contactsList);
  //   sameContact
  //     ? alert(`${contact.name} has been already added`)
  //     : dispatch(addContact({ ...values, id: nanoid() }));
  // };

  // const checkContactsBook = (contact, contactsList) => {
  //   return contactsList.find(
  //     item => item.name.toLowerCase() === contact.name.toLowerCase()
  //   );
  // };

  // const onFilterChange = e => {
  //   dispatch(updateFilter(e.currentTarget.value));
  // };

  // const onFilterContact = () => {
  //   return contactsList.filter(contact =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase())
  //   );
  // };

  // const deleteContact = contactId => {
  //   dispatch(deleteCard(contactId));
  // };

  // const findContacts = onFilterContact();

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />

      {!!contactsList.length && (
        <>
          <h2>Contacts</h2>
          <Filter />
        </>
      )}

      <ContactList />
    </Container>
  );
};
