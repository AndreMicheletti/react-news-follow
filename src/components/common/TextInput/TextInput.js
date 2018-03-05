import React from 'react';
import './TextInput.css';

export const TextInput = (props) => {
  return (
    <div className="input-text" style={props.style}>
      <input type="text" {...{...props, style: null}} />
    </div>
  );
};
