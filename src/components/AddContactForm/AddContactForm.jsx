import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import * as actions from '../../redux/phonebook/phonebook-actions'

import {
  AddContactContainer,
  AddContactBtn,
  FormContainer,
  ItemFormLabel,
} from './AddContactForm.styled'

function AddContactForm({ onSubmit }) {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')

  function submitContacts(e) {
    e.preventDefault()
    onSubmit(name, number)
    setName('')
    setNumber('')
  }

  function handlechange(e) {
    const { name, value } = e.target
    switch (name) {
      case 'name':
        setName(value)
        break
      case 'number':
        setNumber(value)
        break
      default:
        break
    }
  }

  return (
    <>
      <AddContactContainer>
        <h1>Phonebook</h1>
        <FormContainer onSubmit={submitContacts}>
          <ItemFormLabel>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              placeholder="Put the name here"
              autoComplete="off"
              value={name}
              onChange={handlechange}
              required
            />
          </ItemFormLabel>
          <ItemFormLabel>
            Number
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              placeholder="Put the number here"
              autoComplete="off"
              value={number}
              onChange={handlechange}
              required
            />
          </ItemFormLabel>
          <AddContactBtn type="submit" text={'Add contact'} />
        </FormContainer>
      </AddContactContainer>
    </>
  )
}

const dispatchToProps = (dispatch) => ({
  onSubmit: (name, number) => dispatch(actions.addContact(name, number)),
})

export default connect(null, dispatchToProps)(AddContactForm)

FormContainer.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
