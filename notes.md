now that I am using a relevantStops helper on the Dashboard template to list the bus arrivals, my `getAllArrivals` function in helpers.js has issues. It gets the list of stops from the `template.data.stops` cursor, which is not what we want. That makes TriMet API calls for all stops for this user, not just the ones they are concerned about based on their current location

todos:



How it should work:
- on app launch, get the location
- whenever the location has changed, fetch the weather for that new location
  - but don't actually change the lat/lng if it hasn't changed enough since it was last saved
- fetching weather happens on the server side with a Meteor Method
  - first check to see if there's recent weather data for that location saved in the server cache
  - also, only actually call out to Forecast.io if it's been a while since the last call
- getting weather data back then saves the relevant parts to Session vars
- template helpers return the values of those weather Session vars
