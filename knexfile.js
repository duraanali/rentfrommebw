module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: "usemytools",
      user: "postgres",
      password: "mullen123"
    },
    migrations: {
      directory: './data/migrations',
      tableName: "knex_migrations"
    },
    seeds: {
      directory: './data/seeds',
    },
  },
  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: "./database/migrations",
      tableName: "knex_migrations"
    },
    seeds: {
      directory: "./database/seeds"
    }
  }
}