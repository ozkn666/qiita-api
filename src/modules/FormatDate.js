/**
 * APIから取得した日付データの文字列を年月日の文字列に変換する
 * @param {String} dateString 
 * @returns {String}
 */
const formatDate = (dateString) => {
  const date = new Date(dateString);
  return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`
}

export default formatDate
