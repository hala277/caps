const event = require('../lib/events.js');

event.on('pickup', (order) => {
    let pickedOrder = Math.ceil(Math.random() * 5000);
   

    setInterval(() => {
    console.log(`DRIVER: picked up ${order.orderID}`)
    event.emit('in-transit',order);

    console.log(`DRIVER: delievered ${order.orderID}`)
    event.emit('delivered',order);

    }, pickedOrder);

    
});