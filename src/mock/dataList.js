import Mock from 'mockjs';

const dataList = require('./data_list.json');

module.exports = (baseUrl) => {
  Mock.mock(new RegExp(`^${baseUrl}/template?`), dataList);
};
