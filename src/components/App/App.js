import { Component } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';
import css from './App.module.css';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    if (localStorage.getItem('contacts')) {
      this.setState({ contacts: JSON.parse(localStorage.getItem('contacts')) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  filtredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLocaleLowerCase())
    );
  };

  handleSubmit = newContact => {
    const { contacts } = this.state;
    if (contacts.find(contact => contact.name === newContact.name)) {
      alert(`${newContact.name} is already in contacts`);
    } else {
      this.setState(({ contacts }) => ({
        contacts: [...contacts, newContact],
      }));
    }
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  deleteContact = id => {
    this.setState(({ contacts }) => {
      return {
        contacts: contacts.filter(contact => contact.id !== id),
      };
    });
  };

  render() {
    return (
      <div className={css.container}>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm onSubmit={this.handleSubmit} />
        <h2 className={css.subtitle}>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.handleChange} />

        <ContactList
          contacts={this.filtredContacts()}
          onDelete={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
