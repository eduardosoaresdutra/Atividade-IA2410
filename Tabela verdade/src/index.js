const operatorsList = ["!", "&&", "||", "->", "<->", "XOR"];
const options = document.querySelectorAll(".logic-operator-option");
const tableChosenOperatorHeader = document.querySelector("#chosen-operator");
const resultFields = document.querySelectorAll(".result");

const rowOneColOne = document.querySelector("#row1-col1").textContent;
const rowOneColTwo = document.querySelector("#row1-col2").textContent;
const rowTwoColOne = document.querySelector("#row2-col1").textContent;
const rowTwoColTwo = document.querySelector("#row2-col2").textContent;
const rowThreeColOne = document.querySelector("#row3-col1").textContent;
const rowThreeColTwo = document.querySelector("#row3-col2").textContent;
const rowFourColOne = document.querySelector("#row4-col1").textContent;
const rowFourColTwo = document.querySelector("#row4-col2").textContent;

function operatorClickFunction(clickIndex) {
    options.forEach((element, index) => {
        index !== clickIndex ? element.checked = false : null; 
    });

    window.dispatchEvent(new CustomEvent("trueTableTriggerEvent", { detail: { index: clickIndex } }));
}

function notTrueTableValidation() {
    let operandOne = "";
    let operandTwo = "";

    if (rowOneColOne === "V") {
        operandOne = "V";
    }
    else {
        operandOne = "F";
    }

    if (rowOneColTwo === "V") {
        operandTwo = "V";
    }
    else {
        operandTwo = "F";
    }

    operandOne === "V" ? operandOne = "F" : operandOne = "V";
    operandTwo === "V" ? operandTwo = "F" : operandTwo = "V";
    resultFields[0].textContent = `${operandOne}, ${operandTwo}`;

    if (rowTwoColOne === "V") {
        operandOne = "V";
    }
    else {
        operandOne = "F";
    }

    if (rowTwoColTwo === "V") {
        operandTwo = "V";
    }
    else {
        operandTwo = "F";
    }

    operandOne === "V" ? operandOne = "F" : operandOne = "V";
    operandTwo === "V" ? operandTwo = "F" : operandTwo = "V";
    resultFields[1].textContent = `${operandOne}, ${operandTwo}`;

    if (rowThreeColOne === "V") {
        operandOne = "V";
    }
    else {
        operandOne = "F";
    }

    if (rowThreeColTwo === "V") {
        operandTwo = "V";
    }
    else {
        operandTwo = "F";
    }

    operandOne === "V" ? operandOne = "F" : operandOne = "V";
    operandTwo === "V" ? operandTwo = "F" : operandTwo = "V";
    resultFields[2].textContent = `${operandOne}, ${operandTwo}`;

    if (rowFourColOne === "V") {
        operandOne = "V";
    }
    else {
        operandOne = "F";
    }

    if (rowFourColTwo === "V") {
        operandTwo = "V";
    }
    else {
        operandTwo = "F";
    }

    operandOne === "V" ? operandOne = "F" : operandOne = "V";
    operandTwo === "V" ? operandTwo = "F" : operandTwo = "V";
    resultFields[3].textContent = `${operandOne}, ${operandTwo}`;
}

function andTrueTableValidation() {
    let operandOne = "";
    let operandTwo = "";

    if (rowOneColOne === "V") {
        operandOne = "V";
    }
    else {
        operandOne = "F";
    }

    if (rowOneColTwo === "V") {
        operandTwo = "V";
    }
    else {
        operandTwo = "F";
    }

    resultFields[0].textContent = ((operandOne === operandTwo) && operandOne === "V") ? "V" : "F";

    if (rowTwoColOne === "V") {
        operandOne = "V";
    }
    else {
        operandOne = "F";
    }

    if (rowTwoColTwo === "V") {
        operandTwo = "V";
    }
    else {
        operandTwo = "F";
    }

    resultFields[1].textContent = ((operandOne === operandTwo) && operandOne === "V") ? "V" : "F";

    if (rowThreeColOne === "V") {
        operandOne = "V";
    }
    else {
        operandOne = "F";
    }

    if (rowThreeColTwo === "V") {
        operandTwo = "V";
    }
    else {
        operandTwo = "F";
    }

    resultFields[2].textContent = ((operandOne === operandTwo) && operandOne === "V") ? "V" : "F";

    if (rowFourColOne === "V") {
        operandOne = "V";
    }
    else {
        operandOne = "F";
    }

    if (rowFourColTwo === "V") {
        operandTwo = "V";
    }
    else {
        operandTwo = "F";
    }

    resultFields[3].textContent = ((operandOne === operandTwo) && operandOne === "V") ? "V" : "F";
}

