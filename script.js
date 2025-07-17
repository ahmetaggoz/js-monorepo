const word_el = document.getElementById("word");
const popup = document.getElementById("popup-container");
const popup_inside = document.getElementById("popups");
const Message = document.getElementById("message");
const wrongLetter_el = document.getElementById("wrong-letter");
const items = document.querySelectorAll(".item");
const jera = document.getElementById("jera");
const btn = document.getElementById("play-again");
const score_el = document.getElementById("score");

const correctLetter = [];
const wrongLetter = [];
// This function creates random word
const getRandomWord = () => {
    const word = ["go", "java", "python", "php", "bootstrap", "html", "css"];
    return word[Math.floor(Math.random() * word.length)]
}
let selectedWord = getRandomWord();
// this function shows correct letters
const displayWord = () => {
    word_el.innerHTML = `
        ${selectedWord.split('').map(letter =>`
            <div class="letter">
                ${correctLetter.includes(letter) ? letter : ""}
            </div>
        `).join("")}
    `;
    const w = word_el.innerText.replace(/\n/g,'');
    if(w === selectedWord){
        popup.style.display = "flex";
        Message.innerText = "Congratulations, you won.";
        popup_inside.style.backgroundColor = "green";
        score_el.innerText = `Score: ${scrore()}`;
    }
}
const showWrongLetter = () => {
    wrongLetter_el.innerHTML = `
        ${wrongLetter.length > 0 ? `<h3>Wrong Letters</h3>` : ''}
        ${wrongLetter.map(letter => `<span>${letter}</span>`)}
    `;
    items.forEach((item, index) => {
        const countError = wrongLetter.length;
        if(index < countError){
            item.style.display = "block";
        }else{
            item.style.display = "none";
        }
    })
    if(wrongLetter.length === items.length){
        popup.style.display = "flex";
        Message.innerText = "Unlucky, you lost.";
        popup_inside.style.backgroundColor = "red";
        score_el.innerText = `Score: ${scrore()}`;
    }
}
const showJera = () => {
    jera.classList.add("show");
    setTimeout(() => {
        jera.classList.remove('show');
    }, 2000)
}
const scrore = () => {
    let total = 0;
    const w = wrongLetter.length;
    switch(w){
        case 0:
            total = 100;
            break;
        case 1:
            total = 80;
            break;
        case 2:
            total = 60;
            break;
        case 3:
            total = 40;
            break;
        case 4:
            total = 20;    
            break;
        case 5:
            total = 10;
            break;
        default:
            total = 0;
            break;
    }
    return total;
}
window.addEventListener("keydown", (e) =>{
    const letter = e.key;
    if(e.keyCode >= 65 && e.keyCode <= 90){
        if(selectedWord.includes(letter)){
            if(!correctLetter.includes(letter)){
                correctLetter.push(letter);
                displayWord();
            }else{
                // you have already selected this letter
                showJera();
            }
        }else{
            if(!wrongLetter.includes(letter)){
                wrongLetter.push(letter);
                // update wrong letters
                showWrongLetter();
            }else{
                showJera();
            }
        }
    }
})
displayWord();
btn.addEventListener("click", () =>{
    correctLetter.splice(0);
    wrongLetter.splice(0);
    selectedWord = getRandomWord();
    displayWord();
    showWrongLetter();
    popup.style.display = "none";
})