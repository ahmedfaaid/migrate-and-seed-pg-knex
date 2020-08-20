exports.seed = async function (knex) {
  return knex('image')
    .del()
    .then(function () {
      return knex('image').insert([
        {
          id: 'c840d6b6-c97f-4196-bb34-894597934486',
          filename: 'c840d6b6-c97f-4196-bb34-894597934486-stephen-leonardi',
          mimetype: 'image/jpeg',
          path:
            'images/c840d6b6-c97f-4196-bb34-894597934486-stephen-leonardi.jpg'
        },
        {
          id: '6ce451b4-0d2f-4446-8de3-6c84ea2c42e1',
          filename: '6ce451b4-0d2f-4446-8de3-6c84ea2c42e1-daniel-barnes',
          mimetype: 'image/jpeg',
          path: 'images/6ce451b4-0d2f-4446-8de3-6c84ea2c42e1-daniel-barnes.jpg'
        },
        {
          id: '11a16091-4d0c-4859-bac4-b50e11e9d4ee',
          filename: '11a16091-4d0c-4859-bac4-b50e11e9d4ee-brandon-griggs',
          mimetype: 'image/jpeg',
          path: 'images/11a16091-4d0c-4859-bac4-b50e11e9d4ee-brandon-griggs.jpg'
        }
      ]);
    });
};
