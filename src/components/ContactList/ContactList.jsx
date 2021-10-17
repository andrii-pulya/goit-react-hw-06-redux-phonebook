import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import * as actions from '../../redux/phonebook/phonebook-actions'
import { ContactListContainer, Headline } from './ContactList.styled'
import {
  ContactItemContainer,
  ContactItem,
  ItemName,
  DeleteBtn,
} from '../ContactItem/ContactItem.styled'

function ContactList({ contacts, filter, onDeleteContact }) {
  return (
    <>
      <ContactListContainer>
        {filter?.length === 0 && contacts.length === 0 ? (
          <Headline>You have not contacts saved</Headline>
        ) : filter?.length !== 0 && contacts.length === 0 ? (
          <h1> Can not find the Contact</h1>
        ) : (
          <Headline>Contacts</Headline>
        )}

        {contacts.map((contact) => (
          <ContactItem key={contact.id}>
            <ContactItemContainer>
              <ItemName>
                {contact.name}
                {': '}
                {contact.number}
              </ItemName>
              <DeleteBtn
                onClick={() => onDeleteContact(contact.id)}
                type="button"
              >
                Delete
              </DeleteBtn>
            </ContactItemContainer>
          </ContactItem>
        ))}
      </ContactListContainer>
    </>
  )
}

const mapStateToProps = (state) => {
  const { items, filter } = state.contacts
  const normalizedFilter = filter.toLowerCase()
  const visibleContacts = items.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedFilter),
  )

  return {
    contacts: visibleContacts,
    filter: state.contacts.filter,
  }
}

const dispatchToProps = (dispatch) => ({
  onDeleteContact: (id) => dispatch(actions.deleteContact(id)),
})

export default connect(mapStateToProps, dispatchToProps)(ContactList)

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  filter: PropTypes.string,
  onDeleteContact: PropTypes.func.isRequired,
}
