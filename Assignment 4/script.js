var drinkName = "NA";
function validateIp(object, type, nameType) {
  var regExName = /^[a-zA-Z]+$/;
  var regExEmail = /^[a-zA-Z0-9]+@northeastern\.edu$/;
  var regExPhone = /\d{3}-?\d{3}-\d{4}$/;
  var regExZip = /^([0-9]{5})$/;
  var name = "errorMsg" + nameType;

  switch (type) {
    case 1:
      if (!object.value.trim().match(regExName)) {
        object.style.border = "2px solid red";
        document.getElementById(name).style.display = "block";
        object.value = "";
      } else {
        object.style.border = "";
        document.getElementById(name).style.display = "none";
      }
      break;
    case 2:
      if (!object.value.match(regExEmail)) {
        object.style.border = "2px solid red";
        document.getElementById("errorMsgEmailId").style.display = "block";
        object.value = "";
      } else {
        object.style.border = "";
        document.getElementById("errorMsgEmailId").style.display = "none";
      }
      break;
    case 3:
      if (!object.value.match(regExPhone)) {
        object.style.border = "2px solid red";
        document.getElementById("errorMsgPhone").style.display = "block";
        object.value = "";
      } else {
        object.style.border = "";
        document.getElementById("errorMsgPhone").style.display = "none";
      }
      break;
    case 4:
      if (!object.value.match(regExZip)) {
        object.style.border = "2px solid red";
        document.getElementById("errorMsgZip").style.display = "block";
        object.value = "";
      } else {
        object.style.border = "";
        document.getElementById("errorMsgZip").style.display = "none";
      }
      break;
    case 5:
      if (object.value == null || object.value == "") {
        object.style.border = "2px solid red";
        document.getElementById(name).style.display = "block";
        object.value = "";
      } else {
        object.style.border = "";
        document.getElementById(name).style.display = "none";
      }
      break;
    case 6:
      if (object.value == null || object.value == "") {
        object.style.border = "2px solid red";
        document.getElementById(name).style.display = "block";
        object.value = "";
      } else {
        object.style.border = "";
        document.getElementById(name).style.display = "none";
      }
    break
    case 7:
      if (object.value == null || object.value == "") {
        object.style.border = "2px solid red";
        document.getElementById(name).style.display = "block";
        object.value = "";
      } else {
        object.style.border = "";
        document.getElementById(name).style.display = "none";
      }
    break
  }
}

function setDisplay(elementId, display){
  var obj = document.getElementById(elementId)
  obj.style.display = display;
  obj.focus();
}

function confirmInput() {
  var radios = document.getElementsByName("title");
  var formValid = false;

  var i = 0;
  while (!formValid && i < radios.length) {
    if (radios[i].checked) formValid = true;
    i++;
  }

  if (!formValid) {
    document.getElementById("errorRadio").style.display = "none";
  } else {
    document.getElementById("errorRadio").style.display = "block";
  }
}

function onCheck(checkboxElem) {
  var textField = document.getElementById("hiddenTextField");
  if (checkboxElem.checked) {
    textField.style.display = "block";
  } else {
    textField.style.display = "none";
  }
}

