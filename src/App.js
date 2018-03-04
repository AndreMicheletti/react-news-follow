import React, { Component } from 'react';
import FollowHeadlines from './components/FollowHeadlines';
import TopHeadlines from './components/TopHeadlines';
import './App.css';

class App extends Component {

  render() {
    return (
      <div>
        <div className="app-header">
          <h1>News Follow</h1>
        </div>
        <div className="app-container">
          <div className="app">
            <TopHeadlines/>
            <FollowHeadlines/>
          </div>
        </div>
        <div className="app-footer">
          <h2>Powered by <a href="https://newsapi.org/">NewsAPI.org</a></h2>
        </div>
      </div>
    );
  }
}

export default App;
