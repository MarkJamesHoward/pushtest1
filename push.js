var push = require("web-push");

// let vapidKeys = push.generateVAPIDKeys();
let vapidKeys = {
  publicKey:
    "BHLHi7n4BMIElQBIoRBh2VgNqkoR6xYseYoddaBiFfD-Vgm1GHS-zQ7xuTdYJjaOOs9Yl9jBX78ooF7Q6M-NV-I",
  privateKey: "cwxWmiHIVvWHOxyKmU_Ec8JriJCQY6nmPIAMfhgkaEI"
};

push.setVapidDetails(
  'mark@mjhoward.co.uk',
  vapidKeys.publicKey,
  validKeys.privateKey);

let subscription = {

}

push.sendNotification(pushSubscription, 'test message')

console.log(vapidKeys);
