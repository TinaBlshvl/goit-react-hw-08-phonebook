import css from '../Filter/Filter.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { handleFilter } from 'redux/contacts/slice';
import { selectFilter } from 'redux/contacts/selectors';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleChange = event => {
    dispatch(handleFilter(event.target.value));
  };

  return (
    <section className={css.section}>
      <p className={css.header}>Find contact by name</p>
      <input
        className={css.input}
        type="text"
        name="filter"
        value={filter}
        onChange={handleChange}
      />
    </section>
  );
};