function orTrueTableValidation() {
    let operandOne = "";
    let operandTwo = "";

    if (rowOneColOne === "V") {
        operandOne = "V";
    }
    else {
        operandOne = "F";
    }

    if (rowOneColTwo === "V") {
        operandTwo = "V";
    }
    else {
        operandTwo = "F";
    }

    resultFields[0].textContent = (operandOne === "V" || operandTwo === "V") ? "V" : "F";

    if (rowTwoColOne === "V") {
        operandOne = "V";
    }
    else {
        operandOne = "F";
    }

    if (rowTwoColTwo === "V") {
        operandTwo = "V";
    }
    else {
        operandTwo = "F";
    }

    resultFields[1].textContent = (operandOne === "V" || operandTwo === "V") ? "V" : "F";

    if (rowThreeColOne === "V") {
        operandOne = "V";
    }
    else {
        operandOne = "F";
    }

    if (rowThreeColTwo === "V") {
        operandTwo = "V";
    }
    else {
        operandTwo = "F";
    }

    resultFields[2].textContent = (operandOne === "V" || operandTwo === "V") ? "V" : "F";

    if (rowFourColOne === "V") {
        operandOne = "V";
    }
    else {
        operandOne = "F";
    }

    if (rowFourColTwo === "V") {
        operandTwo = "V";
    }
    else {
        operandTwo = "F";
    }

    resultFields[3].textContent = (operandOne === "V" || operandTwo === "V") ? "V" : "F";
}

function conditionalTrueTableValidation() {
    let operandOne = "";
    let operandTwo = "";

    if (rowOneColOne === "V") {
        operandOne = "V";
    }
    else {
        operandOne = "F";
    }

    if (rowOneColTwo === "V") {
        operandTwo = "V";
    }
    else {
        operandTwo = "F";
    }

    resultFields[0].textContent = (operandOne === "V" && operandTwo === "F") ? "F" : "V";

    if (rowTwoColOne === "V") {
        operandOne = "V";
    }
    else {
        operandOne = "F";
    }

    if (rowTwoColTwo === "V") {
        operandTwo = "V";
    }
    else {
        operandTwo = "F";
    }

    resultFields[1].textContent = (operandOne === "V" && operandTwo === "F") ? "F" : "V";

    if (rowThreeColOne === "V") {
        operandOne = "V";
    }
    else {
        operandOne = "F";
    }

    if (rowThreeColTwo === "V") {
        operandTwo = "V";
    }
    else {
        operandTwo = "F";
    }

    resultFields[2].textContent = (operandOne === "V" && operandTwo === "F") ? "F" : "V";

    if (rowFourColOne === "V") {
        operandOne = "V";
    }
    else {
        operandOne = "F";
    }

    if (rowFourColTwo === "V") {
        operandTwo = "V";
    }
    else {
        operandTwo = "F";
    }

    resultFields[3].textContent = (operandOne === "V" && operandTwo === "F") ? "F" : "V";
}

