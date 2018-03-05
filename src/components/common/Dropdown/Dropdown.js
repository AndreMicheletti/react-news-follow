import React from 'react';
import './Dropdown.css'

export const Dropdown = (props) => {
  const myProps = { ...defaultProps, ...props };
  return (
    <div className="dropdown" style={{ display: myProps.display ? 'absolute' : 'none' }}>
      {myProps.items.map((v) => {
        return (
          <a className="dropdown-item" key={v} onClick={() => myProps.onClickItem(v)}>
            {v}
          </a>
        );
      })}
    </div>
  );
};

const defaultProps = {
  display: false,
  items: [],
  onClickItem: (v) => console.log('clicked item ', v)
};