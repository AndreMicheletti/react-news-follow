import React from 'react';
import { Button, Card, Headline, Keyword } from './common';
import API from "../services";

// REDUX
import { connect } from 'react-redux';
import { updateFollowInput, removeFollow } from '../store/actions';

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

  renderFollowTags() {
    const { followTags, removeFollow } = this.props;
    return followTags.map((tag) => {
      return <Keyword key={tag} word={tag} onRemove={() => removeFollow(tag)}/>
    })
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
          {this.renderFollowTags()}
        </div>
        <div className="card-scroll">
          {this.renderHeadlines()}
        </div>
      </Card>
    );
  }
}

const mapStateToProps = (storeState) => {
  return {
    followTags: storeState.followTags,
    followInput: storeState.followInput
  };
};

export default connect(mapStateToProps, { updateFollowInput, removeFollow })(FollowHeadlines);
