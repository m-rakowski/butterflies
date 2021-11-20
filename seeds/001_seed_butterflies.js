
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('butterfly').del()
    .then(function () {
      // Inserts seed entries
      return knex('butterfly').insert([
        {
          id: 1,
          name: 'Zebra Swallowtail',
          species: 'Protographium marcellus',
          link: 'https://en.wikipedia.org/wiki/Protographium_marcellus',
          image_url: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Zebra_Swallowtail%2C_Megan_McCarty69.jpg'
        },
        {
          id: 2,
          name: 'Plum Judy',
          species: 'Abisara echerius',
          link: 'https://en.wikipedia.org/wiki/Abisara_echerius',
          image_url: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/PlumJudyJavadi.jpg'
        },
        {
          id: 3,
          name: 'Red Pierrot',
          species: 'Talicada nyseus',
          link: 'https://en.wikipedia.org/wiki/Talicada_nyseus',
          image_url: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Red_Pierrot_kollam.resized.JPG'
        },
        {
          id: 4,
          name: 'Texan Crescentspot',
          species: 'Anthanassa texana',
          link: 'https://en.wikipedia.org/wiki/Anthanassa_texana',
          image_url: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Anthanassa_texana.jpg'
        },
        {
          id: 5,
          name: 'Guava Skipper',
          species: 'Phocides polybius',
          link: 'https://en.wikipedia.org/wiki/Phocides_polybius',
          image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Guava_Skipper_%28Phocides_polybius%29_%281%29.jpg/440px-Guava_Skipper_%28Phocides_polybius%29_%281%29.jpg'
        },
        {
          id: 6,
          name: 'Mexican Bluewing',
          species: 'Myscelia ethusa',
          link: 'https://en.wikipedia.org/wiki/Myscelia_ethusa',
          image_url: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Myscelia_ethusa.jpg'
        }
      ]);
    });
};
