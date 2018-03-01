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
      $('div.seven-day-forecast').css("display", "none");
      $('.day-btn').click(function(e, i, forecast) {
        for(var i=0;i<weather.forecast.length && i <=6;i++) {
        e.preventDefault();
        sevenHTML = '<div class="seven-day-forecast">';
        sevenHTML += '<div class="row">';
        sevenHTML += '<div class="col-sm-4">';
        sevenHTML += '<span class="forecast-date">'+weather.forecast[i].date+'</span>';
        sevenHTML += '</div>';
        sevenHTML += '<div class="col-sm-4">';
        sevenHTML += '<span class="forecast-high"><i class="fal fa-thermometer-three-quarters"></i>: '+ weather.forecast[i].high+'</span>';
        sevenHTML += '</div>';
        sevenHTML += '<div class="col-sm-4">';
        sevenHTML += '<span class="forecast-low"><i class="fal fa-thermometer-empty"></i>: '+weather.forecast[i].low+ '</span>';
        sevenHTML += '</div>';
        sevenHTML += '</div>';
        sevenHTML += '</div>';
        $('#seven-day').append(sevenHTML);
        }
      });
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
});
