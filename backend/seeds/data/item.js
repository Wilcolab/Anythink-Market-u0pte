const { faker } = require("@faker-js/faker");


const fakeData = Array.from({ length: 101 }, () => ({
  title: faker.word.noun(),
  description: faker.lorem.sentence(25),
}));

module.exports = fakeData;
