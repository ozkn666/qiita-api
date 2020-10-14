// Qiita APIのURL
export const BASE_URL = "https://qiita.com/api/v2/"

// 認証・認可に必要な定数
export const CLIENT_ID =     "cef3dbae0a412a051da06a6e47a15621e041d7ed"
export const CLIENT_SECRET = "f6bacfc0b4fb51fbc0369a96faa4b6d9087e34e8"
export const CLIENT_SCOPE =  "read_qiita"
export const CLIENT_STAT =   "ABC"

// Qiitaの認可ページURL
export const AUTH_URL = 'https://qiita.com/api/v2/oauth/authorize'

// QiitaにトークンをリクエストするURL
export const TOKEN_URL = 'https://qiita.com/api/v2/access_tokens'

// セッションに保存するトークン名
export const TOKEN_NAME = "QIITA_TOKEN"
