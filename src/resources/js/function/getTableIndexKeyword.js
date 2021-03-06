/**
  * 轉換圖表索引數關鍵字
  * @param { Encode：Number, Decode：String } payload
  * @param { Boolean } isEncode
  * @param { Object } $param
  * @returns { Encode：String, Decode：Number }
  */

module.exports = function (payload, isEncode, $param) {
  if (isEncode === true && typeof(payload) !== 'number') return;
  if (isEncode === false && typeof(payload) !== 'string') return;

  let keyWords = $param.tableKeyword;
  return isEncode === true ? keyWords[payload] : keyWords.indexOf(payload);
};