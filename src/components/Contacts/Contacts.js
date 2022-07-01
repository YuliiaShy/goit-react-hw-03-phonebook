import PropTypes from 'prop-types';
import s from 'components/Contacts/Contacts.module.css';

export default function Contacts({ id, name, number, onDelete }) {
  return (
    <li className={s.items}>
      <p className={s.contacts}>
        {name}: {number}
      </p>
      <button type="button" onClick={() => onDelete(id)} className={s.buttons}>
        Delete
      </button>
    </li>
  );
}
  
Contacts.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
