import PropTypes from 'prop-types';
import { Item, Name, Button, Number } from './ContactList.styled';
import { FaGenderless } from 'react-icons/fa';

export const ContactList = ({ findContact, deleteUser }) => {
  return (
    <ul>
      {findContact.map(({ name, number, id }) => (
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

ContactList.propTypes = {
  findContact: PropTypes.func.isRequired,
  deleteUser: PropTypes.func.isRequired,
};
