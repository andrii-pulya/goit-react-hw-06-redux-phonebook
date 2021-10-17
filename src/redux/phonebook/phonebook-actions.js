import { nanoid } from 'nanoid'

import actionTypes from './phonebook-types'

export const addContact = (name, number) => ({
  type: actionTypes.ADD_CONTACT,
  payload: {
    id: nanoid(),
    name: name,
    number: number,
  },
})

export const deleteContact = (id) => ({
  type: actionTypes.DELETE_CONTACT,
  payload: id,
})

export const filterContact = (value) => ({
  type: actionTypes.FILTER_CONTACT,
  payload: value,
})
