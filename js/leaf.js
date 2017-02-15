$(function(){
	var length=$(".nav li").length;
	/*
	 i  	0     1	  	2	3	4   
	 n	   -2	 -1     0   1   2
	 deg  -144   -72    0  72  144
	 */
   	var  clicked=true;
	$(".nav li:last-child").click(function(){
	
		for(var i=0;i<length;i++)
		{
			var n=i-length/2+0.5;
			if(clicked){
				n=n*60;
			}
			else{
				n=360;
			}							
			$(".nav li").eq(i).each(function(){
				$(this).css({"transform":'rotate('+n+'deg)'});
			})			
		}
		clicked=!clicked;
	});
		
     	for(var i=0;i<length-1;i++)
	{
		$(".nav li").eq(i).click(function(){
			var leftDeg=0;
			var rightDeg=50;	
			$(this).css({"transform":'rotate(0deg)'});
			
			for(var i=$(this).index()-1; i>=0; i--)
			{
				leftDeg-=50;
				$(".nav li").eq(i).each(function(){
				$(this).css({"transform":'rotate('+leftDeg+'deg)'});
				})
			}
		
			for(var i=$(this).index()+1; i<length; i++)
			{
				rightDeg+=50;
				$(".nav li").eq(i).each(function(){
				$(this).css({"transform":'rotate('+rightDeg+'deg)'});
				})
			}
		})
		
	}
	
});
