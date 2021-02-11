"use strict";

const $ = selector => document.querySelector(selector);

const getErrorMsg = lbl => `${lbl} must be a valid number greater than zero.`;

const focusAndSelect = selector => {
    const elem = $(selector);
    elem.focus();
    elem.select();
};

const calculateFV = (years,investment,rate) => {
    
     let futureValue = investment;
    
     for (let i = 1; i <= years; i++ ) {
        
     futureValue = futureValue + ((futureValue * rate) / 100);
     }
    return futureValue.toFixed(2);
}

const processEntries = () => {
    const rate = parseFloat($("#rate").value);
    const investment = parseFloat($("#investment").value);
    const years = parseFloat($("#years").value);

    if (isNaN(investment) || investment <= 0 || investment > 150000) {
        alert(getErrorMsg("Investment"));
        focusAndSelect("#investment");
    } else if (isNaN(rate) || rate <= 0) {
        alert(getErrorMsg("Rate"));
        focusAndSelect("#rate");
    } else if (isNaN(years) || years <= 0 || years > 50) {
        alert(getErrorMsg("Years"));
        focusAndSelect("#years");
    } else {
        const futureVal = calculateFV(years, investment, rate)
    
        $("#futureValue").value = `${futureVal}`;
    }
};

document.addEventListener("DOMContentLoaded", () => {
    $("#calculate").addEventListener("click", processEntries);
    $("#investment").focus();
});