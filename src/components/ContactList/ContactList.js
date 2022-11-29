import {
  List,
  ListItem,
  ListItemHeader,
  ListItemText,
  ListItemButton,
} from 'components/ContactList/ContactList.styled.js';
import { useSelector, useDispatch } from 'react-redux';
import { getContactsData, deleteCard } from 'redux/contactsSlice';

export const ContactList = () => {
  const dispatch = useDispatch();
  const { contactsList, filter } = useSelector(getContactsData);

  const onFilterContact = () => {
    return contactsList.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const deleteContact = contactId => {
    dispatch(deleteCard(contactId));
  };

  const findContacts = onFilterContact();

  return (
    <List>
      {findContacts.map(({ name, number, id }) => {
        return (
          <ListItem key={id}>
            <ListItemHeader>{name}</ListItemHeader>
            <ListItemText>{number}</ListItemText>
            <ListItemButton type="button" onClick={() => deleteContact(id)}>
              Delete
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
};
