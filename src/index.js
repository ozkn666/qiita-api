import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// コンポーネント
import Header from './component/Parts/Header';
import Footer from './component/Parts/Footer';
import PostList from './component/Posts/List'
import PostDetail from './component/Posts/Detail'

ReactDOM.render(
  <Router>
    <Header />
    <Switch>
      <Route exact path="/" component={PostList} />
      <Route exact path="/posts/:id" component={PostDetail} />
    </Switch>
    <Footer />
  </Router>,
  document.getElementById('root')
);

serviceWorker.unregister();
