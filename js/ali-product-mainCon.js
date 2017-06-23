$(function(){
  $(".ali-product-mainCon ul li").mouseenter(function ( ){
    $(this).css("opacity",1).siblings().css("opacity",0.4);
    $(this).parents("div").siblings().find(".ali-product-tab").css("opacity",0.4);
  });
  $(".ali-product-mainCon").mouseleave(function (){
    $(this).find('li').css("opacity",1);
  })

  $(".ali-product-show-more").on("click",function(){
    if($(this).text() == "收起"){
      $("#ali-product-layer").slideUp(800);
      $(this).text("查看全部");
    }else{
      $("#ali-product-layer").slideDown(1200);
      $(this).text("收起");
    }
  })

})