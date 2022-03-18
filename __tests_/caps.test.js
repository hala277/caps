'use strict';

const {faker} = require('@faker-js/faker');

const event = require('../lib/events.js');


let order = {
    store: faker.company.companyName(),
    orderID: faker.datatype.uuid(),
    customer:`${faker.name.firstName()}, ${faker.name.lastName()}`,
    address: `${faker.address.city()} , ${faker.address.stateAbbr()}`

};

describe('CAPS', () => {

  it('console log the pickup ', async () => {
   
    event.emit("pickup", order);
  });

  it('console log the in-transit ', async () => {
   
    event.emit("in-transit", order);
  });

  it('console log the delivered ', async () => {
   
    event.emit("delivered", order);
  });


})