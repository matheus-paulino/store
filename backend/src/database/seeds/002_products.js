
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('product').del()
    .then(function () {
      // Inserts seed entries
      return knex('product').insert([
        { 
          product_name: 'Produto 01', 
          product_description: 'Descrição do produto 01', 
          product_price: 120 
        },
        { 
          product_name: 'Produto 02', 
          product_description: 'Descrição do produto 02', 
          product_price: 150 
        },
        { 
          product_name: 'Produto 03', 
          product_description: 'Descrição do produto 03', 
          product_price: 170
        },
        { 
          product_name: 'Produto 04', 
          product_description: 'Descrição do produto 04', 
          product_price: 160
        },
      ]);
    });
};
