const answer = document.getElementById("answer");
const result = document.getElementById("result");
const button = document.getElementById("button");
const money = document.getElementById("money");

let yen = 0;

money.innerHTML = `
    <p>金/Money:  ${yen}円/yen</p>
    `
// Enterキー判定 -- Check the answer from Enter
answer.addEventListener("keypress", function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        checkAnswer();
    }
});

// クリック判定 -- Check the answer from clicking the button
button.addEventListener("click", function (event) {
    event.preventDefault();
    checkAnswer();
});

// 金加算関数 -- Yen counting function
function checkAnswer() {
    if (answer.value === "manabu" || answer.value === "まなぶ") {
        result.innerHTML = "正解！ / Correct!";
        yen += 100;
    }
    else {
        result.innerHTML = "不正解！ / Incorrect!";
        return false;
    }
    money.innerHTML = `
    <p>金/Money:  ${yen}円/yen</p>
    `
}