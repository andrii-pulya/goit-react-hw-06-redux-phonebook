import './App.css'

import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import AddContactForm from './components/AddContactForm/AddContactForm.jsx'
import ContactList from './components/ContactList/ContactList.jsx'
import { PageWrapper } from './components/PageWrapper/PageWrapper.styled.jsx'
import ContactFilter from './components/ContactFilter/ContactFilter.jsx'

function App({ contacts }) {
  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts])

  return (
    <PageWrapper>
      <AddContactForm />
      <ContactFilter />
      <ContactList />
    </PageWrapper>
  )
}

const mapStateToProps = (state) => ({
  contacts: state.contacts.items,
  filter: state.contacts.filter,
})

export default connect(mapStateToProps, null)(App)

App.propTypes = {
  contacts: PropTypes.array.isRequired,
}
