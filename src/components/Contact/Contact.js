import PropTypes from 'prop-types';
import s from 'components/Contact/Contact.module.css';

export default function Contact ({ id, name, number, onDelete }) {
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
  
Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
