import { useSelector, useDispatch } from 'react-redux';
// import { useEffect } from 'react';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import {Filter} from './Filter/Filter';

// import { fetchContacts} from 'redux/contacts/contacts-operations';
import { setFilter } from 'redux/filter/filter-actions';

// import { getFilteredContacts } from 'redux/contacts/contacts-selectors';
import { getFilter } from 'redux/filter/filter-selectors';
import { useGetContactsQuery, useAddContactMutation, useRemoveContactMutation } from 'redux/contacts/contactsApi';

export function App() {
  // const contacts = useSelector(getFilteredContacts);
  const {data = [], isLoading, isError} = useGetContactsQuery();
  const [addContact, addInfo] = useAddContactMutation();
  console.log(addInfo);
  const [removeContact, removeInfo] = useRemoveContactMutation();
  console.log(removeInfo);
   
  const filter = useSelector(getFilter);
 
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchContacts())
  // }, [dispatch]);

  const onAddContact = (newContact) => {
    addContact(newContact).unwrap();
  };

  const onRemoveContact = (id) => {
    removeContact(id);
  }

  const onSetFilter = ({target}) => {
    dispatch(setFilter(target.value));
  }

    return (
      <>
        {isLoading && <p>...Loading contacts</p>}
        {isError && <p>Error load contacts</p>}
        <h1>Phonebook</h1>
        <ContactForm onSubmit={onAddContact}/>
        <h2>Contacts</h2>
        <Filter onChange={onSetFilter} value={filter} />
        <ContactList contacts={data} removeContact={onRemoveContact}/>
      </>
    );
}
