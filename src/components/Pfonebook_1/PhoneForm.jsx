import React, { Component } from 'react';

import css from 'components/Pfonebook_1/PhoneForm.module.css';

class PhoneForm extends Component {
  state = {
    name: '',
    number: '',
  };
  handlerInputChange = e => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  addContactForm = e => {
    e.preventDefault();
    console.log(this.state);

    this.props.onSubmit(this.state);
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.addContactForm}>
        <section className={css.section_search_add}>
          <div className={css.phonebook_title}>
            <h2 className={css.phonebook_title_h2}> Phonebook</h2>{' '}
          </div>
          <div className={css.phonebook_block_search}>
            <label className={css.phonebook_block_title}>
              {' '}
              Name
              <input
                className={css.input_search}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                value={this.state.name}
                onChange={this.handlerInputChange}
              />
            </label>
          </div>
        </section>

        <section className={css.section_phonenumber}>
          <label className={css.phonebook_block_title}>
            {' '}
            Number
            <input
              className={css.input_search}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.handlerInputChange}
              value={this.state.number}
            />
          </label>
        </section>

        <button type="submit" className={css.phonebook_btn_addcontact}>
          Add contacts{' '}
        </button>
      </form>
    );
  }
}
export default PhoneForm;
