import { Component } from 'react';
import { SpanList, SpanBtn } from './ContactList.styled';
class ContactList extends Component {
  render() {
    const { deleteUse, filteredContacts, filter } = this.props;
    return (
      <ul style={{ display: filter ? 'block' : 'none' }}>
        {filteredContacts.map(
          //Добовляем только в случае если есть name and number
          ({ name, id, number }) =>
            name &&
            number && (
              <li key={id}>
                <SpanList>
                  {`--> ${name}: ${number}`}
                  <SpanBtn onClick={() => deleteUse(id)}>Delete</SpanBtn>
                </SpanList>
              </li>
            )
        )}
      </ul>
    );
  }
}

export default ContactList;
