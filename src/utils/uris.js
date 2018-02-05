function getBaseUrl() {
  return `${window.location.protocol}//mock.com`;
}

export default {
  getDataList: (key) => `${getBaseUrl()}/template?key=${key}`
};
