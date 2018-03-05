import React from 'react';
import './Button.css';

class Button extends React.PureComponent {
  render() {
    let parsedProps = {...this.props};
    const className = `btn ${parsedProps.size} ${parsedProps.textInputSubmit ? 'text' : ''}`;
    delete parsedProps['textInputSubmit'];
    return (
      <button className={className} {...parsedProps}>
        {parsedProps.children}
      </button>
    );
  }
}

export { Button };