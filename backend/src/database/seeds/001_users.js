
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'paulinomt', password: 'teste1'},
        {username: 'maykbrito', password: 'teste2'},
        {username: 'kilo12', password: 'teste12'},
        {username: 'teshs', password: 'test2e1'},
        {username: 'aaasd', password: 'tes2te1'},
      ]);
    });
};
