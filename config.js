
var longitude = 42.9634;
var latitude = -85.6681;
//Sign up for a darksky account https://darksky.net/dev/register
var darkSkyID = 'fbafffc24be575025775ade69b897a7d';
//Other Key -  6b93954aff24c2935cc6722594559c6d
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
var timeOffsetminutes = 15;
//Time to refresh weather info in minutes - note free account gets 1000 a day
var weatherRefreshMinutes = 60;
//Forecast number of hour to skip on each hour forecast
var forecastNumberHoursSkip = 3;
//Is Production - Pull live data - else pull JSON Test Data
var isProduction = false;