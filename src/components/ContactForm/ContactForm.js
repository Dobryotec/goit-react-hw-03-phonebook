import { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    const newContact = {
      name,
      number,
      id: nanoid(),
    };

    this.props.onSubmit(newContact);
    this.setState({ name: '', number: '' });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  nameInputId = nanoid();
  numberInputId = nanoid();
  render() {
    return (
      <form className={css.form} onSubmit={this.handleSubmit}>
        <div className={css['form-name']}>
          <label className={css.label} htmlFor={this.nameInputId}>
            Name
          </label>
          <input
            className={css.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            id={this.nameInputId}
            onChange={this.handleChange}
            value={this.state.name}
          />
        </div>
        <div className={css['form-number']}>
          <label className={css.label} htmlFor={this.numberInputId}>
            Number
          </label>
          <input
            className={css.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            id={this.numberInputId}
            onChange={this.handleChange}
            value={this.state.number}
          />
        </div>

        <button className={css.btn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
