$(function(){
	//是否出现返回顶部
	isToTop();	
	//当页面滚动时判断是否出现返回顶部
	window.onscroll = function(){
		isToTop();
	}
	$(".top").on("click",function(){
        $('body,html').animate({scrollTop:0},500);
	});
	//鼠标移动到和移除课程块
	$("#changeid li").each(function(index){
		$(this).on("mouseenter",function(){
			var curClass=$("#changeid").attr("class");//获得当前课程列表的排列方式
			if(curClass=="lesson-list"){
				$(".lesson-infor p").eq(index).css({
					"height":"52px",
					"opacity":"1"
					}).stop(true).slideDown(500);
				$(".zhongji").eq(index).show();
				$(".learn-number").eq(index).show();
				$(".lessonicon-box").eq(index).css("bottom","-15px");
				$(".lesson-infor").eq(index).stop(true).animate({"height":"175px"},500);
				}
			$(".lessonimg-box .lesson-shoucang").eq(index).show();
			$(".lessonplay").eq(index).css("opacity","1");			
			
		}).on("mouseleave",function(){
			var curClass=$("#changeid").attr("class");
			if(curClass=="lesson-list"){
				$(".lesson-infor p").eq(index).slideUp(500);
				$(".zhongji").eq(index).hide();
				$(".learn-number").eq(index).hide();
				$(".lessonicon-box").eq(index).css("bottom","4px");
				$(".lesson-infor").eq(index).animate({"height":"88px"},500);
			}
			$(".lessonimg-box .lesson-shoucang").eq(index).hide();
			$(".lessonplay").eq(index).css("opacity","0");			
			
		});
		
	});
	//切换成课程块
	$(".kuai-icon").on("click",function(){
		var curClass=$("#changeid").attr("class");
		if(curClass=="lesson-list2"){
			$("#changeid").removeClass("lesson-list2").addClass("lesson-list");
			$(".lesson-infor p").hide();
			$(".zhongji").hide();
			$(".learn-number").hide();
		}	
		
	});
	//切换成课程列表
	$(".list-icon").on("click",function(){
		var curClass=$("#changeid").attr("class");
		if(curClass=="lesson-list"){
			$("#changeid").removeClass("lesson-list").addClass("lesson-list2");
			$(".lesson-infor p").css({
				"height":"36px",
				"display":"block"
			});
			$(".zhongji").show();
			$(".learn-number").show();
			$(".lessonicon-box").css("bottom","4px");
		}	
	});
})
//判断是否出现反回顶部
function isToTop(){
	var scrollHeight=$(window).scrollTop();
	if(scrollHeight>0){
		$(".top i").css("display","block");
	}else{
		$(".top i").css("display","none");
	}

}