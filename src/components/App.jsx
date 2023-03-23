// import css from 'components/Pfonebook_1/PhonebookFull.module.css';
// import css from 'components/Pfonebook_1/PhonebookFull.module_1.css';
// import css from 'components/Pfonobook_1/PhonebookFull.module.css';
import css from 'components/Pfonebook_1/PhonebookFull.module.css';

// import ColorPicker from 'components/ColorPicker';

import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactList } from 'components/Pfonebook_1/ContactList';
import PhoneForm from 'components/Pfonebook_1/PhoneForm';
import { Filter } from 'components/Pfonebook_1/filter';
// import 'components/Pfonebook_1/ContactList.css';

// const colorPickerOption = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D88' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F5185' },
// ];

// import {PhonebookFull} from 'components/Pfonebook_1/PhonebookFull';

export class App extends Component {
  state = {
    // contacts: [{id: 1, name: 'Anna' }, {id: 2, name: 'Poly' }, {id: 3, name: 'Roma' },  {id: 4, name: 'Marta' } ],

    // contacts: ['Anna', 'Poly', 'Roma', 'Marta' ],
    // contacts: [],
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
    // selectedContact: null,
    ///// зад 4 фильтр///
    filter: '',
  };

  //////ifu 1 /////////////////////////////
  // addContact = name => {
  //   console.log(name);

  //   const contact = {
  //     id: nanoid(),
  //     name: name,

  //   };
  //   console.log(contact);
  //   this.setState(prevState => ({
  //     contacts: [...prevState.contacts, contact],
  //   }));
  // };

  ///////////////////////   2  шаг  ////////////////////

  addContact = ({ name, number }) => {
    const contact = { id: nanoid(), name: name, number: number };
    console.log(contact);

    const names = this.state.contacts.map(contact =>
      contact.name.toLowerCase()
    );
    // console.log(names);
    if (names.includes(name.toLowerCase())) {
      alert(`${name} is already in contacts.`);
      return;
    }
  /// если имя (const names) включает значение из инпута выкидуваем алерт

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
    // this.setState(({ contacts }) => ({ contacts: [contact, ...contacts] }));
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
  //  метод удалл (ожид Id)  от предыдущего состояния контактов фильтрует контакты все у которых Id не раен Id который  приходит,
  // т.е  в новую коллекцию запишится все из колекции , кроме совпавшего

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    //////деструктуриз пропов
    const { filter } = this.state;

    // const { selectedContact } = this.state;
    // const { step } = this.props;

    ///////////////  inline filter  /////////////
    // const normalizeFilter = this.state.filter.toLowerCase();

    // const visiblefilter = this.state.contacts.filter(contact =>
    //   contact.name.toLowerCase().includes(normalizeFilter)
    // );
    //в перемен  visiblefilter запис вір: отфильтровіваем те контакті, name кот включают текущее состояние фильтра
    // и имена и значение инпута из поисковика приводим к нижнему регистру .toLowerCase()
    const visiblefilter = this.getVisiblefilter();
    /// инициализац в переменную візова МЕТОДА this.getVisiblefilter()

    return (
      <div className={css.div_phonebook_full}>
        {/* <ColorPicker options = {colorPickerOption } /> */}
        <section className={css.section_phonenumber}>
          <PhoneForm onSubmit={this.addContact} />
        </section>
        {/* <div className={css.phonebook_contacts}> */}
        <h2 className={css.phonebook_title_h2}> Contacts</h2>{' '}
        <Filter value={filter} onChange={this.changeFilter} />
        <div className={css.phonebook_contacts_block}>
          {/* Кнопки для вызова метода displayContact */}

          {/*  //////////////////  отрисовка по первому заданию  */}

          {/* <ContactList contacts={this.state.contacts}/>      ,без деструктуризации     с !!!!! ниже */}
          <ContactList
            // contacts={contacts}
            contacts={visiblefilter}
            onDeleteContact={this.deleteContact}
            // onDeleteContact как проп и передаем ссылку на метод удаления
          />
          {/* < ContactList  /> */}
        </div>
        {/* </div> */}
        {/* <div className={css.divFilter}>
        <label className={css.labelFilter} > Find contakts by name <input type="text"  value={filter} onChange={this.changeFilter}/>
           </label>
           </div> */}
      </div>
    );
  }

  // return (
  //   <div
  //     style={{
  //       height: '100vh',
  //       display: 'flex',
  //       justifyContent: 'center',
  //       alignItems: 'center',
  //       fontSize: 40,
  //   color: '#010101'
  //     }}
  //   >
  //     <PhonebookFull onClick={this.addContact}/>

  //   </div>
  // );
}
