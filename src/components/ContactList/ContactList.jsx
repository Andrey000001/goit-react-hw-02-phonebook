import { Item, Name, Button, Number } from './ContactList.styled';
import { FaGenderless } from 'react-icons/fa';

export const ContactList = ({ dataContact, deleteUser }) => {
  return (
    <ul>
      {dataContact.map(({ name, number, id }) => (
        <Item key={id}>
          <FaGenderless />
          <Name>{name}:</Name>
          <Number>{number}</Number>
          <Button onClick={() => deleteUser(id)}>Delete</Button>
        </Item>
      ))}
    </ul>
  );
};
