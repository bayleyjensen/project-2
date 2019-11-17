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
    multiplier: 2
  },
  boat: {
    price: 200,
    quantity: 0,
    multiplier: 2
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
  if (fish.lunkersCaught < clickUpgrades.fishingPole.price) {
    // TODO  MAKE BUTTON DISABLED.btn.setAttribute("disabled", "true");
  }
}

function buyPole() {
  if (fish.lunkersCaught > 2) {
    fish.lunkersCaught -= clickUpgrades.fishingPole.price;
    clickUpgrades.fishingPole.quantity += 1;
    clickUpgrades.fishingPole.price *= 5;
  }
  update();
}

function buyBait() {
  if (fish.lunkersCaught > 5) {
    fish.lunkersCaught -= 10;
    clickUpgrades.bait.quantity += 1;
    clickUpgrades.bait.price *= 5;
  }
  update();
}

function buyNet() {
  if (fish.lunkersCaught > 5) {
    fish.lunkersCaught += 10;
    autoUpgrades.net.quantity += 1;
    autoUpgrades.net.price *= 5;
  }
  update();
}

function buyBoat() {
  if (fish.lunkersCaught > 5) {
    fish.lunkersCaught += 10;
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
  setInterval(collectAutoUpgrades, 30);
  update();
}
