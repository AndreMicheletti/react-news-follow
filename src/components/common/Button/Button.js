import React from 'react';
import './Button.css';

class Button extends React.PureComponent {
  render() {
    const { props } = this;
    const className = `btn ${props.size}`;
    return (
      <button className={className} {...props}>
        {props.children}
      </button>
    );
  }
}

export { Button };