import React from 'react';
import './Card.css'

const Card = ({ title, headerLeft, className, children, ...props} = defaultProps) => {
  return (
    <div className={`main-card ${className}`}>
      <div className="main-card-header">
        <h2>{title}</h2>
        <div className="ruler" />
        {headerLeft}
      </div>
      {children}
    </div>
  )
};

const defaultProps = {
  title: "My Title Card",
  headerLeft: null
};

export { Card };