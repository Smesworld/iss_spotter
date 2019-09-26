const { nextISSTimesForMyLocation } = require('./iss');

const printPass = function(passTime) {
  const datetime = new Date();
  datetime.setUTCSeconds(passTime.risetime);
  console.log(`Next pass at ${datetime} for ${passTime.duration} seconds.`);
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }

  for (const pass of passTimes) {
    printPass(pass);
  }
});