/**
 * Created by qinnv on 2017/6/4.
 */
$(window).load(function(){
    var arr4=["cf.jpg","kill.jpg","dnf.jpg","wot.jpg","lol.jpg"];
    lunBo("wrap",arr4)
    //自定义的完整轮播图，参数为父盒子id以及图片的名字数组
    function lunBo(id,arr){
        var box=$("#"+id)[0];
        var ad=document.createElement("div");
        $(ad).css({
            width:"100%",
            height:"100%",
            position:"relative",
            overflow:"hidden"})
        box.appendChild(ad);
        var ul=document.createElement("ul");
        $(ul).css({
            position:"absolute",
            left:"0",
            top:"0",
            width:"1000%"
        })
        ad.appendChild(ul);
        for(var i=0;i<arr.length;i++){
            var li=document.createElement("li");
            $(li).css({
                width:"10%",
                height:"10%",
                overflow:"hidden",
                float:"left",
                cursor: "pointer"
            })
            ul.appendChild(li);
            var img=document.createElement("img");
            $(img).css({width:"100%", height:"100%"})
            $(img).attr("src","../images/"+arr[i]);
            li.appendChild(img);
        }
        var ol=document.createElement("ol");
        $(ol).css({
            position:"absolute",
            right:"10px",
            bottom:"10px",
            lineHeight:"20px",
            textAlign:"center"
        })
        ad.appendChild(ol);
        var ar=document.createElement("div");
        $(ar).css("display","none");
        box.appendChild(ar);
        for(var i=0;i<2 ;i++){
            var left1=document.createElement("span");
            $(left1).css({
                width:"24px",
                height:"50px",
                lineHeight:"50px",
                position:"absolute",
                top:"50%",
                marginTop:"-25px",
                backgroundColor:"#000",
                cursor:"pointer",
                textAlign:"center",
                fontWeight:"bold",
                fontfamily:"黑体",
                fontSize:"30px",
                color:"#fff",
                opacity:0.4,
                border:"1px solid #fff"
            })
            ar.appendChild(left1);
        }
        var left=ar.children[0];
        $(left).css("left","5px").text("<");
        var right=ar.children[1];
        $(right).css("right","5px").text(">");
        var lis=ul.getElementsByTagName("li");
        for(var i=0;i<lis.length;i++) {
            var oli = document.createElement("li");
            $(oli).css({
                float: "left",
                width: "20px",
                height: "20px",
                background: "#fff",
                border: "1px solid #f0f",
                borderRadius: "50%",
                marginLeft: "8px",
                cursor: "pointer",
            }).text(i + 1);
            ol.appendChild(oli);
        }
        var olis=$("ol li");
        olis[0].style.backgroundColor="#f0f";
        var index;
        var imgw=ad.offsetWidth;
        olis.on("mouseenter",function(){
            $(this).css("backgroundColor","#f0f").siblings().css("backgroundColor","");
            index=$(this).index();
            pic=pic1=index;
            var target=-index*imgw;
            $(ul).stop().animate({left:target},500);
        })
        ul.appendChild(lis[0].cloneNode(true));
        var pic= 0,pic1=0;
        box.onmouseover=function(){
            $(ar).show();
            clearInterval(timer);
        }
        box.onmouseout=function(){
            $(ar).hide();
            timer=setInterval(nextPic,1000);
        }
        right.onclick=nextPic;
        left.onclick=function() {
            if (pic == 0) {
                ul.style.left = -imgw * olis.length+"px";
                pic = lis.length-1;
            }
            pic--;
            var target = -pic * imgw;
            $(ul).animate({left:target},500);
            for (var i = 0; i < olis.length; i++) {
                olis[i].style.backgroundColor = "";
            }
            if (pic1 > 0) {
                pic1--
            } else {
                pic1 = olis.length - 1;
            }
            olis[pic1].style.backgroundColor = "#f0f";
        }
        var timer;
        timer=setInterval(nextPic,1000)
        function nextPic(){
            if(pic==lis.length-1){
                ul.style.left="0px";
                pic=0;
            }
            pic++;
            var target=-pic*imgw;
            $(ul).animate({left:target},500);
            for(var i=0;i<olis.length;i++){
                olis[i].style.backgroundColor="";
            }
            if(pic1<olis.length-1){
                pic1++
            }else{
                pic1=0;
            }
            olis[pic1].style.backgroundColor="#f0f";
        }
    }
    $(".four_son_ads span").on("click",function(){
        $(this).parent().stop().slideUp(1000);
    });
    var fsone=document.getElementById("fsone");
    var fstwo=document.getElementById("fstwo");
    var i=0;
    var j=1265;
    setInterval(function(){
        i++;
        j--;
        if(j>i){
            fsone.style.left=i+"px";
            fstwo.style.right=i+"px";
        } else{
            fsone.style.left=j+"px";
            fstwo.style.right=j+"px";
        }
        if(i==1265){
            i=0;
            j=1265;
        }
    },10);
    $(fsone).on("click",function(){
        $(".four_son_left").stop().slideDown(1000);
    }).next().on("click",function(){
        $(".four_son_right").stop().slideDown(1000);
    });
    $(".fs_tab span").on("mouseenter",function(e){
        $(this).next().show().parent().siblings().find("div").hide().find("a").css("color",randomColor());
        $(".fs_tab .fs_tab0").stop().animate({
            left: $(this).position().left,
             top: $(this).position().top
        },500,"swing")
    });
    function randomColor(){
        var arr=[0,1,2,3,4,5,6,7,8,9,"a","b",'c',"d","e","f"];
        var str="#";
        for(var i=0;i<6;i++){
            var index=Math.floor(Math.random()*16);
            str+=arr[index];
        }
        return str;
    }

})