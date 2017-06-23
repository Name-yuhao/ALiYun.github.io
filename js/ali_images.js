/**
 * Created by Forever on 2017/6/4.
 */
//鼠标移入图片放大
    $(function () {
        var picWidth = $('.shareContent_img_area img').width();
        var picHeight = $('.shareContent_img_area img').height();
        $('#img_box1,#img_box2,#img_box3').on('mouseenter', function () {
            $(this).find('img').stop().animate({
                    width:picWidth+picWidth*0.8,
                    height:picHeight+picHeight*0.8,
                    left:-picWidth*0.4
                },3000)
        })
        $('#img_box1,#img_box2,#img_box3').on('mouseleave', function () {
            $(this).find('img').stop().animate({
                width:picWidth,
                height:picHeight,
                left:0
            },500)
        })
    })
