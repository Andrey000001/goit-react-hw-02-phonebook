import { Component } from 'react';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { nanoid } from 'nanoid';
import { Container } from './App.styled';
class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  deleteUser = ids => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({ id }) => id !== ids),
    }));
  };
  addUser = allInfoUser => {
    const { name } = allInfoUser;
    const { contacts } = this.state;
    const id = nanoid();
    if (contacts.some(({ name: currentNames }) => currentNames === name)) {
      alert('Contact with this name already exists');
    } else {
      const resultName = name
        .split(' ')
        .map(item => item.charAt(0).toUpperCase() + item.slice(1))
        .join(' ');
      console.log(resultName);
      this.setState(prevState => ({
        contacts: [
          ...prevState.contacts,
          { id, name: resultName, ...allInfoUser },
        ],
      }));
    }
  };
  getNameOrNumber = e => {
    const getUser = e.target.value.toLowerCase().trim();
    this.setState({ filter: getUser });
  };

  render() {
    const { contacts, filter } = this.state;
    const findContact = contacts.filter(({ name, number }) => {
      const lowerCaseName = name.toLowerCase();
      const lowerCaseNumber = number.toLowerCase();
      return lowerCaseName.includes(filter) || lowerCaseNumber.includes(filter);
    });
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm addUser={this.addUser} />
        <h2>Contacts</h2>
        <Filter getNameOrNumber={this.getNameOrNumber} />
        <ContactList findContact={findContact} deleteUser={this.deleteUser} />
      </Container>
    );
  }
}

export default App;
