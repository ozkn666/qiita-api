/**
 * URLのクエリパラメータを取得し、
 * オブジェクト形式に変換する関数
 * 
 * @returns {Object}
 */

const formatQueryParameter = () => {
  // パラメータの値を格納するオブジェクトを用意
  let queryObject = {};

  // パラメータを取得
  let queryString = window.location.search

  // パラメータがない場合は、空のオブジェクトを返す
  if (!queryString) {
    return queryObject
  }

  // パラメータ文字列先頭の?をとる
  queryString = queryString.substring(1);
  
  // パラメータを&で分割し、配列に直す
  let parameters = queryString.split('&');

  // パラメータの配列をオブジェクトに直す
  for (let i = 0; i < parameters.length; i++) {
    let element = parameters[i].split('=');
    let paramName = decodeURIComponent(element[0]);
    let paramValue = decodeURIComponent(element[1]);
    queryObject[paramName] = paramValue;
  }

  return queryObject
}

export default formatQueryParameter
