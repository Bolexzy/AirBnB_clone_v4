/* Script that listen for changes on each INPUT checkbox tag */
$('document').ready(function () {
  const amenities = {};
  $('INPUT[type="checkbox"]').change(function () {
    if ($(this).prop('checked')) {
      amenities[$(this).attr('data-id')] = $(this).attr('data-name');
    } else {
      delete amenities[$(this).attr('data-id')];
    }
    $('.amenities H4').text(Object.values(amenities).join(', '));
  });

// toggle class on div#api_status
$.get('http://0.0.0.0:5001/api/v1/status/', (body, status) => {
  if (status === 'OK') {
    $('div#api_status').addClass('available')
  } else {
    $('div#api_status').removeClass('available');
  }
});
});
