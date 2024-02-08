import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import { FormInfo ,FormLabal ,FormInput,FormButton,TitleContacts} from './ContactForm.styled';
class ContactsForm extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
    filter: '',
  };
  //Добовляем в массив нового пользователя 
  createUser = () => {
    const newUser = {
      name: this.state.name,
      number: this.state.number,
      id: nanoid(),
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newUser],
      name: '',
      number: '',
    }));
  };
//Очищаем input после отправки данных
  handleSubmitForm = (e) => {
    e.preventDefault();
    const { name, number } = e.target;
    this.checkName(name.value);
    name.value = '';
    number.value = '';
  };
  //Проверяем на совпадения
  checkName = (typingName) => {
    const faundTheSame = this.state.contacts.find(
      ({ name }) => typingName === name
    );
    if (faundTheSame) {
      Notify.info('Такой пользователь уже существует');
    } else {
      Notify.success(`Добавлен пользователь ${typingName}`);
      this.createUser();
    }
  };
  //Контролируем значения ввода 
  changeHandle = ({ currentTarget: { name, value } }) => {
    this.setState({ [name]: value });
  };

      //Контролируем значения ввода 
  filterData = ({ currentTarget: { value } }) => {
    this.setState({ filter: value });
  };
  //Удаляем пользователя 
  deleteUse = ids => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({ id }) => id !== ids),
    }));
  };
  render() {
    const { contacts, filter } = this.state;
    //Делаем проверку на совпадения
    const filteredContacts = contacts.filter(({ name }) =>
      name.toLowerCase().startsWith(filter.toLowerCase())
    );
    return (
      <div>
        <FormInfo onSubmit={this.handleSubmitForm}>
          <FormLabal htmlFor="name">Name</FormLabal>
          <FormInput
            type="text"
            name="name"
            required
            onChange={this.changeHandle}
          />
          <FormLabal htmlFor="number">Number</FormLabal>
          <FormInput
            type="tel"
            name="number"
            pattern="[0-9]*"
            required
            onChange={this.changeHandle}
          />
          <FormButton type="submit">Add contact</FormButton>
        </FormInfo>
        <TitleContacts>Contacts</TitleContacts>
        <Filter filterData={this.filterData}/>
        <ContactList filteredContacts={filteredContacts} deleteUse={this.deleteUse} filter={this.state.filter}/>
      </div>
    );
  }
}

export default ContactsForm;
