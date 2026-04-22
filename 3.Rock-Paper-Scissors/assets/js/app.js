let humanScore = 0;
let computerScore = 0;
let currentRound = 1;
const maxRound = 5;

function getComputerChoice() {
  const choices = ["batu", "kertas", "gunting"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

const emoji = { batu: "✊", kertas: "✋", gunting: "✌️"};

function handleChoice(humanChoice) {
  if (currentRound > maxRound) return;

  const computerChoice = getComputerChoice();
  const resultBox = document.getElementById("result-box");
  const finalResult = document.getElementById("final-result");

  let resultText = "";
  let resultClass = "";

  if (humanChoice === computerChoice) {
    resultText = `Seri! Kamu ${emoji[humanChoice]} vs Komputer ${emoji[computerChoice]}`;
    resultClass = "seri";
  } else if (
    (humanChoice === "batu" && computerChoice === "gunting") ||
    (humanChoice === "kertas" && computerChoice === "batu") ||
    (humanChoice === "gunting" && computerChoice === "kertas")
  ) {
    humanScore++;
    document.getElementById("human-score").textContent = humanScore;
    resultText = `Kamu menang! ${emoji[humanChoice]} mengalahkan ${emoji[computerChoice]}`;
    resultClass = "menang";
  } else {
    computerScore++;
    document.getElementById("computer-score").textContent = computerScore;
    resultText = `Kamu kalah! ${emoji[computerChoice]} mengalahkan ${emoji[humanChoice]}`;
    resultClass = "kalah";
  }

  resultBox.textContent = resultText;
  resultBox.className = "result-box " + resultClass;

  currentRound++;

  if (currentRound <= maxRound) {
    document.getElementById("round-info").textContent = `Ronde ${currentRound} dari ${maxRound}`;
  } else {
    // Game selesai
    document.getElementById("round-info").textContent = "Game Selesai!";

    if (humanScore > computerScore) {
      finalResult.textContent = "🎉 Kamu menang game!";
    } else if (computerScore > humanScore) {
      finalResult.textContent = "😢 Komputer menang game!";
    } else {
      finalResult.textContent = "🤝 Seri!";
    }

    // Sembunyikan tombol pilihan
    document.querySelectorAll(".btn-choice").forEach(btn => btn.disabled = true);
    document.getElementById("btn-reset").style.display = "block";
  }
}

function resetGame() {
  humanScore = 0;
  computerScore = 0;
  currentRound = 1;

  document.getElementById("human-score").textContent = 0;
  document.getElementById("computer-score").textContent = 0;
  document.getElementById("round-info").textContent = "Ronde 1 dari 5";
  document.getElementById("result-box").textContent = "Pilih salah satu!";
  document.getElementById("result-box").className = "result-box";
  document.getElementById("final-result").textContent = "";
  document.getElementById("btn-reset").style.display = "none";

  document.querySelectorAll(".btn-choice").forEach(btn => btn.disabled = false);
}