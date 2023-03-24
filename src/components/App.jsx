import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import { ContactList } from 'components/ContactList/ContactList';
import PhoneForm from 'components/PhoneForm/PhoneForm';
import { Filter } from 'components/Filter/filter';
import css from 'components/PhonebookStart.module.css';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      { id: 'id-5', name: 'Aline Copand', number: '227-96-26' },
      { id: 'id-6', name: 'Appolina Copander', number: '227-96-25' },
      { id: 'id-7', name: 'Nigera Coopera', number: '225-96-25' },
      { id: 'id-8', name: 'Regina Cobra', number: '25-96-25' },
      { id: 'id-9', name: 'Edena Kliente-Cobra', number: '125-96-25' },
    ],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const contact = { id: nanoid(), name: name, number: number };
    console.log(contact);

    const names = this.state.contacts.map(contact =>
      contact.name.toLowerCase()
    );

    if (names.includes(name.toLowerCase())) {
      alert(`${name} is already in contacts.`);
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  getVisiblefilter = () => {
    const { filter, contacts } = this.state;
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const { filter } = this.state;
    const visiblefilter = this.getVisiblefilter();

    return (
      <div className={css.phonebook_contacts_block}>
        <PhoneForm onSubmit={this.addContact} />
        <h2 className={css.phonebook_title_h2}> Contacts</h2>{' '}
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          contacts={visiblefilter}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