function biconditionalTrueTableValidation() {
    let operandOne = "";
    let operandTwo = "";

    if (rowOneColOne === "V") {
        operandOne = "V";
    }
    else {
        operandOne = "F";
    }

    if (rowOneColTwo === "V") {
        operandTwo = "V";
    }
    else {
        operandTwo = "F";
    }

    resultFields[0].textContent = operandOne === operandTwo ? "V" : "F";

    if (rowTwoColOne === "V") {
        operandOne = "V";
    }
    else {
        operandOne = "F";
    }

    if (rowTwoColTwo === "V") {
        operandTwo = "V";
    }
    else {
        operandTwo = "F";
    }

    resultFields[1].textContent = operandOne === operandTwo ? "V" : "F";

    if (rowThreeColOne === "V") {
        operandOne = "V";
    }
    else {
        operandOne = "F";
    }

    if (rowThreeColTwo === "V") {
        operandTwo = "V";
    }
    else {
        operandTwo = "F";
    }

    resultFields[2].textContent = operandOne === operandTwo ? "V" : "F";

    if (rowFourColOne === "V") {
        operandOne = "V";
    }
    else {
        operandOne = "F";
    }

    if (rowFourColTwo === "V") {
        operandTwo = "V";
    }
    else {
        operandTwo = "F";
    }

    resultFields[3].textContent = operandOne === operandTwo ? "V" : "F";
}

function xorTrueTableValidation() {
    let operandOne = "";
    let operandTwo = "";

    if (rowOneColOne === "V") {
        operandOne = "V";
    }
    else {
        operandOne = "F";
    }

    if (rowOneColTwo === "V") {
        operandTwo = "V";
    }
    else {
        operandTwo = "F";
    }

    resultFields[0].textContent = operandOne !== operandTwo ? "V" : "F";

    if (rowTwoColOne === "V") {
        operandOne = "V";
    }
    else {
        operandOne = "F";
    }

    if (rowTwoColTwo === "V") {
        operandTwo = "V";
    }
    else {
        operandTwo = "F";
    }

    resultFields[1].textContent = operandOne !== operandTwo ? "V" : "F";

    if (rowThreeColOne === "V") {
        operandOne = "V";
    }
    else {
        operandOne = "F";
    }

    if (rowThreeColTwo === "V") {
        operandTwo = "V";
    }
    else {
        operandTwo = "F";
    }

    resultFields[2].textContent = operandOne !== operandTwo ? "V" : "F";

    if (rowFourColOne === "V") {
        operandOne = "V";
    }
    else {
        operandOne = "F";
    }

    if (rowFourColTwo === "V") {
        operandTwo = "V";
    }
    else {
        operandTwo = "F";
    }

    resultFields[3].textContent = operandOne !== operandTwo ? "V" : "F";
}

options.forEach((element, index) => {
    element.onclick = () => operatorClickFunction(index);
});

window.addEventListener("trueTableTriggerEvent", (event) => {
    tableChosenOperatorHeader.textContent = operatorsList[event.detail.index];

    if (operatorsList[event.detail.index] === "!") {
        notTrueTableValidation();
        return;
    }
    if (operatorsList[event.detail.index] === "&&") {
        andTrueTableValidation();
        return;
    }
    if (operatorsList[event.detail.index] === "||") {
        orTrueTableValidation();
        return;
    }
    if (operatorsList[event.detail.index] === "->") {
        conditionalTrueTableValidation();
        return;
    }
    if (operatorsList[event.detail.index] === "<->") {
        biconditionalTrueTableValidation();
        return;
    }
    if (operatorsList[event.detail.index] === "XOR") {
        xorTrueTableValidation();
        return;
    }
});

const activityTwoDiv = document.querySelector("#activityTwoDiv");
const solveButton = document.querySelector("#solveActivityTwo");
const assertionFour = document.querySelector("#assertionFour");
const assertionFive = document.querySelector("#assertionFive");

solveButton.onclick = () => solve();

const marioSurfou = false;
const marioCorreu = true;

function solve() {
    if (marioCorreu) {
        assertionFour.textContent = "4. Choveu";
        assertionFive.textContent = "5. Mario não surfou";
        return;
    }
    assertionFour.textContent = "4. Não choveu";
    assertionFive.textContent = "5. Mario surfou";
}