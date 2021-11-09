const request = require("request");

const url =
  "http://api.weatherstack.com/current?access_key=aee502916a3d0d0b3b002272afbfb82f&query=37.8267,-122.4233";

request({ url: url }, (error, response) => {
  const data = JSON.parse(response.body);
  console.log(data.current);
});
