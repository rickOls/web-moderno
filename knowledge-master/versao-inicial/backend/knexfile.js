// esse arquivo é gerado com terminal: knex init dentro da pasta backend
// usar tbm o knex migrate:make create_table_users para criar a pasta migrations depois knex migrate:make create_table_categories depois knex migrate:make create_table_articles

//para o postgres 12 segir criação do user e dar grante ao user na tabela knowwledge

// após configurar as migratiosn rodar knex migrate:latest ou rollback para voltar
// Update with your config settings.

module.exports = { 
    client: 'postgresql',
    connection: {
      database: 'knowledge',
      user:     'ricardo',
      password: '5993'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
};
