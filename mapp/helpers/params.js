// chích xuất các thành phần của đối tượng
// nếu có thì trả về param[property], còn không thì trả về defaultValue
getParam = (param, property, defaultValue) => {
  if (param.hasOwnProperty(property) && param[property] !== undefined) {
    return param[property];
  }
  return defaultValue;
};

module.exports = {
  getParam,
};
