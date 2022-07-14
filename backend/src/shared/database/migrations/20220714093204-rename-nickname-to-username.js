const SRC_COL = 'nickname';
const DST_COL = 'username';

module.exports = {
  up(queryInterface) {
    return queryInterface.renameColumn('users', SRC_COL, DST_COL);
  },

  down(queryInterface) {
    return queryInterface.renameColumn('users', DST_COL, SRC_COL);
  },
};
