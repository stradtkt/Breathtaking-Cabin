$(function() {
$('a.day-btn').on('click', function() {
  var dayNo = new Date().getDay(),
      week = 7;
  $.simpleWeather({
    location: 'Sevierville',
    unit: 'f',
    success: function(weather) {
        sevenHTML = '<div class="seven-day-forecast">';
        sevenHTML += '<h3>'+weather.city+'</h3>';
        // sevenHTML += '<h6 class="weather-days">'+weather.forecast[x].image+'</h6>';
        sevenHTML += '</div>';
        $('#seven-day').html(sevenHTML);
    },
    error: function(error) {
      $('#seven-day').html('<p>'+error+'</p>');
    }
  });
});
}());
