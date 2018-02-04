$(document).ready(function() {
  $.simpleWeather({
    location: 'Sevierville, TN',
    woeid: '',
    unit: 'f',
    success: function(weather) {
      html = '<div class="weather">';
      html += '<h2 class="weather-city">'+weather.city+' '+weather.region+'</h2>';
      html += '<h2 class="weather-code"><i class="icon-'+weather.code+'"></i> '+weather.temp+'&deg;'+weather.units.temp+'</h2>';
      html += '<img class="weather-image" src="'+weather.image+'">';
      html += '<h2 class="weather-wind">'+weather.wind.direction+' '+weather.wind.speed+' '+weather.units.speed+'</h2>';
      html += '<a class="btn btn-primary day-btn">7 Day Forecast</a>';
      html += '</div>';
      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
});
