import React from 'react';
import moment from 'moment';
import './Headline.css';

const Headline = (props) => {
  let fomarttedDate = moment(props.publishedAt).format("dddd, MMMM Do YYYY");
  return (
    <a className="headline-card" href={props.url} target="_blank">
      <div className="headline-title">
          <h2>{props.title}</h2>
      </div>
      <div className="headline-content">
        <img src={props.urlToImage} alt={props.title}/>
        <div style={{ padding: 10 }}>
          {props.description}
        </div>
      </div>
      <div className="headline-footer">
        <p className="note">{fomarttedDate}</p>
        <p className="note">by {props.source.name}</p>
      </div>
    </a>
  );
};

export { Headline };