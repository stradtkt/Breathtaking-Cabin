// $(document).ready(function() {
//
//
//   var url = 'https://www.googleapis.com/calendar/v3/calendars/calendarId/events/eventId';
//
//   var dataOptions = {
//
//   };
//
//   function getAvailable(data) {
//     $('.date-checker-btn').on('click', function(e) {
//       e.preventDefault();
//     $.each(data.data, function(i, calDate) {
//         html = '<div class="message-container">';
//         html += '<h1>'+calDate.summary+'</h1>';
//         html += '<p>'+calDate.description+'</p>';
//         $('.message').html(html);
//     });
//   });
//   }
//   $.getJSON(url, dataOptions, getAvailable);
// });
