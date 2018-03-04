import React from 'react';
import {
  Headline,
  Card,
  Button
} from "./common";
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
      <Card
        title="This is top headlines"
        className="top-headlines"
        headerLeft={
          <Button onClick={() => this.loadTopHeadlines()}>
            Reload
          </Button>}>
        <div className="card-scroll">
          {this.renderHeadlines()}
        </div>
      </Card>
    );
  }
}

export default TopHeadlines;