import React from 'react';
import { Button, Card, Headline, Keyword } from './common';
import API from "../services";

class FollowHeadlines extends React.PureComponent {

  state = {
    articles: null
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.following) {
      this.loadFollowHeadlines(nextProps);
    }
  }

  loadFollowHeadlines({ following }) {
    this.setState({ articles: [] });
    API.getByQuery(following).then((body) => {
      console.log(body);
      this.setState({ articles: body.articles });
    });
  }

  renderHeadlines() {
    const { articles } = this.state;
    if (articles === null) {
      return (<p>Type something and click add</p>)
    } else if (articles.length <= 0) {
      return (<p>Loading...</p>)
    } else {
      return articles.map((article, i) => {
        return (<Headline key={i} {...article}/>)
      })
    }
  }

  render() {
    const { following, changeFollowing } = this.props;
    const { articles } = this.state;
    return (
      <Card
        title="This is follow headlines"
        className="follow-headlines"
        headerLeft={articles &&
          (<Button onClick={() => this.loadFollowHeadlines({ following })}>
            Reload
          </Button>)}>
        <div className="keywords">
          {following && <Keyword word={following} onRemove={changeFollowing}/>}
        </div>
        <div className="card-scroll">
          {this.renderHeadlines()}
        </div>
      </Card>
    );
  }
}

export default FollowHeadlines;