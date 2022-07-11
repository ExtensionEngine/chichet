module.exports = {
  up(queryInterface) {
    return queryInterface.bulkInsert(
      'tags',
      [
        { label: 'Metal' },
        { label: 'Rock' },
        { label: 'Blues' },
        { label: 'Reggae' },
        { label: 'Pop' },
        { label: 'Rap' },
        { label: 'Jazz' },
        { label: 'Latin' },
        { label: 'Avantgarde' },
        { label: 'Classical' },
        { label: 'R&B' },
        { label: 'Lullabies' },
        { label: 'Choral' },
        { label: 'Medieval' },
        { label: 'Opera' },
        { label: 'Expressionist' },
        { label: 'Modern classical' },
        { label: 'Country' },
        { label: 'Western swing' },
        { label: 'Dance' },
        { label: 'Techno' },
        { label: 'Elevator music' },
        { label: 'Hip-hop' },
        { label: 'Gangsta rap' },
        { label: 'NWOBHM' },
        { label: 'Industrial' },
        { label: 'Christian pop' },
        { label: 'Christian rock' },
        { label: 'K-pop' },
        { label: 'New age' },
        { label: 'Progressive' },
        { label: 'Turbofolk' },
      ],
      {},
    );
  },

  down(queryInterface) {
    return queryInterface.bulkDelete('tags', null, {});
  },
};