function trialMethod() {
  var table = document.getElementById("myTable");
  var title = document.querySelector('input[name = "title"]:checked').value;
  var fname = document.getElementsByName("firstName")[0].value;
  var lname = document.getElementsByName("lastName")[0].value;
  var emailID = document.getElementsByName("emailId")[0].value;
  var phone = document.getElementsByName("phoneNumber")[0].value;
  var address1 = document.getElementsByName("streetAddress1")[0].value;
  var address2 = document.getElementsByName("streetAddress2")[0].value;
  var zipcode = document.getElementsByName("zipcode")[0].value;
  
  var sourceChecked = document.getElementById("sourceId").checked;
  if(!sourceChecked){
    alert("Please fill all details");
    setDisplay("errorMsgSource","block")
    return;
  }
  var text = document.getElementsByName("text")[0].value;
  if(text==""){
    alert("Please fill all details");
    setDisplay("errorMsgComments","block")
    return;
  }
  var source = document.querySelector('input[name = "source"]:checked').value;
  var drink =
    drinkName != "" || drinkName != null || drinkName != undefined
      ? drinkName
      : NA;
  if(drink == "" || drink == "NA"){
    alert("Please fill all details");
    setDisplay("errorMsgSelectCofee","block")
    return;
  }
  var addinfo = document.getElementById("addInfo").value;
  var addInfoChecked =  document.getElementById("vehicle1").checked

  if (
    title == "" ||
    fname == "" ||
    lname == "" ||
    emailID == "" ||
    phone == "" ||
    address1 == "" ||
    zipcode == "" ||
    text == "" ||
    source == "" ||
    drink == "" || drink == "NA" ||
     (addInfoChecked && addinfo=="")
  ) {
    alert("Please fill all the details");
  } else {
    table.style.display = "block";
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);
    var cell9 = row.insertCell(8);
    var cell10 = row.insertCell(9);
    var cell11 = row.insertCell(10);
    var cell12 = row.insertCell(11);
    cell1.innerHTML = title;
    cell2.innerHTML = fname;
    cell3.innerHTML = lname;
    cell4.innerHTML = emailID;
    cell5.innerHTML = phone;
    cell6.innerHTML = address1;
    cell7.innerHTML = address2;
    cell8.innerHTML = zipcode;
    cell9.innerHTML = source;
    cell10.innerHTML = text;
    cell11.innerHTML = drink;
    cell12.innerHTML = addinfo;
    alert("Form submitted sucessfully");
    document.getElementById("myForm").reset();
    document.getElementById("chkboxDiv1").style.display = "none";
    document.getElementById("chkboxDiv2").style.display = "none";
    document.getElementById("chkboxDiv3").style.display = "none";
    document.getElementById("chkboxDiv4").style.display = "none";
    document.getElementById("chkboxDiv5").style.display = "none";
    document.getElementById("hiddenTextField").style.display = "none";
  }
}

var radioValue;
function radioBtnValue() {
  var radios = document.getElementsByName("title");

  for (var i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {
      radioValue = radios[i].value;
      break;
    }
    return radios[i].value;
  }
}
var checkedValue;
function checkboxValue() {
  var inputElements = document.getElementsByName("source");
  var Value = "";
  for (var i = 0; i < inputElements.length; i++) {
    if (inputElements[i].checked) {
      Value = inputElements[i].value;
      console.log(inputElements[i].value);

      break;
    }
    return inputElements[i].value;
  }
}

function dropDownList() {
  var coffee = document.getElementById("coffee").value;
  setDisplay("errorMsgSelectCofee","none")
  if (coffee == "Espresso Shots") {
    document.getElementById("chkboxDiv1").style.display = "block";
    document.getElementById("chkboxDiv2").style.display = "none";
    document.getElementById("chkboxDiv3").style.display = "none";
    document.getElementById("chkboxDiv4").style.display = "none";
    document.getElementById("chkboxDiv5").style.display = "none";
    drinkName = coffee;
  } else if (coffee == "Mocha 2.0") {
    document.getElementById("chkboxDiv1").style.display = "none";
    document.getElementById("chkboxDiv2").style.display = "block";
    document.getElementById("chkboxDiv3").style.display = "none";
    document.getElementById("chkboxDiv4").style.display = "none";
    document.getElementById("chkboxDiv5").style.display = "none";
    drinkName = coffee;
  } else if (coffee == "Lazy Latte") {
    document.getElementById("chkboxDiv1").style.display = "none";
    document.getElementById("chkboxDiv2").style.display = "none";
    document.getElementById("chkboxDiv3").style.display = "block";
    document.getElementById("chkboxDiv4").style.display = "none";
    document.getElementById("chkboxDiv5").style.display = "none";
    drinkName = coffee;
  } else if (coffee == "Do Black Tea") {
    document.getElementById("chkboxDiv1").style.display = "none";
    document.getElementById("chkboxDiv2").style.display = "none";
    document.getElementById("chkboxDiv3").style.display = "none";
    document.getElementById("chkboxDiv4").style.display = "block";
    document.getElementById("chkboxDiv5").style.display = "none";
    drinkName = coffee;
  } else if (coffee == "Ek Green Tea") {
    document.getElementById("chkboxDiv1").style.display = "none";
    document.getElementById("chkboxDiv2").style.display = "none";
    document.getElementById("chkboxDiv3").style.display = "none";
    document.getElementById("chkboxDiv4").style.display = "none";
    document.getElementById("chkboxDiv5").style.display = "block";
    drinkName = coffee;
  }
}
