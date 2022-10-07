// let usserArray = [];
// function AddData() {
//     if (usserArray.length == 0) {
//         id = 1;
//     }
//     else {
//         var id = usserArray[usserArray.length - 1].id + 1;
//         console.log(id);
//     }
//     var gender = document.getElementsByName('gender');
//     for (i = 0; i < gender.length; i++) {
//         if (gender[i].checked) {
//             finalgender = gender[i].value;
//             break;

//         }
//     }
//     let user = {
//         id: id,
//         firstName: document.getElementById("fName").value,
//         lastName: document.getElementById("lName").value,
//         email: document.getElementById("email").value,
//         dob: document.getElementById("dob").value,
//         address: document.getElementById("address").value,
//         gender:finalgender


//     }
//     usserArray.push(user);
//     console.log(usserArray);
// }

// var btn = document.getElementById("btn");
// btn.addEventListener("click", displayDetails);
// var row = 1;

// function displayDetails() {
//     if (document.getElementById("fName").value == "") {
//         alert("Please fill Firstname")
//     }
//     else {
//         var fname = document.getElementById("fName").value;
//     }
//     if (document.getElementById("lName").value == "") {
//         alert("Please fill LastName")
//     }
//     else {
//         var lname = document.getElementById("lName").value;
//     }
//     if (document.getElementById("male").checked == false && document.getElementById("female").checked == false && document.getElementById("other").checked == false) {
//         alert("gender")
//     }
//     else {
//         var gender = document.getElementsByName('gender');
//         for (i = 0; i < gender.length; i++) {
//             if (gender[i].checked) {
//                 gender = gender[i].value;
//                 break;

//             }
//         }

//     }
//     if (document.getElementById("email").value == "") {
//         alert("Please fill Email")
//     }
//     else {
//         var email = document.getElementById("email").value;
//     }
//     if (document.getElementById("dob").value == "") {
//         alert("Please fill Date Of Birth")
//     }
//     else {
//         var dob = document.getElementById("dob").value;
//     }
//     if (document.getElementById("address").value == "") {
//         alert("Please fill Address")
//     }
//     else {
//         var address = document.getElementById("address").value;
//     }
//     if (document.getElementById("myFile").value == "") {
//         alert("Please Upload Resume")
//     }
//     else {
//         var address = document.getElementById("myFile").value;
//     }







//     if (fname != undefined && lname != undefined && email != undefined && dob != undefined && address != undefined && gender != undefined &&fillinput.files.length>=1&&emailcheck==true) {
// console.log("formddata", FormData)
// if(selectedRow==null){

// }
// emailtextbox.style.borderBottomColor = '#000000';
// var fname = document.getElementById("fName").value;
// var lname = document.getElementById("lName").value;
// var email = document.getElementById("email").value;
// var dob = document.getElementById("dob").value;
// var address = document.getElementById("address").value;

// var table = document.getElementById("tble");
// var row = table.insertRow(1);
// var cell1 = row.insertCell(0);
// var cell2 = row.insertCell(1);
// var cell3 = row.insertCell(2);
// var cell4 = row.insertCell(3);
// var cell5 = row.insertCell(4);
// var cell6 = row.insertCell(5);
// var cell7 = row.insertCell(6);

// cell1.innerHTML = fname;
// cell2.innerHTML = lname;
// cell3.innerHTML = gender;
// cell4.innerHTML = email;
// cell5.innerHTML = dob;
// cell6.innerHTML = address
// cell7.innerHTML = '<button style="font-size:10px" onClick="getData(this)" class="btn btn-primary">EDIT</button> <button style="font-size:10px" id="delebtn" class="deleteBtn" >Delete</button>'
//     var html = "<table border='1|1'>";
//    for(var i=0;i<usserArray.length;i++){
//     html+="<tr>";
//     html+="<td>"+usserArray[i].id+"</td>";
//     html+="<td>"+usserArray[i].firstName+"</td>";
//     html+="<td>"+usserArray[i].lastName+"</td>";
//     html+="<td>"+usserArray[i].email+"</td>";
//     html+="<td>"+usserArray[i].dob+"</td>";
//     html+="<td>"+usserArray[i].address+"</td>";

//     html+="</tr>";

//    }
//    html+="</table>";
//    document.getElementById("tble").innerHTML = html;


