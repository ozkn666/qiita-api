import { useEffect } from 'react';
import axios from 'axios';
import { CLIENT_ID, CLIENT_SECRET, CLIENT_SCOPE, CLIENT_STAT, AUTH_URL, TOKEN_URL, TOKEN_NAME } from '../constants/common'
import formatQueryParameter from './FormatQueryParameter'

const Authentication = () => {

  useEffect(() => {
    /**
     * (1)トークンがある
     * 認証済みなので、処理は行わない
     * 
     * (2)トークンがなく、クエリパラメータがある
     * トークンのリクエストを行い、セッションに保存
     * 
     * (3)トークンがなく、クエリパラメータがない
     * Qiitaの認可ページでログイン
     */
    

    // Qiitaのトークンがセッションに保存されているか確認する
    let token = sessionStorage.getItem(TOKEN_NAME);

    // トークンがあれば、認可認証を行わない
    if(token) return

    // クエリパラメータをオブジェクトで取得
    let queryObject = formatQueryParameter()

    // サイトアクセス時にクエリパラメーターがなければ、認可へ
    if (queryObject.code !== null && queryObject.state === CLIENT_STAT) {
      // アプリケーションが認可されている場合

      // トークンの発行をリクエストする
      axios.post(TOKEN_URL, {
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        code: queryObject.code
      })
      .then(response => {
        // 返却されたトークンをセッションへ保存
        sessionStorage.setItem(TOKEN_NAME, response.data.token); 
      })
    } else {
      /* アプリケーションが認可されていない場合
      つまり、クエリパラメータに適切な値が付与されていない場合は認可ページへ */
      window.location.href = AUTH_URL + "?client_id=" + CLIENT_ID+"&scope="+CLIENT_SCOPE+"&state="+CLIENT_STAT;
    }
  })
}

export default Authentication
