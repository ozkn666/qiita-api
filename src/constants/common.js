// Qiita APIのURL
export const BASE_URL = "https://qiita.com/api/v2/"

// 認証・認可に必要な定数
export const CLIENT_ID = process.env.REACT_APP_CLIENT_ID
export const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET
export const CLIENT_SCOPE = "read_qiita"
export const CLIENT_STAT = "ABC"

// Qiitaの認可ページURL
export const AUTH_URL = 'https://qiita.com/api/v2/oauth/authorize'

// QiitaにトークンをリクエストするURL
export const TOKEN_URL = 'https://qiita.com/api/v2/access_tokens'

// セッションに保存するトークン名
export const TOKEN_NAME = "QIITA_TOKEN"
