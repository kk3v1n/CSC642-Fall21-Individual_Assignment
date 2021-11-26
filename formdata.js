function submittedForm(){
    var lastNameChecker = document.myform1.lastName1.value
    var firstNameChecker = document.myform1.firstName1.value
    var titleNameChecker = document.myform1.inputTitle1.value
    var feetChecker = document.myform1.inputFeet1.value
    var inchesChecker = document.myform1.inputInches1.value
    var phoneChecker = gettingPNumber()
    var addressChecker = document.myform1.inputAddress1.value
    var cityChecker = document.myform1.inputCity1.value
    var stateChecker = document.myform1.inputState1.value
    var zipChecker = document.myform1.inputZip1.value
    var servicesChecker = gettingChecked()
    var budgetChecker = document.myform1.inputBudget1.value
    var emailChecker = document.myform1.inputEmail1.value

    /*
    if(!validName(lastNameChecker, firstNameChecker)){
        sessionStorage.clear();
        return false;
    }
    */
    
    sessionStorage.setItem("lastNameSaved", lastNameChecker);
    sessionStorage.setItem("firstNameSaved", firstNameChecker);
    sessionStorage.setItem("titleSaved", titleNameChecker);
    sessionStorage.setItem("feetSaved", feetChecker);
    sessionStorage.setItem("inchesSaved", inchesChecker);
    sessionStorage.setItem("phoneSaved", phoneChecker);
    sessionStorage.setItem("addressSaved", addressChecker);
    sessionStorage.setItem("citySaved", cityChecker);
    sessionStorage.setItem("stateSaved", stateChecker);
    sessionStorage.setItem("zipSaved", zipChecker);
    sessionStorage.setItem("servicesSaved", servicesChecker);
    sessionStorage.setItem("budgetSaved", budgetChecker);
    sessionStorage.setItem("emailSaved", emailChecker);
    

}

//making zip only have 5 numbers
/*
function zipCheck(zipCode){
    if (zipCode.value.length > zipCode.maxLength){
        zipCode.value = zipCode.value.slice(0, zipCode.maxLength);
    }
}
*/

/*adding the dashes to the phone number */

function gettingPNumber(){
    var finalPNumber = ""
    var userPNumber = document.myform1.inputPhone1.value
    var part1 = userPNumber.slice(0,3);
    var part2 = userPNumber.slice(3,6);
    var part3 = userPNumber.slice(6,10);
    finalPNumber = finalPNumber.concat("("+part1 + ") - " + part2 + " - "+part3)
    return finalPNumber;
}


/* checking services user wants */


function gettingChecked(){
    var checkedServices = ""
    var box1 = document.getElementById("checkbox1");
    var box2 = document.getElementById("checkbox2");
    var box3 = document.getElementById("checkbox3");
    var box4 = document.getElementById("checkbox4");
    var box5 = document.getElementById("checkbox5");
    var box6 = document.getElementById("checkbox6");

    if(box1.checked == true && checkedServices == ""){
        checkedServices = checkedServices.concat(box1.value)
    }

    if(box2.checked == true && checkedServices == ""){
        checkedServices = checkedServices.concat(box2.value);
    }else if(box2.checked == true && checkedServices != ""){
        checkedServices = checkedServices.concat(", "+box2.value);
    }

    if(box3.checked == true && checkedServices == ""){
        checkedServices = checkedServices.concat(box3.value)
    }else if(box3.checked == true && checkedServices != ""){
        checkedServices = checkedServices.concat(", "+box3.value);
    }

    if(box4.checked == true && checkedServices == ""){
        checkedServices = checkedServices.concat(box4.value);
    }else if(box4.checked == true && checkedServices != ""){
        checkedServices = checkedServices.concat(", "+box4.value);
    }

    if(box5.checked == true && checkedServices == ""){
        checkedServices = checkedServices.concat(box5.value);
    }else if(box5.checked == true && checkedServices != ""){
        checkedServices = checkedServices.concat(", "+box5.value);
    }

    if(box6.checked == true && checkedServices == ""){
        checkedServices = checkedServices.concat(box6.value)
    }else if(box6.checked == true && checkedServices != ""){
        checkedServices = checkedServices.concat(", "+box6.value);
    }

    if(checkedServices == ""){
        checkedServices = "N/A"
    }
    return checkedServices;
}


/*
function validName(lName, fName){
    if(lName.length < 1 && fName.length < 1 ){
        document.getElementById("inputLastName").style.border = "solid Red";
        document.getElementById("inputFirstName").style.border = "solid Red";
        return false;
    }else if(lName.length < 1){
        document.getElementById("inputLastName").style.border = "solid Red";
        document.getElementById("inputFirstName").style.border = "solid";
        return false;
    }else if(fName.length < 1){
        document.getElementById("inputFirstName").style.border = " solid Red";
        document.getElementById("inputLastName").style.border = "solid";
        return false;
    }
    document.getElementById("inputLastName").style.border = "solid";
    document.getElementById("inputFirstName").style.border = "solid";

    return true;
}
*/

function loadData(){
    window.addEventListener("load", () => {
        
        document.getElementById("lastNameResult").placeholder = sessionStorage.getItem("lastNameSaved");
        document.getElementById("firstNameResult").placeholder= sessionStorage.getItem("firstNameSaved");
        document.getElementById("titleResult").placeholder= sessionStorage.getItem("titleSaved");
        document.getElementById("feetResult").placeholder= sessionStorage.getItem("feetSaved");
        document.getElementById("inchesResult").placeholder= sessionStorage.getItem("inchesSaved");
        document.getElementById("phoneResult").placeholder= sessionStorage.getItem("phoneSaved");
        document.getElementById("addressResult").placeholder= sessionStorage.getItem("addressSaved");
        document.getElementById("cityResult").placeholder= sessionStorage.getItem("citySaved");
        document.getElementById("stateResult").placeholder= sessionStorage.getItem("stateSaved");
        document.getElementById("zipResult").placeholder= sessionStorage.getItem("zipSaved");
        document.getElementById("servicesResult").placeholder= sessionStorage.getItem("servicesSaved");
        document.getElementById("budgetResult").placeholder= sessionStorage.getItem("budgetSaved");
        document.getElementById("emailResult").placeholder= sessionStorage.getItem("emailSaved");
        
    })
}



