const MOCK_URL = `${window.location.protocol}//mock.com`;

const context = require.context('./', false, /\.js$/);
const keys = context.keys()
  .filter(item => (item !== './index.js'));
for (let i = 0; i < keys.length; i++) {
  context(keys[i])(MOCK_URL);
}

