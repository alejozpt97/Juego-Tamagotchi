let hunger = 50;
let happiness = 50;
let health = 50;

function updateStats() {
  document.getElementById('hunger').textContent = hunger;
  document.getElementById('happiness').textContent = happiness;
  document.getElementById('health').textContent = health;

  if (health <= 0) {
    alert("¡Tu Tamagotchi ha muerto!");
    resetTamagotchi();
  }
}

function feed() {
  if (hunger > 0) {
    hunger -= 10;
    happiness += 5;
    health += 5;
    updateStats();
  }
}

function play() {
  if (happiness < 100) {
    happiness += 10;
    hunger += 5;
    health -= 5;
    updateStats();
  }
}

function heal() {
  if (health < 100) {
    health += 15;
    updateStats();
  }
}

function resetTamagotchi() {
  hunger = 50;
  happiness = 50;
  health = 50;
  updateStats();
}

function autoplay(){
  hunger += 5;
  happiness -= 5;
  health -= 10;

  if (hunger > 100) hunger = 10;
  if (happiness <= 0) hunger = 0;
  if (health < 0) health = 0;
  updateStats();

}



setInterval(autoplay, 5000);
updateStats();