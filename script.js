let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;
let val = "O";
let winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = val;
            box.style.color = "red";
            turnO = false;
            val = "X"
        } else {
            box.innerText = val;
            box.style.color = "blue";
            turnO = true;
            val = "O";
        }
        box.disabled = true;

        checkWinner()
    })
})

resetBtn.addEventListener("click", () => {
    resetGame();
})

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBtn()
}

const disableBtn = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    })
    resetBtn.disabled = true;
}

const undisableBtn = () => {
    boxes.forEach((box) => {
        box.disabled = false;
    })
    resetBtn.disabled = false;
}

const checkWinner = () => {
    for (pattern of winPatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                console.log("Winner", pos1);
                showWinner(pos1);
            }
        }
    }
}

const resetGame = () => {
    turnO = true;
    val = "O";
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    })
}

newGameBtn.addEventListener("click", () => {
    turnO = true;
    val = "O";
    msg.innerText = "";
    msgContainer.classList.add("hide");
    boxes.forEach((box) => {
        box.innerText = "";
    })
    undisableBtn();
})