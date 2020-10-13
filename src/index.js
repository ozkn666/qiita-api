import React from 'react';
import ReactDOM from 'react-dom';
import Header from './component/Parts/Header';
import Footer from './component/Parts/Footer';
import PostList from './component/Posts/List'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <PostList />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
