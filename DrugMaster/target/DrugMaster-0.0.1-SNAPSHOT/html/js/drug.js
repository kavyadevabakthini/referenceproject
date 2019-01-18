
var oTable;
$(document).ready(function() {
	var tokenKey = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MzIzNDU0ODUyMDJ9.OIyEjQ0r17rW9pPa-eeMHtKDfZaum3O803Xq2QHV38Q";
	var token = sessionStorage.getItem(tokenKey);
	var headers = {'x-access-token':tokenKey,'x-key':"kavya"};
	if (token) {
	   //headers.Authorization = token;
	}
	function showDrugs() {

  	  $.ajax({
  	      "type": "GET",
  	      "url": "http://localhost:8080/api/v1/drug",
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

  	           	  { "data": "drug_id" },
  	                  { "data": "name" },
  	          {
  	              "data": "active",
  	              render: function (data, type, row) {
  	                  if (data == true) {
  	                      return "<input type='checkbox' id='" + row.drug_id + "_active' checked='checked'/>"
  	                  } else {
  	                      return "<input type='checkbox' id='" + row.drug_id + "_active'/>"
  	                  };
  	              }
  	          },
  	          {
  	       	   "data": "drug_id", sortable: false,
  	       	   render: function (data, type, row) {

  	       	       return "<input type='button' id='" + row.drug_id + "_edit' onclick='Edit(" + row.drug_id + ")' value='Edit'/>"

  	       	   }
  	       	}
  	                  
  	        ]
  	          });

  	          
  	      }
  	  });
  	}
  	showDrugs();
  	});


function Edit(id){
	sessionStorage.setItem("id",id);
	var id=sessionStorage.getItem("id");
	
	
	$(function(){ 
	if(!(id==null)){
	$.ajax({
	         type:"GET",
	         headers: {'x-access-token': "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MzIzNDU0ODUyMDJ9.OIyEjQ0r17rW9pPa-eeMHtKDfZaum3O803Xq2QHV38Q",'x-key':"kavya"},
	         url:"http://localhost:8080/api/v1/drug/"+id,
	         data:"",
	         contentType : "application/json", // content type sent to server
	 		dataType : "text",
	 		headers : {
	 			'Content-Type' : 'application/json'
	 		},// Expected data format from server
	 		processdata : true,})

	 		.done(function (response) {
				var data=JSON.parse(response);
				
					$("#drug_name1").val(data.name);

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
	var id=sessionStorage.getItem("id");

	var name=$("#drug_name1").val();
	
	var ch=$("#checkbox-16").is(':checked')?1:0;
	var user="kavya";
	
	var postData=JSON.stringify({ "drug_id":id,"name":name,"active":ch,"updated_by":user })
	
	$.ajax({
	url:"http://localhost:8080/api/v1/drug/update",
	type:"PUT",
	data: postData , //Data sent to server
	 contentType: "application/json" ,	// content type sent to server
	   dataType: "text" ,
	   headers: {'x-access-token':'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MzIzNDU0ODUyMDJ9.OIyEjQ0r17rW9pPa-eeMHtKDfZaum3O803Xq2QHV38Q','x-key':"kavya"},//Expected data format from server
	   processdata: true ,})

	   .done(function (response) {
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