/**
 * Qiitaアカウントが認証済みかチェックする関数
 * 
 * (1)トークンがある
 * 認証済みなので、処理は行わない
 * 
 * (2)トークンがなく、クエリパラメータがある
 * トークンのリクエストを行い、セッションに保存
 * 
 * (3)トークンがなく、クエリパラメータがない
 * Qiitaの認可ページでログイン
 * 
 * @returns {void}
 */

import axios from 'axios';
import { CLIENT_ID, CLIENT_SECRET, CLIENT_SCOPE, CLIENT_STAT, AUTH_URL, TOKEN_URL, TOKEN_NAME } from '../constants/common'
import formatQueryParameter from './FormatQueryParameter'

const Authentication = () => {

  // Qiitaのトークンがセッションに保存されているか確認する
  let token = sessionStorage.getItem(TOKEN_NAME);

  // トークンがあれば、認可認証を行わない
  if(token) return

  // クエリパラメータをオブジェクトで取得
  let queryObject = formatQueryParameter()

  // アプリケーション認可ページのURL
  const authorizePage = AUTH_URL + "?client_id=" + CLIENT_ID+"&scope="+CLIENT_SCOPE+"&state="+CLIENT_STAT

  /**
   * アプリケーションが認可されていない場合
   * つまり、クエリパラメータに適切な値が付与されていない場合は認可ページへ
   */

  if (queryObject.code === null || queryObject.state !== CLIENT_STAT) {
    window.location.href = authorizePage
  }


  /**
   * アプリケーションが認可されている場合
   */

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
  .catch(error => {
    /**
     * ログイン後はトークン発行リクエスト可能なクエリパラメータがURLに付いている状態。
     * この状態でログアウト処理をすると、トークン発行リクエストを送ってしまうので、
     * この場合は認可ページにリダイレクトをかける
     */
    window.location.href = authorizePage
  })
}

export default Authentication
