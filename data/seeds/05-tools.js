
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tools').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tools').insert([
        {
          "user_id": 1,
          "title": "Hammer for Rent",
          "description": "Bling bling away i'm in the shizzle mofo my shizz consectetizzle fo shizzle. Vivamizzle i'm in the shizzle mah nizzle you son of a bizzle. Nizzle pizzle nisl eget lacus auctor feugiat. Sizzle suscipizzle fo shizzle ipsizzle. Curabitur in arcu. Vestibulum bizzle enizzle, izzle sed, congue fo shizzle my nizzle, fo nizzle, libero. Nullam vitae pede shit eros sure shiz. Quisque pede that's the shizzle, congue pulvinizzle, auctor a, mollis sit fo shizzle mah nizzle fo rizzle, mah home g-dizzle, bizzle.",
          "make": "Hammer Co",
          "model": "Hammer9000",
          "condition_id": 1,
          "category_id": 2,
          "daily_cost": 5,
          "available": true,
          "img_url": 'https://ibb.co/6YJ2V7F'
      },
      {
        "user_id": 2,
        "title": "Tall Ladder",
        "description": "Donizzle mah nizzle dui. Fizzle risizzle boofron, elementum consectetizzle, sollicitudizzle in, consequat imperdizzle, turpis. You son of a bizzle a ipsum away mi fizzle fo shizzle mah nizzle fo rizzle, mah home g-dizzle. Curabitizzle brizzle sagittizzle break it down.",
        "make": "Ladders R Us",
        "model": "L10FT",
        "condition_id": 2,
        "category_id": 5,
        "daily_cost": 15,
        "available": true,
        "img_url": 'https://ibb.co/HgC5CsF'
    },
    {
      "user_id": 1,
      "title": "Power Drill",
      "description": "Pellentesque habitant morbi ma nizzle senectizzle et sizzle sheezy malesuada brizzle izzle get down get down egestas. Hizzle izzle. Bling bling elementum. Ut erizzle , tellivizzle the bizzle, suscipizzle ac, porta pulvinizzle, nisl. Fizzle sagittizzle shut the shizzle up velit.",
      "make": "Drills Inc",
      "model": "Drill 3",
      "condition_id": 3,
      "category_id": 1,
      "daily_cost": 12,
      "available": true,
      "img_url": 'https://ibb.co/gvBz0bF'
  },
      ]);
    });
};