// document.getElementById("fName").value='';
// document.getElementById("lName").value='';
// document.getElementById("email").value='';
// document.getElementById("dob").value='';
// document.getElementById("address").value='';
// document.getElementById("male").checked=false;
// document.getElementById("female").checked=false;
// document.getElementById("other").checked=false;







// }


// 
// }/

function fileValidation() {
    fillinput = document.getElementById('myFile');
    var filePath = fillinput.value;

    var allowedExtension = /(\.jpg|\.jpeg|\.png|\.gif)$/i;

    if (!allowedExtension.exec(filePath)) {
        alert('Invalid file type');
        fillinput.value = '';
        return false;
    }
    else {

    }
}
var emaillabel = document.getElementById("emlabel");
var emailtextbox = document.getElementById("email");
function validateEmail() {

    emaillabel.style.bottom = "400px";
    var emailError = document.getElementById("emailerror");
    if (email.value.length == 0) {
        emailError.innerHTML = "";

        return true;
    }
    if (!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = ("please Enter a valid email");
        emailtextbox.style.borderBottomColor = "red";
        emailcheck = false;
        return false;
    }
    emailError.innerHTML = "";
    emailtextbox.style.borderBottomColor = "green";
    emailcheck = true;
    return true;

}


// function getData(e) {
//         selectedRow=td.patd.parentElement.parentElement;
//    var table=document.getElementById('tble'),rIndex;
//     for(var i=0;i<table.rows.length;i++){
//         table.rows[i].onclick=function()
//         {
//             rIndex=this.rowIndex;
//             document.getElementById('fName').value=this.cells[0].innerHTML;
//             document.getElementById('lName').value=this.cells[1].innerHTML;

//             if(this.cells[2].innerHTML=="male"){
//                 document.getElementById('male').checked=true;
//             }
//             else if((this.cells[2].innerHTML=="female")){
//                 document.getElementById('female').checked=true;
//             }
//             else{
//                 document.getElementById('other').checked=true;
//             }
//             document.getElementById('email').value=this.cells[3].innerHTML;
//             document.getElementById('dob').value=this.cells[4].innerHTML;
//             document.getElementById('address').value=this.cells[5].innerHTML;
//             console.log(this.cells[0].innerHTML);
//             console.log(this.cells[1].innerHTML);
//             console.log(this.cells[2].innerHTML);
//             console.log(this.cells[3].innerHTML);
//             console.log(this.cells[4].innerHTML);

//         }
//     }
// }

// function updateRecord(formddata){
//     selectedRow.cell1[0].innerHTML=formddata.fName
// }



// const tableEl=document.querySelector('table');
//  tableEl.addEventListener('click',onDeleteRow);

//  function onDeleteRow(e){
//     if(!e.target.classList.contains("deleteBtn")){
//         return
//     }
//     const btn=e.target;
//     console.log(e.closest);
//     btn.closest("tr").remove();
//  }
//  var selectedRow = null
//  function onFormSubmit(e){
//     event.preventDefault();
//     var formData=readFormData();
//     if(selectedRow==null){

//     }
//     else{

//     }
//  }

//  function insertNewRecord(data) {
//     var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
//     var newRow = table.insertRow(table.length);
//     cell1 = newRow.insertCell(0);
// 		cell1.innerHTML = data.productCode;
//     cell2 = newRow.insertCell(1);
// 		cell2.innerHTML = data.product;
//     cell3 = newRow.insertCell(2);
// 		cell3.innerHTML = data.qty;
//     cell4 = newRow.insertCell(3);
// 		cell4.innerHTML = data.perPrice;
//     cell4 = newRow.insertCell(4);
//         cell4.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
// }



var selectedRow = null
function onFormSubmit(e) {
    event.preventDefault();
    var formData = readFormData();
    if (formData.fName != "" && formData.lName != "" && formData.gender != "" && formData.email != "" && formData.dob != "" && formData.address != "") {
        if (selectedRow == null) {
            instertNewRecord(formData);
        }
        else {
            updateRecord(formData);
        }
        resetForm();
    }
    else {
        alert("please fill Mandatory fields ")
    }


}

