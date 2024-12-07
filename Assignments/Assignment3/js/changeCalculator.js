const $ = selector => document.querySelector(selector);

const processEntry = evt =>{
    //get user entires from form
    const change = parseInt($("#change").value);

    //validate

    if(change < 0 || change > 99 || isNaN(change)){
        alert("Change should be a number between 0 and 99");
    }
    else{
        makeChange(change)
    }
}

function makeChange(change){
    $("#quarters").value = Math.floor(change / 25);
    change = change % 25;
    $("#dimes").value = Math.floor(change / 10);
    change = change % 10;
    $("#nickels").value = Math.floor(change / 5);
    change = change % 5;
    $("#pennies").value = change;
    
}

const clear = ()=>{
    $("#change").value = "";
    $("#quarters").value = "";
    $("#dimes").value = "";
    $("#nickels").value = "";
    $("#pennies").value = "";

    //Add focus to subtotal
    $("#subtotal").focus();
};


document.addEventListener("DOMContentLoaded", () => {
    // hook up click events for both buttons
    $("#calculate").addEventListener("click", processEntry);

    // set focus on first text box after the form loads
    $("#change").focus();
});