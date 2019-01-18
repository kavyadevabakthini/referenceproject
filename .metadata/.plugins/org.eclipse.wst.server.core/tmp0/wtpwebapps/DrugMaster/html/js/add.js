
function myfunction(){
	
var b='eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MzIzNDU0ODUyMDJ9.OIyEjQ0r17rW9pPa-eeMHtKDfZaum3O803Xq2QHV38Q';

var name=$("#drug_name").val();
var ch=$('#test').is(':checked') ? 1 : 0;

var created="kavya";


var date = new Date();
var year = date.getFullYear();
var month = date.getMonth() + 1;
month = (month < 10 ? "0" : "") + month;
var day  = date.getDate();
day = (day < 10 ? "0" : "") + day;
var cid=(day+""+month+""+year);



var postData=JSON.stringify({ "name":name,"created_by":created,"active":ch,"created_on":cid})
alert(postData)
$.ajax({
	url:"http://localhost:8080/api/v1/drug/",
	type:"POST",
	 data: postData , //Data sent to server
     contentType: "application/json" ,	// content type sent to server
     dataType: "text" ,
     headers: {'x-access-token':b,'Content-Type':'application/json','x-key':'kavya'},//Expected data format from server
     processdata: true ,})

     .done(function (response) {  
			document.getElementById("commentForm").reset();
			display();
			 reload_table();
		})
		.fail(function (jqXHR, exception) {
			error(jqXHR, exception);
		})
		.always(function () {
			alert("complete");
		});
	

	
}
function reload_table(){
	$('#drug').dataTable().fnClearTable();
	$('#drug').dataTable().fnDestroy();
	window.location.assign("drug-master.html");
}
function display(){
	$('#listdiv').show();
	$('#editdiv').hide();
	$('#adddiv').hide();
}
