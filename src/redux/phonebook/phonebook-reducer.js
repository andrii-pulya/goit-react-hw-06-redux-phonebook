import { combineReducers } from 'redux'

import actionTypes from './phonebook-types'

const itemsInitialState = JSON.parse(
  window.localStorage.getItem('contacts'),
) ?? [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
]

const itemsReducer = (state = itemsInitialState, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_CONTACT:
      if (state.find((contact) => contact.name === payload.name)) {
        alert(`${payload.name} is already in contacts`)
        return false
      }
      return [payload, ...state]

    case actionTypes.DELETE_CONTACT:
      return [...state.filter((contact) => contact.id !== payload)]

    default:
      return state
  }
}

const filterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case actionTypes.FILTER_CONTACT:
      return payload

    default:
      return state
  }
}

const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
})

export default contactsReducer
