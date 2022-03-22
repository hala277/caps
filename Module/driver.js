const event = require('../lib/events.js');



event.on('pickup', (order) => {
  
    event.emit("pickup2",order);
    console.log(`DRIVER: picked up ${order.orderID}`)
    event.emit('in-transit',order);
   
    console.log(`DRIVER: delievered ${order.orderID}`)
    event.emit('delivered',order);

   
});



