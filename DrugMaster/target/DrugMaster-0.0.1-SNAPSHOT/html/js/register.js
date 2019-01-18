$(function(){
	//var id=sessionStorage.getItem("id");
	var b='eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MzA3MDIyNjEwMzR9.S9ZTeT4TEHVhO47N4sNPb0Ifhs4vJl9QXtmWhskN5oU';

	if(!(id==null)){
	
		 $.ajax({
	          type:"GET",
	          url:"http://127.0.0.1:3000/api/v1/drug/"+id,
	          data:"",
	          headers: {'x-access-token':b,'Content-Type':'application/json','x-key':'kavya'},
	          success:function(json) {
	        var data=JSON.parse(json);
	            $.each(data,function(i,obj){
	    
	        $("#id").val(obj.drug_id);
	        $("#name").val(obj.drug_name);
	        $("#active").val(obj.active);
	       
	        }) ;
	          },
	          error: function(err) 
	          { 
	              alert(err);
	          }
	        });
	       
	  
	      } 

	});


function myfunction()
{
	 
	var b='eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MzA3MDIyNjEwMzR9.S9ZTeT4TEHVhO47N4sNPb0Ifhs4vJl9QXtmWhskN5oU';

	var username="kavya";

	name=$("#name").val();
	alert(name);
	lastname=$("#last_name").val();
	active=$("#active").val();
	
    if(id=="")
	   {
    	
    var postdata={
    "drug_id":id,
    "drug_name":name,
   "active":active,
    "createdby":username};

	
$.ajax({
		type:"POST",
		url:"http://localhost:3000/api/v1/drug/",
		   headers: {'x-access-token':b,'Content-Type':'application/json','x-key':'kavya'},
		data:postdata,
       // contentType: "application/json" ,	// content type sent to server
       // dataType: "text" , //Expected data format from server
		//processdata: true , 
		
		success:function(json) 
		{  
	       window.location.assign("drug-master.html");
		},
		error: function(err) 
		{
            alert(err);
		}

	});
	}

else{
	
	var username=sessionStorage.getItem("username");
	alert(username);
	var time=updatetime();
	alert(time);
	
	var postdata={
		   
		    "drug_name":name,
		    "active":active,
		  
		    "updatedby":username,
		    "updatedon":time,
		    };

	$.ajax({
		
		type:"PUT",
		url:"http://localhost:3000/api/v1/drug/update",
		data:postdata,
		success:function(response) 
		{  
			//$("div1").show();
		       window.location.assign("drug-master.html");
		},
		error: function(err) 
		{
            alert(err);
		}

	});
}
}

function updatetime()
{
    var today = new Date();
    var date = today.getFullYear()+"-"+(today.getMonth()+1)+"-"+today.getDate();
    var time = today.getHours() +":"+ today.getMinutes()+":"+ today.getSeconds();
    var time=date+" "+time;
    return time;
}
