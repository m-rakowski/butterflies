
exports.up = async function(knex) {
  await knex.raw(`
    CREATE TABLE butterfly(
      id serial NOT NULL,
      name text UNIQUE NOT NULL,
      species text NOT NULL,
      link text NOT NULL,
      image_url text NOT NULL,
      CONSTRAINT pk_beer PRIMARY KEY (id)
    )
  `)
};

exports.down = async function(knex) {
  await knex.raw(`DELETE TABLE butterfly`)
};
