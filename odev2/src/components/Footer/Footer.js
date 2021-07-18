import React from 'react';

function Footer(props) {
  return (
    <div>
      <div className='footer'>
        <span className='todo-count'>
          <strong>{props.leftCount} </strong>
          items left
        </span>

        <ul className='filters'>
          <li>
            <button
              className={props.selected === 'all' ? 'selected' : ''}
              onClick={() => props.filterHandler('all')}
            >
              All
            </button>
          </li>
          <li>
            <button
              className={props.selected === 'active' ? 'selected' : ''}
              onClick={() => props.filterHandler('active')}
            >
              Active
            </button>
          </li>
          <li>
            <button
              className={props.selected === 'completed' ? 'selected' : ''}
              onClick={() => props.filterHandler('completed')}
            >
              Completed
            </button>
          </li>
        </ul>

        <button
          className='clear-completed'
          onClick={props.clearCompletedHandler}
        >
          Clear completed
        </button>
      </div>
    </div>
  );
}

export default Footer;
