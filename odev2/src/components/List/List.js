import React from 'react';

function List(props) {
  // todos list render
  let todosListRender = props.todos.map((item, index) => {
    if (item.text !== '') {
      return (
        props.filterCheckHandler(item) && (
          <li className={item.status ? 'completed' : ''} key={index}>
            <div className='view'>
              <input
                className='toggle'
                name=''
                type='checkbox'
                checked={item.status}
                onChange={() => props.listCheckboxToggleHandler(index)}
              />
              <label>{item.text}</label>
              <button
                className='destroy'
                onClick={() => props.listDestroyButtonClickHandler(index)}
              >
                {' '}
              </button>
            </div>
          </li>
        )
      );
    }
    return false;
  });

  return (
    <div className='main'>
      <input
        property='toggleAll'
        id='toggle-all'
        className='toggle-all'
        type='checkbox'
        onClick={props.listCheckboxAllToggle}
      />

      <label htmlFor='toggle-all'>Mark all as complete</label>

      <ul className='todo-list'>{todosListRender}</ul>
    </div>
  );
}

export default List;
