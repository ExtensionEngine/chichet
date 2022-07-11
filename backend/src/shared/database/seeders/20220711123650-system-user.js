module.exports = {
  up(queryInterface) {
    return queryInterface.bulkInsert('users', [
      {
        firstName: null,
        lastName: null,
        nickname: 'system',
        password: '',
      },
    ]);
  },

  down(queryInterface) {
    return queryInterface.bulkDelete('users', null, {});
  },
};
