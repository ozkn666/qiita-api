import React from "react"
import {TOKEN_NAME} from '../../constants/common'
import Authentication from '../../modules/Authentication'

const Logout = () => {

  const logoutApp = event => {
    event.preventDefault()

    // モーダルダイアログを表示し、OKならログアウト処理を実行
    let isLogut = window.confirm("ログアウトしてよろしいですか？")
    if (!isLogut) return

    // トークンを削除
    sessionStorage.removeItem(TOKEN_NAME)

    /* アプリケーションの認証認可を確認する
    トークンがなくなっているので、認可ページにリダレクトがかかる */
    Authentication()
  }

  return (
    <button className="c-btn__sub" onClick={logoutApp}>Logout</button>
  )
}

export default Logout
