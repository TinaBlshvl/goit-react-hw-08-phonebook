import css from '../ContactItem/ContactsItem.module.css';

import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContactRequest } from 'redux/contacts/operations';

export const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  return (
    <>
      <li>
        <p className={css.contact}>
          {name}: {number}
        </p>
        <button
          className={css.btn}
          onClick={() => dispatch(deleteContactRequest(id))}
        >
          Delete
        </button>
      </li>
    </>
  );
};
ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
