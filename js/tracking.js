(function($) {

  $(document).ready(function() {
    gtag('config', 'UA-149926220-1', {
      'page_title': 'Screenview',
      'page_path': '/'
    });

    //head_logo
    $('.go_reservation').click(function() {
      gtag('event', 'Click', {
        'event_category': 'reserve_btn',
        'event_label': 'reserve_btn',
      });
    });
    $('.menu .row').eq(0).click(function() {
      gtag('event', 'Click', {
        'event_category': 'reserve_btn',
        'event_label': 'reserve_btn',
      });
    });

    $('.fbShare').click(function() {
      gtag('event', 'Click', {
        'event_category': 'sharefb_btn',
        'event_label': 'sharefb_btn',
      });
    });
    $('.lineShare').click(function() {
      gtag('event', 'Click', {
        'event_category': 'shareline_btn',
        'event_label': 'shareline_btn',
      });
    });
    $('.menu .row').eq(2).click(function() {
      gtag('event', 'Click', {
        'event_category': 'bmwsite_btn',
        'event_label': 'bmwsite_btn',
      });
    });
    $('.menu .row').eq(3).click(function() {
      gtag('event', 'Click', {
        'event_category': 'statement_btn',
        'event_label': 'statement_btn',
      });
    });
    $('.menu .row').eq(4).click(function() {
      gtag('event', 'Click', {
        'event_category': 'show_btn',
        'event_label': 'show_btn',
      });
    });

    $('.ham').click(function() {
      gtag('event', 'Click', {
        'event_category': 'menu_btn',
        'event_label': 'menu_btn',
      });
    });

  })
})($)