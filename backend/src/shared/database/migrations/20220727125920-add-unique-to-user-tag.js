module.exports = {
  up(queryInterface) {
    return queryInterface.addConstraint('userTags', {
      name: 'unique_ids',
      allowNull: false,
      type: 'UNIQUE',
      fields: ['userId', 'tagId'],
    });
  },

  down(queryInterface) {
    return queryInterface.removeConstraint('userTags', 'unique_ids');
  },
};
