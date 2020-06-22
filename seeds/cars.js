
exports.seed = async function(knex) {
 await knex("cars").insert([
   {make: "Toyota", model: "Rav4", mileage: 155335, vin: "1HGBH41JXMN109186", transmission_type: "Auto", status: "Clean" },
   {make: "Honda", model: "Civic", mileage: 45000, vin: "1HGBH41JXMN109868", transmission_type: "Manual", status: "salvage" },
   {make: "Kia", model: "Sorento", mileage: 154545, vin: "1NNBH41JXMN10000", transmission_type: "Auto", status: "" },
   {make: "Toyota", model: "Rav4", mileage: 155335, vin: "1HGBH41JXMN109186", transmission_type: "", status: "Clean" },
   {make: "BMW", model: "X5", mileage: 30000, vin: "1HGBH41JXMMMNN024", transmission_type: "", status: "Salvage" }
 ]) 
}
