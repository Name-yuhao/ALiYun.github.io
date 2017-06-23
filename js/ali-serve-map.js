/**
 * Created by Administrator on 2017/6/4.
 */
$(function () {
  //使用jQuery制作无缝轮播循环
  function moveLess(){
    $(".ali_cloud_one").animate({'top':'-476'},8000)
        .animate({'top':'0'},8000,function(){
          setTimeout(moveLess(),500);
        });
  };
  moveLess();

//统计拦截攻击次数，使用正则表达式给number添加千分位分位符
  function numCount() {
    var str_count = $("#serve_count").text();
    var arr_count = str_count.split(",");
    var str_num = +arr_count.join("");
    //console.log(str_num);
    function addCommas(val) {
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");
    }
    var timerId_num = setInterval(function () {
      clearInterval(timerId_num);
      var num_step = parseInt(Math.random()*1000+1000);
      var count_num = 0;
      clearInterval(timerId_count);
      var timerId_count = setInterval(function () {
        str_num += 6;
        count_num +=6;
        if(count_num > num_step){
          clearInterval(timerId_count);
        }
        var str_Ecount = addCommas(str_num);
        $("#serve_count").text(str_Ecount);
      },1)
    },5000)
  }
  numCount();

  //页面卷去之后加载地图


  //----固定侧边栏部分特效
  function sideShow() {
    $("#ask_side").hover(function () {
      $("#ask_side img")[0].src = "images/side_hover.png";
    }, function () {
      $("#ask_side img")[0].src = "images/click_side.png"
    })

    $("#tele_side").hover(function () {
      $("#tele_side img")[0].src = "images/tele_before.png";
      $("#side_img").css("display","block");
    }, function () {
      $("#tele_side img")[0].src = "images/tele_side.gif";
      $("#side_img").css("display","none");
    })

    //------新增二维码效果-------
    var Deg = 0;
    var timer2 = null;

    $("#phone_side").hover(function () {

      clearInterval(timer2);
      timer2 = setInterval(function(){
        Deg+=15;
        $("#erweima_side").css({
          transform: "rotate("+Deg+"deg)"
        })
      },10);

      $("#erweima_side").stop().animate({//不断改变二维码大小，定位，透明度
        width:100,
        height:100,
        left:-110,
        top:25,
        opacity:1
      },1000,"swing",function(){
        clearInterval(timer2);//到达目标位置清空计时器二维码停止旋转，并让二维码摆正
        $("#erweima_side").css({
          transform: "rotate(0deg)"
        });
      });

      $("#phone_side img")[0 ].src = "images/phone_hover.png";
      //$("#erweima_side").css("display","block");
    }, function () {
      $("#phone_side img")[0 ].src = "images/phone_side.jpg";
      $("#erweima_side").stop().animate({
        width:0,
        height:0,
        left:-650,
        top:0,
        opacity:0
      },1000,"swing",function () {
        $("#erweima_side").css('display','none');
      })
    })

    $("#show_side").hover(function () {
      $("#show_side img")[0 ].src = "images/hover_show.png";
    }, function () {
      $("#show_side img")[0 ].src = "images/show_normal.jpg";
    })

    $(".ali_serve").css("display","none");
    window.onscroll = function () {
      //console.log (typeof ($ (window).scrollTop ()));
      if($(window).scrollTop() > 300){
        $("#show_side img").css("display","block");
        if($(window).scrollTop() > 2780){
          $(".ali_serve").slideDown(2000);
        }
        else{
          $(".ali_serve").stop().slideUp(500);
        }
      }
      else{
        $("#show_side img").css("display","none");
      }
    }
  }
  sideShow();

//map部分圆圈扩散特效

  //第二种方法，添加transition属性
//  (function () {
//      function dotCircle() {
//        $(".circle_one,.circle_two,.circle_three").addClass('circle_one_transition');
//        $(".circle_one").css(
//            {
//              'width':'80',
//              'height':'80',
//              'opacity':'0',
//            }
//        );
//        setTimeout(function () {
//          $(".circle_two").css(
//              {
//                'width':'80',
//                'height':'80',
//                'opacity':'0',
//              }
//          );
//        },300);
//        setTimeout(function () {
//          $(".circle_three").css(
//              {
//                'width':'80',
//                'height':'80',
//                'opacity':'0',
//              }
//          );
//        },600);
//      }
//      setInterval(function () {
//        dotCircle();
//        setTimeout(function () {
//          $(".circle_one,.circle_two,.circle_three").removeClass('circle_one_transition');
//          $(".circle_one,.circle_two,.circle_three").css(
//              {
//                'width':'0',
//                'height':'0',
//                'opacity':'1',
//              }
//          );
//        },3500)
//      },3600)
//  })();

// 第一种方法，使用animate函数回调
  (function () {
    var i = 0;
    function dotCircle(i) {
      $(".circle_one").eq(i).animate({
        'width':'80',
        'height':'80',
        'opacity':'0'
      },2500, function () {
        $(".circle_one").eq(i).css({
          'width':'0',
          'height':'0',
          'opacity':'1'
        })
      });
      setTimeout(function () {
        $(".circle_two").eq(i).animate({
          'width':'80',
          'height':'80',
          'opacity':'0'
        },2500, function () {
          $(".circle_two").eq(i).css({
            'width':'0',
            'height':'0',
            'opacity':'1'
          })
        });
      },300)
      setTimeout(function () {
        $(".circle_three").eq(i).animate({
          'width':'80',
          'height':'80',
          'opacity':'0'
        },2500, function () {
          $(".circle_three").eq(i).css({
            'width':'0',
            'height':'0',
            'opacity':'1'
          })
          //dotCircle(i);
        });
      },600)
    }
    var timerId_circle = setInterval(function () {
      i =  parseInt(Math.random()*11);
      dotCircle(i);
      //if(i>11){
      //  clearInterval(timerId_circle);
      //}
    },150);
  })()





//partner部分
  function partnerShow(){
    $("partner_icon").on("li","mouseenter", function () {
      $(this).eq(0).css("opacity",'0')
      $(this).stop().animate({
        opacity:1
      },1000)
    })
  }
  partnerShow();
})






