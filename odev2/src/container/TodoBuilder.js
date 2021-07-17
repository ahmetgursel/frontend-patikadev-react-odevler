import React, { useState, useEffect } from 'react';
import Form from '../components/Form/Form';
import Header from '../components/Header/Header';
import List from '../components/List/List';

function TodoBuilder() {
  const [form, setForm] = useState({ text: '', status: false });
  const [todos, setTodos] = useState('');

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  // form submit handler function
  const formSubmitHandler = (e) => {
    if (form.text !== '') {
      setTodos([...todos, form]);
      setForm({ text: '', status: false });
    } else {
    }
    e.preventDefault();
  };

  // input onChange handler function
  const inputOnChangeHandler = (e) => {
    setForm({ ...form, text: e.target.value });
  };

  return (
    <div>
      <Header></Header>
      <Form
        formSubmitHandler={formSubmitHandler}
        textChangeHandler={inputOnChangeHandler}
        formValue={form.text}
      ></Form>
      <List> </List>
      <p>footer</p>
    </div>
  );
}

export default TodoBuilder;
