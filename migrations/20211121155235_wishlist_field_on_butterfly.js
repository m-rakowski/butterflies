
exports.up = async function(knex) {
  await knex.raw(`
      ALTER TABLE butterfly
          ADD COLUMN on_the_wishlist BOOLEAN;
  `)
};

exports.down = async function(knex) {
  await knex.raw(`
    ALTER TABLE butterfly 
    DROP COLUMN on_the_wishlist CASCADE
    `)
};
