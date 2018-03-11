import React from 'react';
import {
  Headline,
  Card,
  Button
} from "./common";

import { fetchTopHeadlines } from "../store/actions";
import { connect } from 'react-redux';

class TopHeadlines extends React.Component {

  componentWillMount() { this.loadTopHeadlines(); }

  loadTopHeadlines() { this.props.fetchTopHeadlines(); }

  renderHeadlines() {
    const { topHeadlines } = this.props;
    if (topHeadlines === undefined || topHeadlines.length <= 0) {
      return (<p>Loading...</p>)
    } else {
      return topHeadlines.map((article, i) => {
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

const mapStateToProps = ({ data }) => {
  return {
    topHeadlines: data.topHeadlines
  }
};

export default connect(mapStateToProps, { fetchTopHeadlines })(TopHeadlines);