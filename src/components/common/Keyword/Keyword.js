import React from 'react';
import './Keyword.css';

export const Keyword = ({ word, onRemove }) => {
  return (
    <div className="keyword-span" onClick={() => onRemove('')}>
      {word}
      <span className="keyword-close">X</span>
    </div>
  );
};
