import React from 'react';
import { Button, Card, Headline, Keyword } from './common';

// REDUX
import { connect } from 'react-redux';
import { updateFollowInput, removeFollow, fetchFollowHeadlines } from '../store/actions';

class FollowHeadlines extends React.PureComponent {

  loadFollowHeadlines() {
    this.props.fetchFollowHeadlines(this.props.followTag);
  }

  renderHeadlines() {
    const { followHeadlines } = this.props;
    if (followHeadlines === null) {
      return (<p>Type something and click add</p>)
    } else if (followHeadlines.length <= 0) {
      return (<p>Loading...</p>)
    } else {
      return followHeadlines.map((article, i) => {
        return (<Headline key={i} {...article}/>)
      })
    }
  }

  renderFollowTags() {
    const { followTag, removeFollow } = this.props;
    if (followTag !== '') {
      return <Keyword word={followTag} onRemove={() => removeFollow()}/>
    }
  }

  render() {
    const { followHeadlines } = this.props;
    return (
      <Card
        title="This is follow headlines"
        className="follow-headlines"
        headerLeft={followHeadlines &&
          (<Button onClick={() => this.loadFollowHeadlines()}>
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

const mapStateToProps = ({ data }) => {
  return {
    followTag: data.followTag,
    followInput: data.followInput,
    followHeadlines: data.followHeadlines
  };
};

export default connect(mapStateToProps, {
  updateFollowInput,
  removeFollow,
  fetchFollowHeadlines
})(FollowHeadlines);
