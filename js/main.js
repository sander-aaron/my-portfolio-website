$('.info-panel-btn').on('click', function () {
  var isOpen = $(this).hasClass('info-panel-btn-active');
  var id = $(this).attr('href');
  $('.info-panel').attr('hidden', true);
  $('.info-panel-btn').removeClass('info-panel-btn-active');
  if (!isOpen) {
    $(this).addClass('info-panel-btn-active');
    $(id).removeAttr('hidden');
  }

});
