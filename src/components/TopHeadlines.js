import React from 'react';
import Headline from './Headline';
import API from '../services';

class TopHeadlines extends React.Component {

  state = { articles: [] };

  componentWillMount() {
    this.loadTopHeadlines();
  }

  loadTopHeadlines() {
    this.setState({ articles: [] });
    API.getLatest().then((body) => {
      console.log(body);
      this.setState({ articles: body.articles });
    });
  }

  renderHeadlines() {
    const { articles } = this.state;
    if (articles.length <= 0) {
      return (<p>Loading...</p>)
    } else {
      return articles.map((article, i) => {
        return (<Headline key={i} {...article}/>)
      })
    }
  }

  render() {
    return (
      <div className="main-card top-headlines">
        <div className="main-card-header">
          <h2>This is top headlines</h2>
          <div className="ruler" />
          <button onClick={() => this.loadTopHeadlines()} className="btn btn-sm">
            Reload
          </button>
        </div>
        <div className="card-scroll">
          {this.renderHeadlines()}
        </div>
      </div>
    );
  }
}

export default TopHeadlines;