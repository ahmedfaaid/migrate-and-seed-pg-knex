const { uuid } = require('uuidv4');

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('listing')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('listing').insert([
        {
          id: uuid(),
          title: 'Great place, great location',
          address1: '500 Kingston Rd',
          city: 'Toronto',
          province: 'ON',
          postalCode: 'M4L 1V3',
          description: 'You will love it',
          disposition: 'sale',
          price: 410000,
          longitude: -79.302742,
          latitude: 43.678001,
          imageId: 'c840d6b6-c97f-4196-bb34-894597934486'
        },
        {
          id: uuid(),
          title: 'You will love it',
          address1: '26 Goodwood Park Cres',
          city: 'East York',
          province: 'ON',
          postalCode: 'M4C 2G5',
          description: 'Great location, nice unit',
          disposition: 'rent',
          price: 1600,
          longitude: -79.299187,
          latitude: 43.695019,
          imageId: '6ce451b4-0d2f-4446-8de3-6c84ea2c42e1'
        },
        {
          id: uuid(),
          title: 'Close to amenities',
          address1: '717 Broadview Ave',
          city: 'Toronto',
          province: 'ON',
          postalCode: 'M4K 2P5',
          description: 'Very close to downtown and the Danforth',
          disposition: 'rent',
          price: 1575,
          longitude: -79.357468,
          latitude: 43.675171,
          imageId: '11a16091-4d0c-4859-bac4-b50e11e9d4ee'
        }
      ]);
    });
};
