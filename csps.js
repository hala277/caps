'use strict';

const event = require('./lib/events');

require('./Module/vendor.js');
require('./Module/driver.js');


event.on('pickup',(order) => {
    console.log('event',{
        event: 'pickup',
        time: new Date(),
        payload:order,
    });
});

event.on('in-transit',(order) => {
    console.log('event',{
        event: 'in-transit',
        time: new Date(),
        payload:order,
    });
});

event.on('delivered',(order) => {
    console.log('event',{
        event: 'delivered',
        time: new Date(),
        payload:order,
    });
});

