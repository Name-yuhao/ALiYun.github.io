/**
 * Created by lihailong on 2017/6/3.
 */
$(function(){
    var cur = 0;
    var timer = null;
    //轮播动画封装成函数----------start-------
    function play(){
        $(".hSlider").children().eq(cur).css({
            zIndex:-999,
        }).stop().animate({
            opacity:0,
        },2000, function () {
            $(".hSlider").children().eq(cur).css("dispaly","none");
        });
        cur++;
        $(".hSlider").children().eq(cur).css({
            zIndex:29,
        }).stop().animate({
            opacity:1,
        },2000,function(){
            $(this).children().stop().animate({
                top:160,
            },300,function(){
                $(this).stop().animate({
                    top:130,
                },300)
            })
        });
        if(cur==$(".hSlider").children().length){
            $(".hSlider").children().eq(cur).css({
                zIndex:-999,
            }).stop().animate({
                opacity:0,
            },2000, function () {
                $(".hSlider").children().eq(cur).css("dispaly","none");
            });
            cur=0;
            $(".hSlider").children().eq(cur).css({
                zIndex:29,
            }).stop().animate({
                opacity:1,
            },2000,function(){
                $(this).children().stop().animate({
                    top:160,
                },300,function(){
                    $(this).stop().animate({
                        top:130,
                    },300)
                })
            });
        }
    }
    //轮播动画封装成函数--------------over---------------

    //开启自动播放--------------------
    timer = setInterval(play,4000);
    //开启自动播放--------------------

    //鼠标移入清空计时器------------------
    $(".hSlider").children().on("mouseenter",function(){
        clearInterval(timer);
    });

    //鼠标移出设置计时器------------------
    $(".hSlider").children().on("mouseout",function(){
            clearInterval(timer);
            timer = setInterval(play,4000);
    })

    //轮播图右侧图片动画效果start-----------------
    $(".hSlider").children().on("click",function(){
            $(this).children().find("img:eq(0)").stop().animate({
                top:-140
            },400,function(){
                $(this).stop().animate({
                    top:-80,
                },400)
            })

            $(this).children().find("img:eq(1)").stop().animate({
                top:-40
            },400,function(){
                $(this).stop().animate({
                    top:-80,
                },400)
            })

            $(this).children().find("img:eq(2)").stop().animate({
                top:20,
            },400,function(){
                $(this).stop().animate({
                    top:-80
                },400)
            });
    })
    //轮播图右侧图片动画效果over-----------------

    var Deg = 0;
    var timer2 = null;
    //------鼠标进入pic时 开启计时器让二维码旋转start--------
    $("#phonePic").on("mouseenter",function(){
        clearInterval(timer2);
        timer2 = setInterval(function(){
            Deg+=15;
            $("#erweima").css({
                transform: "rotate("+Deg+"deg)"
            })
        },10);
        //------计时器让二维码旋转start--------
        $("#erweima").stop().animate({//改变二维码大小，定位，透明度
            width:100,
            height:100,
            right:480,
            top:400,
            opacity:1
        },1000,"swing",function(){
            clearInterval(timer2);//到达目标位置清空计时器二维码停止旋转，并让二维码摆正
            $("#erweima").css({
                transform: "rotate(0deg)"
            });
        });
        //------计时器让二维码旋转over--------
    });
    //------鼠标进入pic时 开启计时器让二维码旋转over--------


    //鼠标移出pic时让二维码回到初始状态start-----------
    $("#phonePic").on("mouseout",function(){
            $("#erweima").stop().animate({
                width:1,
                height:1,
                right:0,
                top:162,
                opacity:0
            },1000,"swing")
    });
    //鼠标移出pic时让二维码回到初始状态over-----------

    //鼠标移入移出右侧电话图标让盒子显示和隐藏start-----------
    $("#telpPic1").on("mouseenter",function(){
        $("#telpPic2").css("display","block");
        $("#showIfo").css("display","block");
    });
    $("#telpPic2").on("mouseout",function(){
        $("#telpPic2").css("display","none");
        $("#showIfo").css("display","none");
    });
    //鼠标移入移出右侧电话图标让盒子显示和隐藏over-----------

    //轮播图下方广告区域ad----start-------------------
    var liWidth = $("#slider-ad .ul-ad li").css("width");
    //console.log(liWidth);
    $("#slider-ad .ul-ad li").hover(function(){
        $(this).find("p").css({
            color:"#ffffff"
        });

        $(this).animate({
            backgroundColor:"#00c1de"
        },1000)
    },function(){
        $(this).animate({
            backgroundColor:"#2D3035"
        },1000)
    })
    //轮播图下方广告区域ad-------over----------------
})