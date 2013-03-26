$(function() {
  'use strict';

  // fixed top bar
  $('.fixedHeader .container').append($('.primarySection header').clone());

  $('.features').waypoint(function(direction) {
    if (direction === 'down') {
      $('.fixedHeader').fadeIn('fast');
    } else {
      $('.fixedHeader').fadeOut('fast');
    }
  });

  // screenshots transitions
  (function() {
    var $screenshots = $('.screenshots img'),
        $head = $screenshots.first(),
        $next = $head,
        $current, intervalID;

    function start() {
      attachPauseEvent();
      startTimer();
    }

    function attachPauseEvent() {
      $screenshots.mouseenter(function() { stopTimer(); })
                  .mouseleave(function() { startTimer(); });

    }

    function stopTimer() {
      clearInterval(intervalID);
    }

    function startTimer() {
      intervalID = setInterval(function() {
        $current = $next;
        $next = $current.next();

        if (!$next[0]) $next = $head;

        $current.fadeOut();
        $next.fadeIn();
      }, 4000);
    }


    start();
  }());

});