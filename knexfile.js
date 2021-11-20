// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      port: 5432,
      user: 'user',
      password: '1234',
      database: 'db'
    },
    debug: false,
    pool: {
      min: 10,
      max: 10000
    }
  }
};
