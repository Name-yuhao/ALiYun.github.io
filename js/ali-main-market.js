/**
 * Created by 'ŷ����' on 2017/6/3.
 */
$(function () {
    /**
     *
     * @param obj
     * @private
     */
    //��ȡ����
    var hover0 = document.getElementById("hover0");
    img0 = hover0.children[0].children[0];
    var hover1 = document.getElementById("hover1");
    img1 = hover1.children[0].children[0];
    var hover2 = document.getElementById("hover2");
    img2 = hover2.children[0].children[0];
    var hover3 = document.getElementById("hover3");
    img3 = hover3.children[0].children[0];
    var hover4 = document.getElementById("hover4");
    img4 = hover4.children[0].children[0];
    var hover5 = document.getElementById("hover5");
    img5 = hover5.children[0].children[0];


    var timeId = null;
    //���·�װ����tranIn
    function tranIn(img, obj) {
        clearInterval(obj.timeId);
        obj.timeId = setInterval(function () {
            var step = 100;
            leader = img.offsetTop;
            leader -= step;
            //img.style.top = leader + "px";
            if (leader < -5900) {
                clearInterval(obj.timeId);
                img.style.top = "-5900px";
            } else {
                img.style.top = leader + "px";
            }
        }, 10)
    }

    //���·�װ����tranOut
    function tranOut(img, obj) {
        clearInterval(obj.timeId);
        obj.timeId = setInterval(function () {
            var step = 100;
            leader = img.offsetTop;
            leader += step;
            if (leader > 0) {
                clearInterval(obj.timeId);
                img.style.top = "0px";
            } else {
                img.style.top = leader + "px";
            }
        }, 10)
    }

    //ע���¼�
    //���⣺������������ǰ����Ķ�ʱ����ͬʱ����ǰһ������Ķ�ʱ�������������
    $(hover0).hover(function () {
        tranIn(img0, this);
    }, function () {
        tranOut(img0, this);
    })
    $(hover1).hover(function () {
        tranIn(img1, this);
    }, function () {
        tranOut(img1, this);
    })
    $(hover2).hover(function () {
        tranIn(img2, this);
    }, function () {
        tranOut(img2, this);
    })
    $(hover3).hover(function () {
        tranIn(img3, this);
    }, function () {
        tranOut(img3, this);
    })
    $(hover4).hover(function () {
        tranIn(img4, this);
    }, function () {
        tranOut(img4, this);
    })
    $(hover5).hover(function () {
        tranIn(img5, this);
    }, function () {
        tranOut(img5, this);
    })

    //ʵ�������ͣ0.5��������������optionЧ��
    //��ȡ��������
    var $option = $(".ali-main-market-con > ul > li");
    //$option.on("mouseenter", function () {
    //    timer = setTimeout(function () {
    //       this.nextElementSibling.style.display = "none";
    //    }, 1000)
    //})
    $option.hover(function () {
        $(this).siblings().css("opacity", 0.5);
    }, function () {
        $(this).siblings().css("opacity", 1);
    })

    //ʵ��������ɫ��ͣ�ı�
    //$(".option").hover(function(){
    //    $(this).children('p').children().css("color", "#1e90ff");
    //}, function () {
    //    $(this).children('p').children().css("color", "#a9b0b4");
    //})
})

