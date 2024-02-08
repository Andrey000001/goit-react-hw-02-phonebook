import { Component } from 'react';
import ContactsForm from '../ContactForm/ContactForm';
import { Container, TitlePhonebook } from './App.styled';
class App extends Component {
  render() {
    return (
      <Container>
        <TitlePhonebook>Phonebook</TitlePhonebook>
        <ContactsForm />
      </Container>
    );
  }
}

export default App;
