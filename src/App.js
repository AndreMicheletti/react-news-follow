import React, { Component } from 'react';
import FollowHeadlines from './components/FollowHeadlines';
import TopHeadlines from './components/TopHeadlines';
import FollowForm from './components/FollowForm';
import './App.css';

// STORE
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div>
          <div className="app-header">
            <h1>News Follow</h1>
          </div>
          <div className="app-container">
            <div className="app">
              <FollowForm />
              <TopHeadlines/>
              <FollowHeadlines/>
            </div>
          </div>
          <div className="app-footer">
            <h2>Powered by <a href="https://newsapi.org/" target="_blank" rel="noopener noreferrer">NewsAPI.org</a></h2>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
