const $ = selector => {
    if(document.querySelector(selector) != null){
        return document.querySelector(selector);
    }
    else{
        return "";
    }
}
const processEntry = evt =>{
    clear();
    //get user entires from form
    const arrival_date = $("#arrival_date").value;
    const nights = $("#nights").value;
    const adults = $("#adults").value;
    const children = $("#children").value;
    const room_type = $('input[name="room_type"]:checked').value;
    const bed_type = $('input[name="bed_type"]:checked').value;
    // if not checked == undefined
    const smoking = $('input[name="smoking"]:checked').value;
    const name = $("#name").value;
    const email = $("#email").value;
    const phone = $("#phone").value;

    let isValid = true;

    if(arrival_date == ""){
        requiredField("#arrival_date_error")
        isValid = false;
    }
    if(nights == ""){
        requiredField("#nights_error")
        isValid = false;
    }
    if(room_type == undefined){
        requiredField("#room_type_error");
        isValid = false;
    }
    if(bed_type == undefined){
        requiredField("#bed_type_error");
        isValid = false;
    }
    if(name == ""){
        requiredField("#name_error")
        isValid = false;
    }
    if(email  == ""){
        requiredField("#email_error")
        isValid = false;
    }
    if(phone == ""){
        requiredField("#phone_error")
        isValid = false;
    }

    if(isNaN(nights)){
        $("#nights_error").textContent = "Must be numeric"
        isValid = false;
    }
    
    if(!validateEmail(email)){
        $("#email_error").textContent = "Please provide a valid email address"
        isValid = false; 
    }
    if(!isValid){
        evt.preventDefault();
    }
}

function generateSelect(id, min, max){
    const select = $(id);
    for (let i = min; i <= max; i++) {
        const option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        select.appendChild(option);
    }
}

function requiredField(error_object){
    $(error_object).textContent = "This field is required."
}
function getRadio(name){
    const radios = document.getElementsByName(name); 
    let selectedRadio = null;

  // Loop through each radio button to find the checked one
    for (const radio of radios) {
        if (radio.checked) {
            selectedRadio = radio;
            break;
        }
    }  
    return selectedRadio;
}


function validateEmail(email) {
    // Regular expression to match a valid email format
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    // Test the email against the pattern and return the result
    return emailPattern.test(email);
  }

const clear = ()=>{
    $("#arrival_date_error").textContent = "";
    $("#nights_error").textContent = "";

    $("#room_type_error").textContent = "";
    $("#bed_type_error").textContent = "";

    $("#name_error").textContent = "";
    $("#email_error").textContent = "";
    $("#phone_error").textContent = "";
};


document.addEventListener("DOMContentLoaded", () => {
    // hook up click events for both buttons
    $("#submit_request").addEventListener("click", processEntry);

    generateSelect("#adults", 1, 10);
    generateSelect("#children", 1, 10);
    $("#arrival_date").focus();
});

