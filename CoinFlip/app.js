let headsCount = 0;
let tailsCount = 0;

function tossCoin() {
  const isHeads = Math.random() < 0.5;
  const coin = document.getElementById("coin");

  if (isHeads) {
    coin.textContent = "HEADS";
    headsCount++;
  } else {
    coin.textContent = "TAILS";
    tailsCount++;
  }

  console.log(`Heads: ${headsCount}, Tails: ${tailsCount}`);
}

function resetCounts() {
  headsCount = 0;
  tailsCount = 0;
  document.getElementById("coin").textContent = "HEADS";
}
