let fish = {
  lunkersCaught: 0,
  type: "lunker"
};

let clickUpgrades = {
  fishingPole: {
    price: 10,
    quantity: 0,
    multiplier: 2
  },
  bait: {
    price: 25,
    quantity: 0,
    multiplier: 2
  }
};
let autoUpgrades = {
  net: {
    price: 50,
    quantity: 0,
    multiplier: 25
  },
  boat: {
    price: 200,
    quantity: 0,
    multiplier: 100
  }
};

let fishElem = document.querySelector("#count");
let poleElem = document.querySelector("#fishingPoleUpgrades");
let baitElem = document.querySelector("#baitUpgrades");
let netElem = document.querySelector("#netUpgrades");
let boatElem = document.querySelector("#boatUpgrades");
let polePrice = document.querySelector("#polePrice");
let baitPrice = document.querySelector("#baitPrice");
let netPrice = document.querySelector("#netPrice");
let boatPrice = document.querySelector("#boatPrice");
let poleBTN = document.querySelector("#fishingPoleUpgrade");
let baitBTN = document.querySelector("#betterBaitUpgrade");
let netBTN = document.querySelector("#netUpgrade");
let boatBTN = document.querySelector("#boatUpgrade");

function cast() {
  fish.lunkersCaught++;
  fish.lunkersCaught +=
    clickUpgrades.bait.quantity * clickUpgrades.bait.multiplier;
  fish.lunkersCaught +=
    clickUpgrades.fishingPole.quantity * clickUpgrades.fishingPole.multiplier;

  update();
}

function update() {
  fishElem.innerText = fish.lunkersCaught;
  poleElem.innerText = clickUpgrades.fishingPole.quantity;
  baitElem.innerText = clickUpgrades.bait.quantity;
  netElem.innerText = autoUpgrades.net.quantity;
  boatElem.innerText = autoUpgrades.boat.quantity;
  polePrice.innerText = clickUpgrades.fishingPole.price;
  baitPrice.innerText = clickUpgrades.bait.price;
  netPrice.innerText = autoUpgrades.net.price;
  boatPrice.innerText = autoUpgrades.boat.price;
  if (fish.lunkersCaught < clickUpgrades.fishingPole.price)
    poleBTN.setAttribute("disabled", "true");
  else {
    poleBTN.removeAttribute("disabled");
  }
  if (fish.lunkersCaught < clickUpgrades.bait.price)
    baitBTN.setAttribute("disabled", "true");
  else {
    baitBTN.removeAttribute("disabled");
  }
  if (fish.lunkersCaught < autoUpgrades.net.price)
    netBTN.setAttribute("disabled", "true");
  else {
    netBTN.removeAttribute("disabled");
  }
  if (fish.lunkersCaught < autoUpgrades.net.price)
    boatBTN.setAttribute("disabled", "true");
  else {
    boatBTN.removeAttribute("disabled");
  }
}

function buyPole() {
  if (fish.lunkersCaught >= clickUpgrades.fishingPole.price) {
    fish.lunkersCaught -= clickUpgrades.fishingPole.price;
    clickUpgrades.fishingPole.quantity += 1;
    clickUpgrades.fishingPole.price *= 5;
  }
  update();
}

function buyBait() {
  if (fish.lunkersCaught >= clickUpgrades.bait.price) {
    fish.lunkersCaught -= clickUpgrades.bait.price;
    clickUpgrades.bait.price;
    clickUpgrades.bait.quantity += 1;
    clickUpgrades.bait.price *= 5;
  }
  update();
}

function buyNet() {
  if (fish.lunkersCaught >= autoUpgrades.net.price) {
    fish.lunkersCaught -= autoUpgrades.net.price;
    autoUpgrades.net.quantity += 1;
    autoUpgrades.net.price *= 5;
  }
  update();
}

function buyBoat() {
  if (fish.lunkersCaught >= autoUpgrades.boat.price) {
    fish.lunkersCaught -= autoUpgrades.boat.price;
    autoUpgrades.boat.quantity += 1;
    autoUpgrades.boat.price *= 5;
  }
  update();
}

function collectAutoUpgrades() {
  fish.lunkersCaught += autoUpgrades.net.quantity * autoUpgrades.net.multiplier;
  fish.lunkersCaught +=
    autoUpgrades.boat.quantity * autoUpgrades.boat.multiplier;
  update();
}

function startInterval() {
  setInterval(collectAutoUpgrades, 3000);
  update();
}
