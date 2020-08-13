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
          longitude: -79.302742,
          latitude: 43.678001,
        },
        {
          id: uuid(),
          title: 'You will love it',
          address1: '26 Goodwood Park Cres',
          city: 'East York',
          province: 'ON',
          postalCode: 'M4C 2G5',
          description: 'Great location, nice unit',
          longitude: -79.299187,
          latitude: 43.695019,
        },
        {
          id: uuid(),
          title: 'Close to amenities',
          address1: '717 Broadview Ave',
          city: 'Toronto',
          province: 'ON',
          postalCode: 'M4K 2P5',
          description: 'Very close to downtown and the Danforth',
          longitude: -79.357468,
          latitude: 43.675171,
        }
      ]);
    });
};
