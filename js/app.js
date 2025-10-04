const answer = document.getElementById("answer");
const result = document.getElementById("result");
const button = document.getElementById("button");
const money = document.getElementById("money");
const translate = document.querySelector(".translate");

// "Word"としてオブジェクトを作成 -- Create "Word" object
// const word = {
//     id: 1,
//     kotoba: "学ぶ",
//     kotai: ["まなぶ", "manabu"],
//     honyaku: "Study"
// }

const word = {
    id: 1,
    kotoba: "狐",
    kotai: ["きつね", "kitsune"],
    honyaku: "Fox"
}

// 言葉を表示 -- Display the current word
const text = document.querySelector(".word-display");
text.innerHTML = `<h1>${word.kotoba}</h1>`;

// 金初期化 -- Initiate Money variable
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
    for (let i = 0; i < word.kotai.length; i++) {
        if (answer.value === word.kotai[i]) {
            result.innerHTML = "正解！ / Correct!";
            yen += 100;
            // 翻訳を表示 -- Display translation of the Word
            translate.innerHTML = `<p><em>Meanings:</em> ${word.honyaku}</p>`;
            money.innerHTML = `
            <p>金/Money:  ${yen}円/yen</p>
            `;
            return true;
        }
    }
    result.innerHTML = "不正解！ / Incorrect!";
    money.innerHTML = `
    <p>金/Money:  ${yen}円/yen</p>
    `;
    return false;
}

console.log(word.kotoba);
console.log(word.honyaku);