function readFormData() {
    var formData = {};
    formData['fName'] = document.getElementById("fName").value;
    formData['lName'] = document.getElementById("lName").value;
    if (document.getElementById("male").checked != false || document.getElementById("female").checked != false || document.getElementById("other").checked != false) {
        var gender = document.getElementsByName('gender');
        for (i = 0; i < gender.length; i++) {
            if (gender[i].checked) {
                finalgender = gender[i].value;
                break;

            }
        }
    }
    else {
        alert("please fill mandatory fields")
    }

    formData['gender'] = finalgender;
    formData['email'] = document.getElementById("email").value;
    formData['dob'] = document.getElementById("dob").value;
    formData['address'] = document.getElementById("address").value;
    formData['myFile'] = document.getElementById("myFile").value;
    if (formData['myFile'] != "" && formData['myFile'] != undefined) {
        formData['myfile'] = document.getElementById("address").value;
    }
    else {
        alert("Please Upload Resume")
    }
    return formData;


}


function instertNewRecord(data) {

    var table = document.getElementById("tble").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.lName;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.gender;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.email;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.dob;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.address;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = `<button onClick="onEdit(this)" id=editbtn class="button-32">Edit</button> <button onClick="onDelete(this)"class="button-85" >Deletee</button>`;


    emailtextbox.style.borderBottomColor = "#96948c";
}


function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("lName").value = selectedRow.cells[1].innerHTML;

    // document.getElementById("gender").value=selectedRow.cells[2].innerHTML;
    if (selectedRow.cells[2].innerHTML == "male") {
        document.getElementById('male').checked = true;
    }
    else if ((selectedRow.cells[2].innerHTML == "female")) {
        document.getElementById('female').checked = true;
    }
    else {
        document.getElementById('other').checked = true;
    }
    document.getElementById("email").value = selectedRow.cells[3].innerHTML;
    document.getElementById("dob").value = selectedRow.cells[4].innerHTML;
    document.getElementById("address").value = selectedRow.cells[5].innerHTML;
}

function onDelete(td) {
    if (confirm('Do you want to delete this record')) {
        row = td.parentElement.parentElement;
        document.getElementById('tble').deleteRow(row.rowIndex);
        resetForm();
    }

}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fName;
    selectedRow.cells[1].innerHTML = formData.lName;
    selectedRow.cells[2].innerHTML = formData.gender;
    selectedRow.cells[3].innerHTML = formData.email;
    selectedRow.cells[4].innerHTML = formData.dob;
    selectedRow.cells[5].innerHTML = formData.address;



}




function resetForm() {
    document.getElementById("fName").value = '';
    document.getElementById("lName").value = '';
    document.getElementById("email").value = '';
    document.getElementById("dob").value = '';
    document.getElementById("address").value = '';
    document.getElementById("male").checked = false;
    document.getElementById("female").checked = false;
    document.getElementById("other").checked = false;
    selectedRow = null;
}

ex = false;
fr = false;

isAction = true;

function fmChange1() {
    fr = true;
}
function fmChange1() {
    fmlabel = 123;
}


let btn = document.getElementById('fffrom1');
let div = document.getElementById('form');
let table1=document.getElementById('tbl')
let form1=document.getElementById('form1')
let table=document.getElementById("extbl")

btn.addEventListener('click', () => {
    var x=10;
    var y=660;
    var z=100;
    var z1=775;
    var z2=140;
    var z3=640;
    if (div.style.display === "none") {
        div.style.display = "block";
        table1.style.display="block";
        form1.style.position="absolute";
        form1.style.left=y+'px';
        table.style.position="absolute";
        table.style.top=z1+'px';
        table.style.top=z1+'px';
        table.style.left=z3+'px';
    }
    else {
        div.style.display = 'none';
        table1.style.display="none"
        form1.style.position="absolute";
        form1.style.left=x+'px';
        table.style.position="absolute";
        table.style.top=z+'px';
        table.style.left=z2+'px';
    }
})

let btn2 = document.getElementById('efform1');
let div2 = document.getElementById('form1');
btn2.addEventListener('click', () => {
    if (div2.style.display === "none") {
        div2.style.display = "block";
    }
    else {
        div2.style.display = 'none';
    }
})


//   EXPREINCE FORM


var selectedRows = null
let ExperinceArray = [];
let getarray=[];
function exformDataSubmit(e) {
    event.preventDefault();
    var formDatas = readEXFormData();
    ExperinceArray.push(formDatas);
    console.log(ExperinceArray);
    localStorage.clear;
    console.log('array',ExperinceArray);
    const jsonobj=JSON.stringify(ExperinceArray);
    localStorage.setItem('userArray',jsonobj);
    if(selectedRow==null){
        instertNewRecords(formDatas);
    }
    else{
        updateRecord(formData);
    }
    resetForm();
}


