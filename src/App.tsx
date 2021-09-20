import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { rootReducer } from './modules/app';

import { Categories } from './components';
import { Quiz } from './components';

import { Container, TopBar } from './App.styles';

const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => {
  return (
    <Provider store={store}>
      <TopBar>Quiz Mania</TopBar>
      <Container>
        <Router>
          <Route exact path="/">
            <Categories />
          </Route>
          <Route path="/quiz">
            <Quiz />
          </Route>
        </Router>
      </Container>
    </Provider>
  );
};

export default App;
