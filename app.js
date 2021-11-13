const geoCode = require("./utils/geoCode");
const forecast = require("./utils/forecast");

const address = process.argv[2];

if (!address) {
  console.log("Please provide a valid address");
} else {
  geoCode(address, (error, { latitude, longitude, location } = {}) => {
    if (error) {
      return console.error(error);
    }

    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        return console.error(error);
      }
      console.log(location);
      console.log(forecastData);
    });
  });
}
