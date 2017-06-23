/**
 * Created by qinnv on 2017/6/3.
 */
$(window).load(function(){
    function randomColor(){
        var arr=[0,1,2,3,4,5,6,7,8,9,"a","b",'c',"d","e","f"];
        var str="#";
        for(var i=0;i<6;i++){
            var index=Math.floor(Math.random()*16);
            str+=arr[index];
        }
        return str;
    }
    fourlunbo();

   function fourlunbo(){
       var arr=[
           '融合云计算大数据，连接用户、医疗设备、医疗机构和医疗ISV，构建医疗行业云生态',
           '为游戏开发者提供专属集群、尊享VIP服务、专项扶持基金、多场景游戏部署解决方案',
           '依据网站不同发展阶段，为网站类用户提供最佳上云方案，有效降低运维难度和整体IT成本',
           '一站式提供“海量存储、高效分发、极速网络”等服务， 轻松坐享CCTV-5、微博的传播能力',
           '为金融行业提供量身定制的云计算服务，具备低成本、高弹性、高可用、安全合规的特性',
           '定制化方案助力传统硬件厂商和中小平台服务商快速搭建稳定可靠、安全可控的物联网平台',
           '立足于对政务信息化的深刻理解，构筑开放共享、敏捷高效、安全可信的政务云基础架构',
           '基于超强计算和存储能力，面对影视广告、游戏等行业的染需求，提供多层次渲染解决方案',
           '帮助客户快速拓展O2O业务，提升用户使用体验，助力O2O客户走进互联网的“场景时代”',
           '结合大数据能力帮助电商企业快速搭建平台、应对业务高并发，剖析秒杀、视频直播等场景',
           '助移动开发者轻松应对用户数爆发式增长,实现基于大数据的精细化运营、增强用户黏性',
           '融合云计算大数据，连接用户、医疗设备、医疗机构和医疗ISV，构建医疗行业云生态'
       ];
       var imgw=$(".four ul li img").width();
       var pic=0;
       var ul=$(".four ul.four_ul");
       var dlis=ul[0].children;
       ul.append($(dlis[0]).clone(true));
       var lis=$(dlis);
       $("#four_right").on("click",function(){
           if(pic==lis.length-5){
               ul.css("left",0);
               pic=0;
           }
           pic++;
           ul.animate({left:-imgw*pic},300);
       });
       $("#four_left").on("click",function(){
           if(pic==0){
               ul.css("left",-imgw*(lis.length-5));
               pic=lis.length-5;
           }
           pic--;
           ul.animate({left:-imgw*pic},300);
       });
       $("#four").on("mouseenter",function(){
           $("#four_arr").show();
           $(this).css("border-color","#00C1DE");
       }).on("mouseleave",function(){
           $("#four_arr").hide();
           $(this).css("border-color","#4F5356");
       });
       var lih=lis.height();
       var timer111,index;
       lis.on("mouseenter",function(){
           index=$(this).index();
           var zh=0;
           timer111=setInterval(function(){
               if(zh<360){
                   zh++;
               }else{
                   zh=0;
               }
               $(".four  li span img")[index].style.transform="rotate("+zh+"deg)";
           },1);
           $(this).stop().animate({
               backgroundColor:"#0000d9"
           },300).find("span img").stop().animate({
               top:lih*0.1
           },300).next().stop().animate({
               top:lih*0.6
           },300,function(){
               $(this).text(arr[index]).css({left:-20,fontSize:14});
           }).next().stop().animate({
               top:lih*0.4
           })
       }).on("mouseleave",function(){
           $(".four  li span img")[index].style.transform="rotate(360deg)";
           $(this).stop().animate({
               backgroundColor:"#212427"
           },300).find("span img").stop().animate({
               top:lih*0.2
           },300).next().stop().animate({
               top:lih*0.4
           },300,function(){
               $(this).text("—").css({left:50,fontSize:20});
           }).next().stop().animate({
               top:lih*0.6
           })
           clearInterval(timer111);
       })
   }
})