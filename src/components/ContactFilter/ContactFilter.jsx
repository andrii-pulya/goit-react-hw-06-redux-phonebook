import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import * as actions from '../../redux/phonebook/phonebook-actions'
import {
  ContactFilterContainer,
  ContactFilterInput,
  ContactFilterName,
} from './ContactFilter.styled'

function ContactFilter({ filter, filterContact }) {
  return (
    <ContactFilterContainer>
      <ContactFilterName>Find contact by name</ContactFilterName>
      <ContactFilterInput
        type="text"
        name="filter"
        autoComplete="off"
        value={filter}
        onChange={filterContact}
      />
    </ContactFilterContainer>
  )
}

const mapStateToProps = (state) => ({
  filter: state.filter,
})

const dispatchToProps = (dispatch) => ({
  filterContact: (e) => dispatch(actions.filterContact(e.target.value)),
})

export default connect(mapStateToProps, dispatchToProps)(ContactFilter)

ContactFilter.propTypes = {
  filter: PropTypes.string,
  filterContact: PropTypes.func.isRequired,
}
