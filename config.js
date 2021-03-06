
// Set for Grand Rapids, MI for now
var longitude = 42.9634;
var latitude = -85.6681;
//Sign up for a darksky account https://darksky.net/dev/register
var darkSkyID = '';
//City to display 
var cityName = "Grand Rapids";
//Image for Day
var imgDay = 'img/GrandRapids_day.png';
//Image for night
var imgNight = 'img/GrandRapids_night.png';
//Short Day names
var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
//Full day names
var fullDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//Time to offset clock time in minutes
var timeOffsetminutes = 0;
//Time to refresh weather info in minutes - note free account gets 1000 a day
var weatherRefreshMinutes = 15;
//Forecast number of hour to skip on each hour forecast
var forecastNumberHoursSkip = 3;
