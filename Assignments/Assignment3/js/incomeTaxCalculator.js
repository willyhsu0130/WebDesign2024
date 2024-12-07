const $ = selector => document.querySelector(selector);

const processEntry = evt =>{
    //get user entires from form
    const income = parseFloat($("#income").value);
    if(income > 0){
        calculateTax(income)
    }else{
        alert("Must key in a numerical value greater than 0 ")
        clear();
    }
}
    

function calculateTax(income){
    if (income <= 9875){
        $("#tax_owed").value = (income * 0.1).toFixed(2);
    }else if(income <= 40125){
        $("#tax_owed").value = (987.5 + income * 0.12).toFixed(2);
    }else if(income <= 85525){
        $("#tax_owed").value = (4617.5 + income * 0.22).toFixed(2);
    }else if(income <= 163300){
        $("#tax_owed").value = (14605.5 + income * 0.24).toFixed(2);
    }else if(income <= 207350){
        $("#tax_owed").value = (33271.5 + income * 0.32).toFixed(2);
    }else if(income <= 518400){
        $("#tax_owed").value = (47367.5 + income * 0.35).toFixed(2);
    }else{
        $("#tax_owed").value = (156235 + income * 0.37).toFixed(2);
    }
}

const clear = ()=>{
    $("#income").value = "";
    $("#tax_owed").value = "";

    //Add focus to income
    $("#income").focus();
};


document.addEventListener("DOMContentLoaded", () => {
    // hook up click events for both buttons
    $("#calculate").addEventListener("click", processEntry);

    // set focus on first text box after the form loads
    $("#income").focus();
});