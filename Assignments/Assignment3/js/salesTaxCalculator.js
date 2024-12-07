const $ = selector => document.querySelector(selector);

const processEntries = evt =>{
    //get user entires from form

    const subtotal = parseFloat($("#subtotal").value);
    const tax_rate = parseFloat($("#tax_rate").value);

    // Check validity
    let isValid = true;
    if (subtotal == "" && tax_rate == ""){
        alert("Subtotal and tax rate are required")
        isValid = false;
    }else{
        if(subtotal == ""){
            alert("Subtotal is required")
            isValid = false;
        }
        if(tax_rate== ""){
            alert("Tax rate is required")
            isValid = false;
        }
    }
    if(subtotal < 0 || subtotal >= 10000){
        alert("Subtotal must be > 0 and < 10000")
        isValid = false;
    }

    if(tax_rate < 0 || tax_rate >= 12){
        alert("Tax Rate must be > 0 and < 12")
        isValid = false;
    }

    // Only execute if it's ok
    if(isValid){
        let sales_tax = subtotal * tax_rate * 0.01;
        let total = subtotal + sales_tax;
    
        // Put in values in side box
        $("#sales_tax").value = sales_tax;
        $("#total").value = total;
    }else{
        clear();
    }
    
}

const clear = ()=>{
    $("#subtotal").value = "";
    $("#tax_rate").value = "";
    $("#sales_tax").value = "";
    $("#total").value = "";

    //Add focus to subtotal
    $("#subtotal").focus();
};


document.addEventListener("DOMContentLoaded", () => {
    // hook up click events for both buttons
    $("#calculate").addEventListener("click", processEntries);
    $("#clear").addEventListener("click", clear);

    // set focus on first text box after the form loads
    $("#subtotal").focus();
});