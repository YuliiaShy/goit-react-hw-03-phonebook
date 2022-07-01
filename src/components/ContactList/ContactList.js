import PropTypes from 'prop-types';
import Contacts from 'components/Contacts/Contacts';
import s from 'components/ContactList/ContactList.module.css';

export default function ContactList ({ list, onDelete}) {
  return (
    <ul className={s.list}>
      {list.map(({ id, name, number }) => (
        <Contacts
          key={id}
          id={id}
          name={name}
          number={number}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}
  
ContactList.propTypes = {
    onDelete: PropTypes.func.isRequired,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  )
};

