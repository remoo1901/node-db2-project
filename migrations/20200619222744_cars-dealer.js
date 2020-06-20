const { table } = require("../data/config");

exports.up = async function(knex) {
  await knex.schema.createTable("cars", (table) => {
      table.increments("id")
      table.text("make").notNull()
      table.text("model").notNull()
      table.integer("mileage").notNull()
      table.text("vin").notNull()
      table.text("transmission_type")
      table.text("status")

  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("cars")
};
