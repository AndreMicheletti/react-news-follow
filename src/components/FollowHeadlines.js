import React from 'react';
import { Card, Button } from './common';

class FollowHeadlines extends React.Component {
  render() {
    return (
      <Card
        title="This is follow headlines"
        className="follow-headlines"
        headerLeft={
          <Button onClick={this.props.onAddClick}>
            Add Follow
          </Button>}>
        <div className="card-scroll">

        </div>
      </Card>
    );
  }
}

export default FollowHeadlines;