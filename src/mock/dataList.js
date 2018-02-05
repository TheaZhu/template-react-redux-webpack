import Mock from 'mockjs';

const dataList = require('./data_list');

module.exports = (baseUrl) => {
  Mock.mock(new RegExp(`^${baseUrl}/template?`), dataList);
};
