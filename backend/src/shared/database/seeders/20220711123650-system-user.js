module.exports = {
  up(queryInterface) {
    return queryInterface.bulkInsert('users', [
      {
        firstName: null,
        lastName: null,
        username: 'system',
        password: '',
      },
    ]);
  },

  down(queryInterface) {
    return queryInterface.bulkDelete('users', null, {});
  },
};
