'use strict';

const { faker } = require('@faker-js/faker');
const event = require('../lib/events');




setInterval(() => {
    let order = {
        store: faker.company.companyName(),
        orderID: faker.datatype.uuid(),
        customer:`${faker.name.firstName()}, ${faker.name.lastName()}`,
        address: `${faker.address.city()} , ${faker.address.stateAbbr()}`
    
    };
event.emit("pickup",order);
// console.log('innnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn')

},5000);


event.on('delivered', (payload) => {
    console.log(`VENDOR: Thank you,${payload.customer}`);
})


