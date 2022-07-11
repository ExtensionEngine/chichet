module.exports = {
  up(queryInterface) {
    return queryInterface.bulkInsert('rooms', [
      { title: 'Good music', description: 'We love good music, music is our friend!' },
      { title: 'Everything', description: 'Songs for everyone' },
      { title: 'Classic > Modern', description: "H're we hark to all the fusty classics of the w'rld" },
      { title: 'Elitist', description: "Don't join" },
      { title: 'Abstract', description: '④ⶦ⾕⨠≪⠣⟍⢍⩤⾳₷⊼⼪➃' },
    ]);
  },

  async down(queryInterface) {
    return queryInterface.bulkDelete('rooms', null, {});
  },
};
