import React, { useState } from 'react';
import Form from '../components/Form/Form';
import Header from '../components/Header/Header';
import List from '../components/List/List';
import Footer from '../components/Footer/Footer';

function TodoBuilder() {
  const [form, setForm] = useState({ text: '', status: false });
  const [todos, setTodos] = useState([{ text: '', status: '' }]);
  const [selectedButton, setSelectedButton] = useState('all');

  // form submit handler function
  const formSubmitHandler = (e) => {
    if (form.text !== '') {
      setTodos([...todos, form]);
      setForm({ text: '', status: false });
    }
    e.preventDefault();
  };

  // form input onChange handler function
  const inputOnChangeHandler = (e) => {
    setForm({ ...form, text: e.target.value });
  };

  // todos list checkbox toggle onChange handler function
  const listCheckboxToggleHandler = (index) => {
    const newTodos = [...todos];
    newTodos[index].status = !newTodos[index].status;
    setTodos(newTodos);
  };

  // todos list all checkbox toggle onClick handler function
  const listCheckboxAllToggle = () => {
    const newTodos = [...todos];
    newTodos.forEach((item) => {
      item.status = !item.status;
    });
    setTodos(newTodos);
  };

  // todos list remove item
  const listDestroyButtonClickHandler = (index) => {
    const newTodos = todos.filter((todo, i) => i !== index);
    setTodos(newTodos);
  };

  // clear completed button onClick function
  const clearCompletedHandler = () => {
    const filteredTodos = todos.filter((item) => !item.status);
    setTodos(filteredTodos);
  };

  // list filter check
  const filterCheckHandler = (item) => {
    switch (selectedButton) {
      case 'all':
        return true;
      case 'active':
        return !item.status;
      case 'completed':
        return item.status;
      default:
        return false;
    }
  };

  // footer left item count function
  const leftCount = (todos) => {
    let count = 0;
    count = todos.filter((item) => !item.status).length;

    return count <= 0 ? 0 : count - 1;
  };

  // footer filter handler function
  const filterHandler = (filter, selectedButton) => {
    setSelectedButton(filter);
  };

  return (
    <>
      <div className='todoapp'>
        <Header></Header>
        <Form
          formSubmitHandler={formSubmitHandler}
          textChangeHandler={inputOnChangeHandler}
          formValue={form.text}
        ></Form>
        <List
          todos={todos}
          listCheckboxToggleHandler={listCheckboxToggleHandler}
          listCheckboxAllToggle={listCheckboxAllToggle}
          listDestroyButtonClickHandler={listDestroyButtonClickHandler}
          filterCheckHandler={filterCheckHandler}
        >
          {' '}
        </List>
        <Footer
          clearCompletedHandler={clearCompletedHandler}
          leftCount={leftCount(todos)}
          selected={selectedButton}
          filterHandler={filterHandler}
        ></Footer>
      </div>
    </>
  );
}

export default TodoBuilder;
