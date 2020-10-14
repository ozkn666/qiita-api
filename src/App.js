/**
 * アプリケーション全体の設定(ルーティング、認証認可)をまとめたコンポーネント
 */

import React from 'react';
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

// CSSのインポート
import './scss/style.scss'

// 関数のインポート
import Authentication from './modules/Authentication'

const App = () => {

  // アプリケーションの認証認可を確認
  Authentication()

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={PostList} />
        <Route exact path="/posts/:id" component={PostDetail} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
