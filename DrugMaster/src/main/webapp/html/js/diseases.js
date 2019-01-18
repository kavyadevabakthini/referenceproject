
var oTable;
$(document).ready(function() {
	var tokenKey = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MzIzNDU0ODUyMDJ9.OIyEjQ0r17rW9pPa-eeMHtKDfZaum3O803Xq2QHV38Q";
	var token = sessionStorage.getItem(tokenKey);
	var headers = {'x-access-token':tokenKey,'x-key':"kavya"};
	if (token) {
	   //headers.Authorization = token;
	}
	function showDiseases() {

  	  $.ajax({
  	      "type": "GET",
  	      "url": "http://localhost:8080/api/v1/disease",
  	      "data": "",
  	      "dataSrc": "",
  	      "headers": headers,
  	      dataType: 'json',
  	      async:false,
  	      success: function (data) {
  	          oTable = $('#example23').DataTable({
  	       	  
  	              "language": {
  	                  "zeroRecords": "No Records Found"
  	              },
  	              "dom": '<"toolbar">frtip',
  	              data: data,
  	              "columns": [

  	           	  { "data": "disease_id" },
  	                  { "data": "name" },
  	                { "data": "icd_code" },
  	          {
  	              "data": "active",
  	              render: function (data, type, row) {
  	                  if (data == true) {
  	                      return "<input type='checkbox' id='" + row.disease_id + "_active' checked='checked'/>"
  	                  } else {
  	                      return "<input type='checkbox' id='" + row.disease_id + "_active'/>"
  	                  };
  	              }
  	          },
  	          {
  	       	   "data": "drug_id", sortable: false,
  	       	   render: function (data, type, row) {

  	       	       return "<input type='button' id='" + row.disease_id + "_edit' onclick='Edit(" + row.disease_id + ")' value='Edit'/>"

  	       	   }
  	       	}
  	                  
  	        ]
  	          });

  	          
  	      }
  	  });
  	}
  	showDiseases();
  	});


function Edit(id){
	sessionStorage.setItem("id",id);
	var id=sessionStorage.getItem("id");
	
	
	$(function(){ 
	if(!(id==null)){
	$.ajax({
	         type:"GET",
	         headers: {'x-access-token': "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MzIzNDU0ODUyMDJ9.OIyEjQ0r17rW9pPa-eeMHtKDfZaum3O803Xq2QHV38Q",'x-key':"kavya"},
	         url:"http://localhost:8080/api/v1/disease/"+id,
	         data:"",
	         contentType : "application/json", // content type sent to server
	 		dataType : "text",
	 		headers : {
	 			'Content-Type' : 'application/json'
	 		},// Expected data format from server
	 		processdata : true,})

	 		.done(function (response) {
				var data=JSON.parse(response);
				
					$("#disease_name1").val(data.name);
					$("#icd1").val(data.icd_code);

					var ac=data.active;
					if(ac==1){
						$("#checkbox-16").prop('checked', true);
					}else{
						$("#checkbox-16").prop('checked', false);
					}
					$("#listdiv").hide();
					$("#editdiv").show();

				
			}).fail(function (jqXHR, exception) {
				error(jqXHR, exception);
			}).always(function () {
				alert("complete");
			});
	}

});
}



	function update(){
		alert("ooo")
	var id=sessionStorage.getItem("id");

	var name=$("#disease_name1").val();
	var icd=$("#icd1").val();
	
	var ch=$("#checkbox-16").is(':checked')?1:0;
	var user="kavya";
	
	var postData=JSON.stringify({ "disease_id":id,"name":name,"icd_code":icd,"active":ch,"updated_by":user })
	alert(postData)
	$.ajax({
	url:"http://localhost:8080/api/v1/disease/update",
	type:"PUT",
	data: postData , //Data sent to server
	 contentType: "application/json" ,	// content type sent to server
	   dataType: "text" ,
	   headers: {'x-access-token':'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MzIzNDU0ODUyMDJ9.OIyEjQ0r17rW9pPa-eeMHtKDfZaum3O803Xq2QHV38Q','x-key':"kavya"},//Expected data format from server
	   processdata: true ,})

	   .done(function (response) {
		location.assign("Diseases-master.html");
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
	function myfunction(){
		
		var b='eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MzIzNDU0ODUyMDJ9.OIyEjQ0r17rW9pPa-eeMHtKDfZaum3O803Xq2QHV38Q';

		var name=$("#disease_name").val();
		var icd =$("#icd").val();
		var ch=$('#test').is(':checked') ? 1 : 0;

		var created="kavya";


		var date = new Date();
		var year = date.getFullYear();
		var month = date.getMonth() + 1;
		month = (month < 10 ? "0" : "") + month;
		var day  = date.getDate();
		day = (day < 10 ? "0" : "") + day;
		var cid=(day+""+month+""+year);



		var postData=JSON.stringify({ "name":name,"icd_code":icd,"created_by":created,"active":ch,"created_on":cid})
		alert(postData)
		$.ajax({
			url:"http://localhost:8080/api/v1/disease/",
			type:"POST",
			 data: postData , //Data sent to server
		     contentType: "application/json" ,	// content type sent to server
		     dataType: "text" ,
		     headers: {'x-access-token':b,'Content-Type':'application/json','x-key':'kavya'},//Expected data format from server
		     processdata: true ,})

		     .done(function (response) {  
					document.getElementById("commentForm").reset();
					location.reload("Diseases-master.html")
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
			window.location.assign("Diseases-master.html");
		}
		function display(){
			$('#listdiv').show();
			$('#editdiv').hide();
			$('#adddiv').hide();
		}
