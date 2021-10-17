import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import contactsReducer from './redux/phonebook/phonebook-reducer'

const rootReducer = combineReducers({
  contacts: contactsReducer,
})

const store = createStore(rootReducer, composeWithDevTools())

export default store

// const initialState = {
//   contacts: {
//     items: JSON.parse(window.localStorage.getItem('contacts')) ?? [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//   },
// }

// const reducer = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case 'addContactForm/AddContact':
//       if (
//         state.contacts.items.find((contact) => contact.name === payload.name)
//       ) {
//         alert(`${payload.name} is already in contacts`)
//         return false
//       }
//       return {
//         ...state,
//         contacts: {
//           ...state.contacts,
//           items: [payload, ...state.contacts.items],
//         },
//       }
//     case 'contactList/DeleteContact':
//       return {
//         ...state,
//         contacts: {
//           ...state.contacts,
//           items: [
//             ...state.contacts.items.filter((contact) => contact.id !== payload),
//           ],
//         },
//       }
//     case 'contactFilter/FilterContact':
//       return {
//         ...state,
//         contacts: {
//           ...state.contacts,
//           filter: payload,
//         },
//       }
//     default:
//       return state
//   }
// }
