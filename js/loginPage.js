/**
 * Created by Forever on 2017/6/4.
 */
$(function () {
    var login = document.getElementById("login");
    var smallDot = document.getElementsByClassName("threeDots_box")[0]
    var ul1 = login.children[0];
    var ol1 = smallDot.children[0];
    var li1s = ul1.children;
    var li2s = ol1.children;
    var imgWidth = login.offsetWidth;
    var pic=0;
    var dot=0;

    function animate(obj, target) {
        clearInterval(obj.timeId);
        obj.timeId = setInterval(function () {
            var leader = obj.offsetLeft;//先获得盒子当前的位置
            var step = 20;
            step = leader < target ? step : -step;
            if (Math.abs((leader - target)) > Math.abs(step)) {
                leader = leader + step;
                obj.style.left = leader + 'px';
            } else {
                clearInterval(obj.timeId);
                obj.style.left = target + 'px';
            }
        }, 15);
    }
    function playNext() {
        if (pic == li1s.length-1) {
            ul1.style.left = '0px';
            pic = 0;
        }
        $(".threeDots_box i").css({
          'backgroundColor':"",
          'borderColor':""
        }) ;
        $(".threeDots_box i")[pic].style.backgroundColor = "#00a2ca";
        $(".threeDots_box i")[pic].style.borderColor = "#00a2ca";
        pic++;
        var target = -imgWidth * pic;
        animate(ul1, target);

    }
    playNext();
    timeId=  setInterval(playNext,1000);

    //鼠标移入文字消失
    $('#inputOne').on('focus', function () {
        //console.log($(this)[0].value);
        if($(this)[0].value == '邮箱/会员名/8位ID'){
            $(this).val("");
        }else{
            $(this).val($(this).val());
        }
    })
    $('#inputTwo').on('focus', function () {
        if($(this)[0].value == '登录密码'){
            $(this).val("");
        }else{
            $(this).val($(this).val());
        }
    })
    $("#inputOne").on("blur", function () {
      //console.log ($ (this).val ());
      if($(this).val()==""){
            $(this).val("邮箱/会员名/8位ID");
        }else{
            $(this).val($(this).val());
        }
    });
    $("#inputTwo").on("blur", function () {
        if($(this).val()==""){
            $(this).val('登录密码');
        }else{
            $(this).val($(this).val());
        }
    });

})

