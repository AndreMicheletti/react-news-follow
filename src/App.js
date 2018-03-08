import React, { Component } from 'react';
import FollowHeadlines from './components/FollowHeadlines';
import TopHeadlines from './components/TopHeadlines';
import FollowForm from './components/FollowForm';
import './App.css';

class App extends Component {

  state = {
    following: ''
  };

  onAddFollow(follow) {
    console.log(follow);
    this.setState({ following: follow })
  }

  changeFollowing(newWord) {
    this.setState({ following: newWord });
  }

  render() {
    return (
      <div>
        <div className="app-header">
          <h1>News Follow</h1>
        </div>
        <div className="app-container">
          <div className="app">
            <FollowForm onAddClick={this.onAddFollow.bind(this)}/>
            <TopHeadlines/>
            <FollowHeadlines following={this.state.following} changeFollowing={this.changeFollowing.bind(this)}/>
          </div>
        </div>
        <div className="app-footer">
          <h2>Powered by <a href="https://newsapi.org/" target="_blank" rel="noopener noreferrer">NewsAPI.org</a></h2>
        </div>
      </div>
    );
  }
}

export default App;
