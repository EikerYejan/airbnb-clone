const path = require('path')

module.exports = [
  {
    script: path.join(__dirname, './dist/apps/airbnb-clone-api/main.js'),
    name: 'app',
    exec_mode: 'cluster',
    instances: 1,
  },
]
