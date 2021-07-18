import React from 'react';

function Form(props) {
  return (
    <div className='header todoapp'>
      <form onSubmit={props.formSubmitHandler}>
        <input
          className='new-todo'
          type='text'
          onChange={props.textChangeHandler}
          value={props.formValue}
          placeholder='What needs to be done?'
          autoFocus
        />
      </form>
    </div>
  );
}

export default Form;
