import React from 'react';
import './Card.css'

const Card = (props = defaultProps) => {
  return (
    <div className={`main-card ${props.className}`}>
      <div className="main-card-header">
        <h2>{props.title}</h2>
        <div className="ruler" />
        {props.headerLeft}
      </div>
      {props.children}
    </div>
  )
};

const defaultProps = {
  title: "My Title Card",
  headerLeft: null
};

export { Card };