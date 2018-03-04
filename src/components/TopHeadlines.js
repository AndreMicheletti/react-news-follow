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
        className="top-headlines"
        title="This is top headlines"
        size="small"
        headerLeft={
          <Button onClick={() => this.loadTopHeadlines()}>
            Reload
          </Button>
        }
      >
        {this.renderHeadlines()}
      </Card>
    );
  }
}

export default TopHeadlines;