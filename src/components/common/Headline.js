import React from 'react';
import './Headline.css';

const Headline = (props) => {
  return (
    <a className="headline-card" href={props.url}>
      <div className="headline-title">
          <h2>{props.title}</h2>
      </div>
      <div className="headline-content">
        <p>{props.description}</p>
        <p className="note">{props.publishedAt}</p>
      </div>
    </a>
  );
};

export { Headline };