function readEXFormData() {
    var formData = {};
    formData['firstName'] = document.getElementById("firstName").value;
    if (document.getElementById("f1male").checked != false || document.getElementById("f1female").checked != false || document.getElementById("f1other").checked != false) {
        var gender = document.getElementsByName('genderr');
        for (i = 0; i < gender.length; i++) {
            if (gender[i].checked) {
                finalgender = gender[i].value;
                break;

            }
        }
    }
    else {
        alert("please fill mandatory fields")
    }

    formData['gender'] = finalgender;
    formData['email'] = document.getElementById("f1email").value;
    var fe = document.getElementById('fe');
    var be = document.getElementById('be');
    var db = document.getElementById('db');
    var fs = document.getElementById('fs');
    if (fe.checked == true) {
        var FrontEnd= 'FrondEnd'
    }
    if (be.checked == true) {
        var BackEnd = 'Backend'
    }
    if (db.checked == true) {
        var DataBase= 'DataBase'
    }
    if (fs.checked == true) {
        var FullStack = 'FullStack'
    }
    var t=new Object();
    if(FrontEnd==undefined){

    }
    else{
        t.FrontEnd=FrontEnd;
    }
    if(BackEnd==undefined){

    }
    else{
        t.BackEnd=BackEnd;
    }
    if(DataBase==undefined){

    }
    else{
        t.DataBase=DataBase;
    }
    if(FullStack==undefined){

    }
    else{
        t.FullStack=FullStack;
    }
    formData['skils']=t;
    formData['years']=document.getElementById('yr').value;
    
    formData['dob'] = document.getElementById("f1dob").value;
    formData['address'] = document.getElementById("f1address").value;
    formData['address'] = document.getElementById("f1address").value;
        // formData['myFile']=document.getElementById("f1myFile").value;
    // if(formData['myFile']!=""&&formData['myFile']!=undefined){

    // }
    // else{
    //     alert("Please Upload Resume")
    // }
    return formData;


}
var fs = document.getElementById('fs');
function check() {
    if (fs.checked == true) {
        document.getElementById('fe').checked = true;
        document.getElementById('be').checked = true;
        document.getElementById('db').checked = true;
    }
}
var fe = document.getElementById('fe');
var be = document.getElementById('be');
var db = document.getElementById('db');
function ck1() {
    if (fe.checked == true && be.checked == true && db.checked == true) {

        document.getElementById('fs').checked = true;
    }
}

function ck2() {
    if (fe.checked == true && be.checked == true && db.checked == true) {

        document.getElementById('fs').checked = true;
    }
}
function ck3(){
    if(fe.checked==true&&be.checked==true&&db.checked==true){
    
    document.getElementById('fs').checked=true;
    }
    }


function instertNewRecords(formDatas){
    var table=document.getElementById('extbl').getElementsByTagName('tbody')[0];
    var newrows=table.insertRow(table.length);
    cell1=newrows.insertCell(0);
    cell1.innerHTML=formDatas.firstName;
    cell2=newrows.insertCell(1);
    cell2.innerHTML=formDatas.gender;
    cell3=newrows.insertCell(2);
    cell3.innerHTML=formDatas.email;
    cell4=newrows.insertCell(3);
    cell4.innerHTML=formDatas.years;
    cell5=newrows.insertCell(4);
    var arr=[];
    if(formDatas.skils.FrontEnd){
        arr.push(formDatas.skils.FrontEnd);
    }
    if(formDatas.skils.BackEnd){
        arr.push(formDatas.skils.BackEnd);
    }
    if(formDatas.skils.DataBase){
        arr.push(formDatas.skils.DataBase);
    }
    if(formDatas.skils.FullStack){
    if(arr.length==3){
        arr=[];
        arr.push(formDatas.skils.FullStack);
    }
       
    }
    cell5.innerHTML=arr.join('<br>');
    cell6=newrows.insertCell(5);
    cell6.innerHTML=formDatas.dob;
    cell7=newrows.insertCell(6);
    cell7.innerHTML=formDatas.address;

    }