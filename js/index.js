$(function(){
    $('#fullpage').fullpage({
        fixedElements:'#head',
        resize:'true',
        navigation:'true',
        loopHorizontal:'true',
        slidesNavigation:'true',
        navigationPosition:'right',
        navigationTooltips:['首页','关于我','专业技能','实践经历','联系方式'],
        css3:'ture',
        anchors:['page1','page2','page3','page4','page5'],   
        
        afterLoad: function(anchorLink,index){
			if(index==1){
			  $('#home_info_box').fadeOut(1000).fadeIn(1000);
					$(".head-image").slideDown(400);
			}
			if(index==2){
				$("#about_info").animate({width:"700px",marginTop:"0",marginBottom:"0"},700,'easeOutElastic',function(){
					$("#about_info p").eq(0).animate({bottom:"0"},700,function(){
						$("#about_info p").eq(1).animate({bottom:"0"},700,function(){
							$("#about_info p").eq(2).animate({bottom:"0"},700);
						});
					});
				});	
				
				$(".about_list").slideUp("fast").slideDown("slow");
			}
			if(index==3){
				$("#skill_list_content").addClass("skill_scale");
			}
			if(index==4){
                $("#demo_list_slider").slideUp("slow").slideDown('slow');
			}
			
			if(index==5){}
		},
		onLeave:function(index){
			if(index==1){
			  $('#home_info_box').fadeIn(1000).fadeOut(1000);
					$(".head-image").slideUp(400);
			}
			if(index==2){		
				$("#about_info").animate({width:"700px",marginTop:"0",marginBottom:"0"},700,'easeOutElastic',function(){
					$("#about_info p").eq(2).animate({top:"0"},700,function(){
						$("#about_info p").eq(1).animate({top:"0"},700,function(){
							$("#about_info p").eq(0).animate({top:"0"},700);
						});
					});
				});	
			
				
			}
			if(index==3){
						$("#skill_list_content").removeClass("skill_scale");
			}
			if(index==4){
				        $("#demo_list_slider").slideDown("slow").slideUp('slow');
			}
			
			if(index==5){}
		}
  });
  
});

//主页特效

    
//技能切换    
   $(".skill_icon").click(function(){
		$(".skill_int").each(function(){
			if($(this).is(":visible")){
				$(this).slideUp(200);
				$(this).prev().removeClass("skill_flag_scale");
			}
		});
		if($(this).siblings(".skill_int").is(":hidden")){
			$(this).siblings(".skill_int").slideDown(400);
			$(this).siblings(".skill_flag").addClass("skill_flag_scale");
		}else{
			$(this).siblings(".skill_int").slideUp(200);
			$(this).siblings(".skill_flag").removeClass("skill_flag_scale");
		}
	});
	
//作品轮播	
	$("#demo_list_slider").mouseenter(function(){
		$("#demo_list_to").stop(true,false).fadeTo(700,1);
	}).mouseleave(function(){
		$("#demo_list_to").stop(true,false).fadeTo(700,0.1);
	});
	var page=1;
	$("#demo_timeline a").click(function(){
		$("#demo_detail_list").stop(true,false).animate({left:-$(".demo_detail").width()*$(this).index()},2000,"easeInOutCubic");
		page=$(this).index()+1;
		});
	$("#demo_list_toleft").click(function()
    {
		if(!$("#demo_detail_list").is(":animated")){
			if(page==1){
				$("#demo_detail_list").animate({left:"+=50"},200,function(){
					$(this).animate({left:"-=50"},200);
				});
				return false;
			}	
			$("#demo_detail_list").animate({left:"+="+$(".demo_detail").width()});
			page--;
		}
	});
	$("#demo_list_toright").click(function(){
		if(!$("#demo_detail_list").is(":animated")){
			if(page==4){
				$("#demo_detail_list").animate({left:"-=50"},200,function(){
					$(this).animate({left:"+=50"},200);
				});
				return;
			}
			$("#demo_detail_list").animate({left:"-="+$(".demo_detail").width()});
			page++;
		}
	});
