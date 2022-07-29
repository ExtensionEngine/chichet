module.exports = {
  up(queryInterface) {
    return queryInterface.addConstraint('userTags', {
      name: 'unique_user_id_tag_id',
      allowNull: false,
      type: 'UNIQUE',
      fields: ['userId', 'tagId'],
    });
  },

  down(queryInterface) {
    return queryInterface.removeConstraint('userTags', 'unique_user_id_tag_id');
  },
};
