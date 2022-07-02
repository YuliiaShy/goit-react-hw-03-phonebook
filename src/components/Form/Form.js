import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from 'components/Form/Form.module.css';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  inputChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  formSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;
    this.props.onSubmit(name, number);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.formSubmit} className={s.form}>
        <label htmlFor="name" className={s.label}>
          Name
          <input
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            onChange={this.inputChange}
            className={s.input}
            required
          />
        </label>
        <label htmlFor="number" className={s.label}>
          Number
          <input
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            onChange={this.inputChange}
            className={s.input}
            required
          />
        </label>
        <button
          type="submit"
          className={s.button}
          disabled={number && name ? false : true}
        >
          Add contact
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default Form;
