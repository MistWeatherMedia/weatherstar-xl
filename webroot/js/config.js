var api_key = '71f92ea9dd2f4790b92ea9dd2f779061';
var map_key = 'YOUR-API-KEY';

var appearanceSettings = {
    marqueeAd: [
        "If you are interested in TWC, EAS, or anything weather/tech related, visit mistwx.com/discord right now!",
        "Also check out other sims on weatherstar.dev, your place for Local on the 8s simulations!"
    ],
    aspectRatio: 3/2, //May be functional in a future update. Default is 4/3, but for a more realistic experience use 3/2 as an aspect ratio.
    iconSet: "2005", //I highly recommend you do not change this value unless you are more experienced. If you do, the sim will look for a file called icons(value)sprite.png.
    ldlType: '', //what you want to see on ldl. 'observations' = only observations / 'crawl' = only local ad sales / 'both' = both but only will fit during the two minute flavor
    startupTime: 4000, //How long you want to wait for it to start up.
    graphicsPackage: ["v2","v3"][Math.round(Math.random())],
    version: "1.3"
}

var slideSettings = {
    slideDelay: 10000, //Set however long you want the slide to be on the screen for. Default is 10000.
    flavor: '',
    order: [
        {function:"currentConditions"},
        {function:"nearbyCities"},
        {function:"bulletin"},
        {function:"dopplerRadar"},
        {function:"almanac"},
        {function:"daypartForecast"},
        {function:"dayDesc"},
        {function:"weekAhead"},
    ]
}

var audioSettings = {
    enableMusic: true, //I understand if you want to play music from a different tab, but that's the only reason it should be false
    shuffle: true, //Self-explanatory. Default is true.
    randomStart: true, //Also should be self-explanatory. Default is true.
    narrations: true, //Also should be self-explanatory. Default is true.
    order: [
        "Track 1",
        "Track 2",
        "Track 3",
        "Track 4",
        "Track 5",
        "Track 6",
        "Track 7",
        "Track 8",
        "Track 9",
        "Track 10",
        "Track 11",
        "Track 12",
        "Track 13",
        "Track 14",
        "Track 15"
    ],
    offset: 0
    //The order of what songs you want. This feature is probably more 
    //old since the thing does not loop, and it will only choose one song. 
    //If you want your own specific song to play, add the file name to the array, 
    //and change the order to ["(file name)"] instead of adding it on.
}
var locationSettings = {/*This is what you can edit, anything under the lcationSettings object
  you can change it if you want but why would you when there's a settings panel to chenge this stuff.*/
  mainCity: {
    autoFind: true, //set to false if you want to manually set the location
    displayname:"",//set this to whatever you want the main location's name to be
    extraname:"",//set this to the extra name you want to give the main location for the forecast information
    type:"",//choose the following types from below:
    //geocode -- (coordinates)
    //postalKey -- (zip code)
    //iataCode -- (IATA airport code)
    //icaoCode -- (ICAO airport code)
    //placeid -- (PLace ID)
    //canonicalCityId -- (Canonical City ID)
    //locud -- (Location ID)
    val:"",//the value that goes with the type. Like if you select iataCode, the val would be JFK if you want JFK Airport. 
    //===NOTES===
    //if you use geocode (coordinates), you must use the format "latitude,longitude" for the val
    //if you use postalKey (zipcode), you must put ":US" after the zip code. I may be wrong about this but to be safe put it after the code.
  },
  eightCities: {
    autoFind: true,
    //same guidelines as mainCity location settings as the eight nearby locations.
    cities:[//if you use less than 8 locations, please delete the unused cities objects.
      {
        displayname:"",
        type:"",
        val:"",
      },
      {
        displayname:"",
        type:"",
        val:"",
      },
      {
        displayname:"",
        type:"",
        val:"",
      },
      {
        displayname:"",
        type:"",
        val:"",
      },
      {
        displayname:"",
        type:"",
        val:"",
      },
      {
        displayname:"",
        type:"",
        val:"",
      },
      {
        displayname:"",
        type:"",
        val:"",
      },
      {
        displayname:"",
        type:"",
        val:"",
      },
    ]
  }
}
