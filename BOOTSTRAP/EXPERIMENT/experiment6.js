// Selecting Elements
const heading = document.getElementById("heading");
const inputText = document.getElementById("inputText");
const para = document.getElementById("para");
const messageBox = document.getElementById("messageBox");

const changeTextBtn = document.getElementById("changeTextBtn");
const colorBtn = document.getElementById("colorBtn");
const fontBtn = document.getElementById("fontBtn");
const toggleBtn = document.getElementById("toggleBtn");
const resetBtn = document.getElementById("resetBtn");


// Random Background Colors
const colors = [
    "#ff9a9e",
    "#a18cd1",
    "#fbc2eb",
    "#84fab0",
    "#8fd3f4",
    "#fccb90",
    "#667eea"
];


// Change Heading
changeTextBtn.addEventListener("click", () => {

    const newText = inputText.value.trim();

    if(newText === ""){
        showMessage("Please enter some text!");
        return;
    }

    heading.innerText = newText;
    showMessage("Heading updated successfully!");
});


// Change Background
colorBtn.addEventListener("click", () => {

    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    document.body.style.background = randomColor;

    showMessage("Background color changed!");
});


// Increase Font Size
let fontSize = 36;

fontBtn.addEventListener("click", () => {

    fontSize += 4;

    heading.style.fontSize = fontSize + "px";

    showMessage("Font size increased!");
});


// Toggle Paragraph
toggleBtn.addEventListener("click", () => {

    para.classList.toggle("hidden");

    if(para.style.display === "none"){
        para.style.display = "block";
        toggleBtn.innerText = "Hide Paragraph";
        showMessage("Paragraph visible!");
    }
    else{
        para.style.display = "none";
        toggleBtn.innerText = "Show Paragraph";
        showMessage("Paragraph hidden!");
    }
});


// Reset Everything
resetBtn.addEventListener("click", () => {

    heading.innerText = "Welcome to JavaScript DOM";

    document.body.style.background =
        "linear-gradient(135deg,#1e3c72,#2a5298)";

    heading.style.fontSize = "36px";

    para.style.display = "block";

    inputText.value = "";

    toggleBtn.innerText = "Show/Hide Paragraph";

    fontSize = 36;

    showMessage("Everything reset!");
});


// Message Function
function showMessage(msg){

    messageBox.innerText = msg;

    setTimeout(() => {
        messageBox.innerText = "";
    }, 2000);
}