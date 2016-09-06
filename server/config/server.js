const path = require('path')

export default {
  http: {
    port: 1080,
    favicon: path.join(__dirname, '../src/assets/favicon.ico'),
    static: [
      {
        url: '/build', path: path.join(__dirname, '../build')
      }
    ]
  },
  session: {
    salt: 'SUPER_SALTY_YES?',
    secret: 'SUPER_SECRET_KEY_KERE',
    expires: 2 * 3600 * 1000 // 2 hours
  },
  databases: {
    mongo: 'mongodb://127.0.0.1:27017/todos'
  }
}
