import React from 'react';

class Headline extends React.Component {
  render() {
    return (
      <a className="headline-card" href={this.props.url}>
        <div className="headline-title">
            <h2>{this.props.title}</h2>
        </div>
        <div className="headline-content">
          <p>{this.props.description}</p>
          <span className="note">{this.props.publishedAt}</span>
        </div>
      </a>
    );
  }
}

export default Headline;