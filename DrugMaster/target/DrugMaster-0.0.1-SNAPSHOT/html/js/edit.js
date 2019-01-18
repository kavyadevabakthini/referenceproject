var oTable;
const token= "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MzM1MzI2NzIwNDd9.ly4V3WoJyLqGxu48hm2vJgjfCdAEEWcHPeP06PWr6oM";
const headers = {'x-access-token':token};
$(document).ready(function() {
	if (token) {
	} 
	ShowExam_dtls();
	$("#hupdate").hide();
});
function ShowExam_dtls() {
	var mrno="PT20188616381477";
	var eid=111;
	var vid=1;
	/*var epno=201;
	var vid=1;*/
	$.ajax({
		"type": "GET",
	"url": "http://localhost:8080/api/v1/edit/"+mrno+"/"+eid+"/"+vid,
		"data": "",
		"dataSrc": "",
		"headers": headers,
		dataType: 'json'})
		.done (
				function(rdata) {
					document.getElementById("exam").reset();
					alert(rdata)
					/*var txndata=(rdata.examTxn);
					alert("txndata"+txndata)*/
					var data = rdata.examTxnDtls;
					alert(data)
					$("#notes").val(data.notes);
					sessionStorage.setItem("txn", rdata.id);
					alert(rdata.id)
					sessionStorage.setItem("notes",rdata.notes);
					alert(rdata.notes);
					oTable = $('#edit').DataTable({
						"paging" : false,
						"searching" : false,
						"bInfo" : false,
						"language": {
							"zeroRecords": "No Records Found"
						},
						"dom": '<"toolbar">frtip',
						data: data,
						"columns": [
							{ "data": "examType" },
							{ "data": "examSpecific" },
							{ "data": "status" },
							{ "data": "description" },
							{ "data": "examProgress" },
							{ "data": "examDate" },
							{
								"data": "examId",
								render: function (data, type, row) {
									return "<input type='button' id='" + row.examId + "'_edit' onclick='edit(this.id)' value='Edit'/>"
								}
							},
							{
								"data": "examId",
								render: function (data, type, row) {
									return "<input type='button' id='" + row.examId + "'_edit' onclick='delete_exam(" + row.examId + ")' value='Remove'/>"
								}
							}
							]
					});
				})
				.fail(function (jqXHR, exception) {
					error(jqXHR, exception);
				});
};
function edit(id){
	$("#hupdate").show();
	$("#hadd").hide();
	$('#edit tbody').on('click', 'tr', function () {
		var data = oTable.row( this ).data();
		$("#type").val(data.examType);
		$("#specific").val(data.examSpecific);
		$("#status").val(data.status);
		$("#description").val(data.description);
		$("#progress").val(data.examProgress);
		$("#date").val(data.examDate);
		var notes=sessionStorage.getItem("notes");
		$("#notes").val(notes);
		sessionStorage.setItem("id",data.PhysicalExamTxn );
		sessionStorage.setItem("tid",data.examId );
	} );
}
function update(){
	var postData = {};
	postData.notes = $("#notes").val();
	var tid=sessionStorage.getItem("tid");
	postData.tid = tid;
	var id=sessionStorage.getItem("id");
	postData.id= id;
	var recordsList = [];
	var datarecord = {};
	var exam_type=$("#type option:selected").val();
	datarecord.exam_type=exam_type;
	var tid=sessionStorage.getItem("tid");
	datarecord.exam_id = tid;
	var exam_specific=$("#specific option:selected").val();
	datarecord.exam_specific=exam_specific;
	var status=$("#status option:selected").val();
	datarecord.status=status;
	var description=$("#description").val();
	datarecord.description=description;
	var exam_progress=$("#progress").val();
	datarecord.exam_progress=exam_progress;
	var exam_date=$("#date").val();
	datarecord.exam_date=exam_date;
	var user = "kavya";
	datarecord.updated_by =user;
	var time=updatetime();
	datarecord.updated_on =time;
	recordsList.push(datarecord);
	postData.data = recordsList;
	var Data = JSON.stringify(postData);
	$.ajax({
		url : "http://localhost:8080/api/v1/edit/update",
		type : "PUT",
		data : Data,
		contentType : "application/json", 
		dataType : "json",
		headers : headers,
		processdata : true,})
		.done(function (response) {
			document.getElementById("exam").reset();
			reload_table();
			$("#hupdate").hide();
			$("#hadd").show();					
		})
		.fail(function (jqXHR, exception) {
			error(jqXHR, exception);
		});
}
function updatetime()
{
	var today = new Date();
	var date = today.getFullYear()+"-"+(today.getMonth()+1)+"-"+today.getDate();
	var time = today.getHours() +":"+ today.getMinutes()+":"+ today.getSeconds();
	var time=date+" "+time;
	return time;
}
function error(jqXHR, exception) {
	var msg = '';
	if (jqXHR.status === 0) {
		msg = 'Not connected.\n Verify Your Network.';
	} else if (jqXHR.status == 404) {
		msg = 'Requested page not found. [404]';
	} else if (jqXHR.status == 500) {
		msg = 'Internal Server Error [500].';
	} else if (exception === 'parsererror') {
		msg = 'Requested JSON parse failed.';
	} else if (exception === 'timeout') {
		msg = 'Time out error.';
	} else if (exception === 'abort') {
		msg = 'Ajax request aborted.';
	} else {
		msg = 'Uncaught Error.\n' + jqXHR.responseText;
	}
	alert(msg);
}
function reload_table(){
	$('#edit').dataTable().fnClearTable();
	$('#edit').dataTable().fnDestroy();
	ShowExam_dtls();
}
function delete_exam(id){
	$.ajax({
		url : "http://localhost:8080/api/v1/delete/"+id,
		type : "Delete",
		data : "",
		contentType : "application/json", 
		dataType : "json",
		headers : headers,
		processdata : true,})
		.done(function (response) {
			reload_table();
		})
		.fail(function (jqXHR, exception) {
			error(jqXHR, exception);
		});
}
function post() {
	var notes=$("#notes").val();
	var exam_type=$("#type option:selected").val();
	var exam_specific=$("#specific option:selected").val();
	var status=$("#status option:selected").val();
	var description=$("#description").val();
	var exam_progress=$("#progress option:selected").val();
	var exam_date=$("#date").val();
	var id=sessionStorage.getItem("txn");
	var created="kavya";
	var datadtls={"notes":notes,"id":id,"exam_type":exam_type,"exam_specific":exam_specific,"status":status,"description":description,"exam_progress":exam_progress,"exam_date":exam_date,"physical_exam_txn_id":id,"created_by":created,"updated_by":created};
	var tid = sessionStorage.getItem("txn");
	var Data={"medical_record_no":1001,"episode_id":201,"visit_id":1,"notes":notes,datadtls};
	if(tid=="undefined"){
		if (description=="" && exam_type==""&& exam_specific==""&& status==""&& exam_progress==""&& exam_date=="") {
			$.ajax({
				url : "http://localhost:8080/api/v1/edit-create",
				type : "PUT",
				data : JSON.stringify(Data), 
				contentType : "application/json", 
				dataType : "json",
				headers : headers,
				processdata : true,
			})
			.done(function (response) {
				reload_table();
				$("#description").val('');

			})
			.fail(function (jqXHR, exception) {
				error(jqXHR,exception);
			});
		}else{

			$.ajax({
				url : "http://127.0.0.1:3000/api/v1/edit-txn/table",
				type : "POST",
				data : JSON.stringify(Data),
				contentType : "application/json",
				dataType : "json",
				headers : headers,
				processdata : true,
			}).done(function(response) {
				reload_table();
				$("#description").val('');
			}).fail(function(jqXHR, exception) {
				error(jqXHR, exception);
			});
		}
	}
	else{		
		$.ajax({
			url : "http://localhost:8080/api/v1/edit/",
			type : "POST",
			data : JSON.stringify(datadtls),
			contentType : "application/json",
			dataType : "json",
			headers : headers,
			processdata : true,
		}).done(function(response) {

			reload_table();
			$("#description").val('');
		}).fail(function(jqXHR, exception) {
			error(jqXHR, exception);
		});
	}
}
