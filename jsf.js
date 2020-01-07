
$(document).ready(function()
{

	$("#mb").click(function(){

		var title=$("#tl").val();

		var content=$("#tl1").val();

		var e1="Can't Be empty !" ;
		

		var d1="type title here ... *";

		var d2="type content here ...*";

		if(title.length==0)
		{
			$("#tl").attr("placeholder",e1);
			//alert("Title field cannt be left blank ! ");
		}


		else if(content.length==0)
		{
			$("#tl1").attr("placeholder",e1);
			//alert("Content field can not be left blank 1");

		}

		else if(content.length==0 && title.length==0)
		{
			alert("Fields can not be blank !! ");
		}

		else
		{
			if(content.length!=0 && title.length!=0)
			{
				
				 $('<div id="accordion" style ="display:block;box-shadow:0px 0px 3px;width:auto;height:80px"  >'+'</br>'+'&nbsp;'+ title+'</br>'+'&nbsp;'+content+'</div>'+'</br>').appendTo("#w");



				$("#tl").val("");
				    $("#tl1").val("");
				    

				    }


				    // $("#tl").attr("placeholder",d1);
				    // $("#tl1").attr("placeholder",d2);

	    }

	});

});
