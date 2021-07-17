import React from 'react';
import classes from './Form.module.css';

function Form(props) {
  return (
    <form onSubmit={props.formSubmitHandler}>
      <input
        className={classes.newTodo}
        type='text'
        onChange={props.textChangeHandler}
        value={props.formValue}
        placeholder='What needs to be done?'
        autoFocus
      />
    </form>
  );
}

export default Form;
