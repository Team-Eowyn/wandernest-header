const faker = require('faker');
const Hotel = require('./index.js');

const seed = () => {
  for (let i = 1; i <= 100; i++) {
    let newHotel = new Hotel({
      id: i,
      name: faker.company.companyName()
    });

    newHotel.save((err, newHotel) => {
      if (err) {
        console.log(err);
        console.log(`Hotel #${newHotel.id} was NOT saved!`);
      } else {
        console.log(`Hotel #${newHotel.id} saved`);
      }
    });
  }
};

seed();