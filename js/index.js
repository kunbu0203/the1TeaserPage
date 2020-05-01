(function($) {
  var isMobileStyle = false;
  var menuActive = false;
  var bannerSize = 135;
  var lightWW;
  var audioStatus = false;

  function isMobile() {
    var a = navigator.userAgent || navigator.vendor || window.opera;
    return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s)|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg(g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4));
  }

  function preload() {
    var queue = new createjs.LoadQueue();
    var preloadImages = [
      "images/logo.png",
      "images/pic_01.png",
      "images/pic_01_m.png",
      "images/pic_02.png",
      "images/pic_02_m.png",
      "images/pic_03.png",
      "images/pic_03_m.png",
      "images/slogan.png",
      "images/banner.png",
      "images/banner_m.png",
      "images/bg.jpg",
      "images/blueBtn.jpg",
      "images/decoration_l.png",
      "images/decoration_r.png",
      "images/download.png",
      "images/fb.svg",
      "images/fixBtn.png",
      "images/ham.svg",
      "images/light.png",
      "images/line.svg",
      "files/music.mp3",
    ];
    queue.on("complete", function(event) {
      // sessionStorage.setItem('isLoad', 1);
      setTimeout(function() {
        $('.loading').fadeOut(500);
        doAnimate();
      }, 500)
    });
    queue.on("progress", function(event) {
      // $('.loadingloading .load_status').text(Math.round(event.progress * 100) + '%');
      // $('.loadingloading .loader').css({ 'width': Math.round(event.progress * 100) + '%' });
    });
    queue.on("error", function(event) {
      console.log(event);
    });
    queue.loadManifest(preloadImages);
  }

  function resizeDo() {
    ww = window.innerWidth;
    wh = window.innerHeight;
    // console.log("ww:" + ww)
    // console.log("wh:" + wh)
    lightWW = $('.light').width();

    if ((ww <= 1024) && !isMobileStyle) {
      isMobileStyle = true;

      bannerSize = 120;
    } else if (ww > 1024 && isMobileStyle) {
      isMobileStyle = false;;

      bannerSize = 135;
    }

  }

  function setAnimate() {
    // TweenMax.set('', {
    //   opacity: 0,
    //   y: 100,
    // })
    TweenMax.set('.dec_l,.part02,.part02 .content,.part04,.part04 .content', {
      opacity: 0,
      x: -200,
    })
    TweenMax.set('.dec_r,.part03,.part03 .content', {
      opacity: 0,
      x: 200,
    })
    TweenMax.set('.part01 .h3_txt', {
      opacity: 0,
      scale: 1.2,
    })
    TweenMax.set('.part01 .light', {
      // opacity: 0,
      x: -ww - 360,
    })
    TweenMax.set('.part03 .light_bottom,.part04 .light', {
      // opacity: 0,
      x: -ww,
    })
    TweenMax.set('.part03 .light_top', {
      // opacity: 0,
      x: ww,
    })


    if ((ww <= 1024)) {
      TweenMax.set('.banner', {
        backgroundSize: '110% auto'
      })
    } else {
      TweenMax.set('.banner', {
        backgroundSize: '115% auto'
      })
    }
  }

  function doAnimate() {
    var controller = new ScrollMagic.Controller();

    // var bannerTween = new TimelineMax()
    //   .add(TweenMax.to('.banner', 3, { backgroundSize: '140% auto', ease: Power1.easeOut }))
    //   .add(TweenMax.to('.title_content .h2_txt', .8, { opacity: 1, x: 0, ease: Power1.easeOut }))
    //   .add(TweenMax.staggerTo('.title_content .guarantee img', .8, { opacity: 1, y: 1, delay: -0.4, ease: Power1.easeOut }, 0.1))

    var bannerFirstScene = new ScrollMagic.Scene({
        triggerElement: ".banner",
        offset: 0, //指標位移
        triggerHook: 1,
        reverse: false,
      })
      .on("enter", function() {
        $('.banner').css({
            backgroundSize: bannerSize + '% auto'
          })
          // setTimeout(function() {
          //   $('.banner').css({
          //     transition: '0.1s'
          //   })
          // }, 1000)
      })
      // .setTween(bannerTween)
      // .addIndicators({ name: "banner" }) // 指標顯示
      .addTo(controller);

    var bannerScene = new ScrollMagic.Scene({
        triggerElement: ".banner",
        offset: 1, //指標位移
        // duration: wh / 2,
        // duration: 2,
        triggerHook: 0,
        reverse: true,
      })
      .on("progress", function(e) {
        $('.banner').css({
          backgroundSize: (e.progress * 10 + bannerSize) + '% auto'
        })
      })
      // .setTween(bannerTween)
      // .addIndicators({ name: "banner" }) // 指標顯示
      .addTo(controller);


    var partTween1 = new TimelineMax()
      .add(TweenMax.to('.dec_l', .3, { x: 0, opacity: 1, ease: Power1.easeOut }))
      .add(TweenMax.to('.dec_r', .3, { x: 0, opacity: 1, delay: -.3, ease: Power1.easeOut }))
      .add(TweenMax.to('.part01 .h3_txt', .3, { scale: 1, opacity: 1, delay: -.1, ease: Power1.easeOut }))

    var partScene1 = new ScrollMagic.Scene({
        triggerElement: ".part01",
        offset: 0, //指標位移
        triggerHook: 0.5,
        reverse: false,
      })
      .setTween(partTween1)
      .on("enter", function() {
        // setTimeout(function() {
        $('.part01').addClass('active')
          // }, 1000)
      })
      // .addIndicators({ name: "part01" }) // 指標顯示
      .addTo(controller);

    var partTween2 = new TimelineMax()
      .add(TweenMax.to('.part02', .6, { x: 0, opacity: 1, ease: Power1.easeOut }))
      .add(TweenMax.to('.part02 .content', .6, { x: 0, opacity: 1, delay: -.4, ease: Power1.easeOut }))
      // .add(TweenMax.to('.part01 .light', .3, { x: 0, opacity: 1, delay: -.3, ease: Power1.easeOut }))
      .add(TweenMax.to('.part01 .light', .5, { x: ww, opacity: 0, delay: -.3, ease: Power1.easeOut }))
      .add(TweenMax.to('.part01 .light', .1, { x: -ww, opacity: 0, ease: Power1.easeOut }))
      .add(TweenMax.to('.part01 .light', .3, { x: 0, opacity: 1, ease: Power1.easeOut }))

    var partScene2 = new ScrollMagic.Scene({
        triggerElement: ".part02",
        offset: 0, //指標位移
        triggerHook: 0.7,
        reverse: false,
      })
      .setTween(partTween2)
      // .addIndicators({ name: "part02" }) // 指標顯示
      .addTo(controller);

    var partTween3 = new TimelineMax()
      .add(TweenMax.to('.part03', .6, { x: 0, opacity: 1, ease: Power1.easeOut }))
      .add(TweenMax.to('.part03 .content', .6, { x: 0, opacity: 1, delay: -.4, ease: Power1.easeOut }))
      .add(TweenMax.to('.part03 .light_top', .5, { x: -ww, opacity: 0, delay: -.3, ease: Power1.easeOut }))
      .add(TweenMax.to('.part03 .light_top', .1, { x: ww, opacity: 0, ease: Power1.easeOut }))
      .add(TweenMax.to('.part03 .light_top', .3, { x: 0, opacity: 1, ease: Power1.easeOut }))

    var partScene3 = new ScrollMagic.Scene({
        triggerElement: ".part03",
        offset: 0, //指標位移
        triggerHook: 0.7,
        reverse: false,
      })
      .setTween(partTween3)
      // .addIndicators({ name: "part02" }) // 指標顯示
      .addTo(controller);

    var partTween4 = new TimelineMax()
      .add(TweenMax.to('.part04', .6, { x: 0, opacity: 1, ease: Power1.easeOut }))
      .add(TweenMax.to('.part04 .content', .6, { x: 0, opacity: 1, delay: -.4, ease: Power1.easeOut }))
      .add(TweenMax.to('.part03 .light_bottom', .5, { x: ww, opacity: 0, delay: -.3, ease: Power1.easeOut }))
      .add(TweenMax.to('.part03 .light_bottom', .1, { x: -ww, opacity: 0, ease: Power1.easeOut }))
      .add(TweenMax.to('.part03 .light_bottom', .3, { x: 0, opacity: 1, ease: Power1.easeOut }))
      .add(TweenMax.to('.part04 .light', .3, { x: 0, opacity: 1, delay: -.2, ease: Power1.easeOut }))

    var partScene4 = new ScrollMagic.Scene({
        triggerElement: ".part04",
        offset: 0, //指標位移
        triggerHook: 0.7,
        reverse: false,
      })
      .setTween(partTween4)
      // .addIndicators({ name: "part02" }) // 指標顯示
      .addTo(controller);

  }


  $(document).ready(function() {
    resizeDo();
    window.addEventListener('resize', resizeDo);
    $("html").easeScroll({
      frameRate: 60,
      animationTime: 2000,
      stepSize: 60,
      pulseAlgorithm: !0,
      pulseScale: 8,
      pulseNormalize: 1,
      accelerationDelta: 20,
      accelerationMax: 1,
      keyboardSupport: !0,
      arrowScroll: 50
    });
    $('.ham').on('click', function() {
      if (menuActive) {
        TweenMax.fromTo('.menu', .3, {
          opacity: 1,
          y: 0,
        }, {
          opacity: 0,
          y: 50,
        })
        setTimeout(function() {
          $('.menu').hide();
        }, 300)
      } else {
        $('.menu').show();
        TweenMax.fromTo('.menu', .3, {
          opacity: 0,
          y: 50,
        }, {
          opacity: 1,
          y: 0,
        })
      }
      menuActive = !menuActive;
    })
    setAnimate();

    // doAnimate()
    // $('.loading').hide();
    preload();

    $('.go_reservation').on('click', function() {
      $('html,body').animate({ scrollTop: $('section.form').offset().top })
    })
    $('.menu .row').eq(0).on('click', function() {
      menuActive = !menuActive;
      TweenMax.fromTo('.menu', .3, {
        opacity: 1,
        y: 0,
      }, {
        opacity: 0,
        y: 50,
      })
      setTimeout(function() {
        $('.menu').hide();
      }, 300)
      $('html,body').animate({ scrollTop: $('section.form').offset().top })
    })
    console.log()
    if (getUrlParameter('reservation')) {
      $('html,body').animate({ scrollTop: $('section.form').offset().top })
    }



    /* Line 分享按鈕 */
    //桌機
    if (isMobile()) {
      $('.lineShare').on('click', function(e) {
        e.preventDefault();
        window.open('line://msg/text/' + encodeURIComponent(window.location.href), "_blank", "toolbar=yes,location=yes,directories=no,status=no, menubar=yes,scrollbars=yes,resizable=no, copyhistory=yes,width=600,height=400");
      });
    } else {
      $('.lineShare').on('click', function(e) {
        e.preventDefault();
        window.open('https://lineit.line.me/share/ui?url=' + encodeURIComponent(window.location.href), "_blank", "toolbar=yes,location=yes,directories=no,status=no, menubar=yes,scrollbars=yes,resizable=no, copyhistory=yes,width=600,height=400");
      });
    }

    /* FB */
    $('.fbShare').on('click', function(e) {
      e.preventDefault();
      window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(window.location.href) + '&t=short%20title', "_blank", "width=600,height=400");
      // window.open('https://www.facebook.com/sharer/sharer.php?u=https://www.google.com&t=short%20title',"_blank","width=600,height=400");
    });

    // $('meta[property="og:url"]').prop('content', window.location.href)
    // $('meta[property="og:image"]').prop('content', window.location.href + '/images/fb_share_01.jpg')

    var vid = document.getElementById('webAudio')
      // $(document).on('click', function() {
      //   vid.play();
      //   audioStatus = true;
      //   $('.sound_controls .pause').hide();
      //   $('.sound_controls .play').show();
      // })
      // $(document).on('touch', function() {
      //   vid.play();
      //   audioStatus = true;
      //   $('.sound_controls .pause').hide();
      //   $('.sound_controls .play').show();
      // })
    if (!vid.paused) {
      $('.sound_controls .pause').hide();
      $('.sound_controls .play').show();
      audioStatus = true;
    }
    vid.volume = 0.2
    $('.sound_controls').on('click', function(e) {
      e.stopPropagation();
      if (audioStatus) {
        vid.pause();
        $('.sound_controls .pause').show();
        $('.sound_controls .play').hide();
      } else {
        vid.play();
        $('.sound_controls .pause').hide();
        $('.sound_controls .play').show();
      }
      audioStatus = !audioStatus;
    })

  })
})($)