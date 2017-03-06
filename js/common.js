/**
 * Created by Ibokan on 2016/8/27.
 */
$(".btn").on("click",function(){
    Tab1();
    $(".login").css({display:"none"})
})
$(".quit").on("click",function(){
    $(".login").css({display:"block"});
    $(".index").css({display:"none"});
})
    setInterval(function(){
    $("#UnsoL_num").html($("#Unsol_con li").length)
    $("#UnsoR_num").html($("#UnsoR_con li").length)
},1)
$(".FAQ").animate({bottom:0})
$(".usertxt").animate({right:0})
$(".itxt1").on("click",function(){
    $(".itxt1").val("");
    $(".itxt1").css({color:"black"})
})
$(".itxt1").on("blur",function(){
    $(".itxt1").css({color:""})
    $(".itxt1").val("手机号");
})
$(".FAQ_nav ").eq(0).find("li").on("click",function(){
    var i=$(this).index();
    $(this).removeClass().addClass("navselect").siblings().removeClass();
    $(".FAQ_navcon").eq(0).find("ul").eq(i).css({display:"block"}).siblings().css({display:"none"})
})
$(".FAQ_nav ").eq(1).find("li").on("click",function(){
    var i=$(this).index();
    $(this).removeClass().addClass("navselect").siblings().removeClass();
    $(".FAQ_navcon").eq(1).find("ul").eq(i).css({display:"block"}).siblings().css({display:"none"})
})
/*下拉上拉*/
function FAQ_conshow(){
    $(".FAQ_content").slideDown();
    $(".FAQ_headimg").attr("src","images/u1500.png");
}
$(".FAQ_headR").on("click",function (){
    if($(".FAQ_content").css("display")=="block")
    {
        $(".FAQ_content").slideUp();
        $(".FAQ_headimg").attr("src","images/u1485.png");
    }
    else {
        $(".FAQ_content").slideDown();
        $(".FAQ_headimg").attr("src","images/u1500.png");
    }
})
$(".txtL").on("click",FAQ_conshow)
$(".btnL").on("click",FAQ_conshow)
$(".cus_con_nav li").on("click",function(){
    $(this).removeClass().addClass("cus_change").siblings().removeClass();
    $(".cus_tab ul").eq($(this).index()).css({display:"block"}).siblings().css({display:"none"});
})
$(".cus_nav li").on("click",function(){
    if($(this).index()<2) {

        $(this).removeClass().addClass("cus_navselect").siblings().removeClass();
        $(".cus_main").eq($(this).index()).css({display:"block"}).siblings().css({display:"none"});
    }
})
$("#sex").on("click",function(){
    if($("#sex").hasClass("man"))
    {
        $("#sex").removeClass().addClass("women").html("女");
    }
    else {
        $("#sex").removeClass().addClass("man").html("男");
    }
})
$(".imgt").on("click",function(){
    if($(".imgt_hide").css("display")=="block") {
        $(".imgt_hide").slideUp("fast");
    }
    else {
        $(".imgt_hide").slideDown("fast");
    }
})
$(".imgt_hide li").on("click",function(){
    $(".itxt1").val($(this).html());
    $(".tel_ico").attr("src","images/"+$(this).index()+".png")
})
/*页面切换*/
function Tab2(){
    $(".index").eq(0).css({display:"none"})
    $(".index").eq(1).css({display:"block"})
    $(".FAQ_content").css({display:"none"})
    $(".FAQ").css({bottom:"-100px"}).animate({bottom:0})
    $(".usertxt").css({right:"-300px"}).animate({right:0})
}
$(".ibt1").on("click",Tab2)
$(".Unsol_con li").on("click",Tab2)
function Tab1(){
    $(".index").eq(1).css({display:"none"})
    $(".index").eq(0).css({display:"block"})
    $(".FAQ_content").css({display:"none"})
    $(".FAQ").css({bottom:"-100px"}).animate({bottom:0})
    $(".usertxt").css({right:"-300px"}).animate({right:0})
}
$(".user_back").on("click",Tab1)
$(".user_save1").on("click",Tab1)
/*已解决未解决需上报*/
$(".uesr_infor div").on("click",function(){
    $(this).removeClass("bac1810").addClass("bac1812").siblings().removeClass("bac1812").addClass("bac1810")
})