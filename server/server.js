Meteor.startup(function () {
  console.log("The Simple Dashboard app started up.");
});

Meteor.methods({
  getWeather: function(lat, lng) {
    // console.log("called getWeather with ", lat, lng);
    // make a call to the forecast api but ONLY if it's been at least five minutes since the last call
    // TODO: have a collection of cached weather data the check first
    var apiUrl = "https://api.forecast.io/forecast/" + API_KEY_FORECAST + "/" + lat + "," + lng;
    var weather = HTTP.get(apiUrl, {params: {data: "JSONP"}});
    weather = JSON.parse(weather.content);
    return weather;
  },
  getTransit: function(stopId, route) {
    console.log("called getTransit with stopId: ", stopId);
    console.log("called getTransit with route: ", route);
    var apiUrl = "https://developer.trimet.org/ws/v2/arrivals/json/true/locIDs/" + stopId + "/arrivals/3/appID/" + API_KEY_TRIMET;
    var info = HTTP.get(apiUrl);
    info = JSON.parse(info.content)
    console.log(info);
    return info;
  }
})
