const { faker } = require("@faker-js/faker");
const User = require("../models/User");
const Product = require("../models/Product");

for (let i = 0; i < 5; i++) {
  User.create({
    name: faker.name.firstName(),
    lastname: faker.name.lastName(),
    email: faker.internet.email(),
    password: "123asd", //faker.internet.password(),
    province: faker.address.city(),
    city: faker.address.cityName(),
    adress: faker.address.street(),
    postalCode: 1416, //faker.address.zipCode(),
    phone: 123456, //faker.phone.number()
  });
}

for (let i = 0; i < 30; i++) {
  Product.create({
    name: faker.helpers.fake(
      '{{helpers.arrayElement(["DryFit", "AirMax","Running","Tempo Luxe","Marathon"])}}'
    ),
    image: faker.helpers.fake(
      '{{helpers.arrayElement(["https://assets.stickpng.com/images/5a0c3d715a997e1c2cea1155.png", "https://www.picng.com/upload/running_shoes/png_running_shoes_59959.png"])}}'
    ),
    color: faker.helpers.fake(
      '{{helpers.arrayElement(["black", "white","red","blue"])}}'
    ),
    description: faker.helpers.fake(
      '{{helpers.arrayElement(["Very comfort", "To run faster","Lightweight","Agility"])}}'
    ),
    size: faker.helpers.fake(
      '{{helpers.arrayElement(["38", "39","40","41"])}}'
    ),
    brand: faker.helpers.fake(
      '{{helpers.arrayElement(["Nike", "Adidas","Under Armour","Puma"])}}'
    ),
    price: faker.commerce.price(7500, 38000, 0),
    stock: 10,
    categoria: faker.helpers.fake(
      '{{helpers.arrayElement(["pants", "shorts","shoes","accesories","shirts"])}}'
    ),
  });
}
