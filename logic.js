var obj = {}; //obj with all keypress functions

obj.reset = function () {
  alert(document.querySelector("#name").innerHTML + ", sorry! You DIED!");
  for (i = 0; i < robots.length; i++) {
    robots[i].style.top = 12 + "vh";
    curr[i] = 9;
  }
  d = 60;
  l = 50;
  spaceship.style.top = d + "vh";
  spaceship.style.left = l + "vw";
  document.querySelector("#score").innerHTML = 0;
  document.querySelector("#name").innerHTML = prompt(
    "HERE COMES YOUR PURCHASE!!! Enter your name, quickly: "
  );
};

obj.f = function () {
  a = parseInt(spaceship.style.left);
  b = parseInt(spaceship.style.top);
  for (i = 0; i < robots.length; i++) {
    if (
      (parseInt(robots[i].style.left) + 5 > a &&
        a > parseInt(robots[i].style.left)) ||
      (a + 5 > parseInt(robots[i].style.left) &&
        a < parseInt(robots[i].style.left)) ||
      (a + 5 <= parseInt(robots[i].style.left) + 5 &&
        a >= parseInt(robots[i].style.left))
    ) {
      if (
        parseInt(robots[i].style.top) + 5 > b &&
        b + 10 > parseInt(robots[i].style.top)
      ) {
        obj.reset();
        return;
      }
    }
  }
  k = event.key;

  if (k == "ArrowDown") {
    if (100 <= d + 7) {
      obj.reset();
      return;
    }
    d += 2;
    spaceship.style.top = d + "vh";
  } else if (k == "ArrowUp") {
    if (d <= 8) {
      obj.reset();
      return;
    }
    d -= 2;
    spaceship.style.top = d + "vh";
  } else if (k == "ArrowRight") {
    if (100 <= l + 6) {
      obj.reset();
      return;
    }
    l += 2;
    spaceship.style.left = l + "vw";
  } else if (k == "ArrowLeft") {
    if (l <= 0) {
      obj.reset();
      return;
    }
    l -= 2;
    spaceship.style.left = l + "vw";
  } else if (k == " ") {
    document.querySelector("body").remove();

    const html = document.querySelector("html");
    const surprise = document.createElement("div");
    const h1 = document.createElement("h1");
    html.appendChild(surprise);
    h1.textContent = "Servus!";
    h1.classList.add("secret-message");
    surprise.classList.add("surprise");
    surprise.appendChild(h1);
    console.log("hjhjhjhj", surprise);
  }
  a = parseInt(spaceship.style.left);
  b = parseInt(spaceship.style.top);
  for (i = 0; i < robots.length; i++) {
    robots[i].style.top = curr[i] + "vh";
    curr[i] = curr[i] + speeds[i];
    if (curr[i] >= 94) {
      curr[i] = 9;
      k = Math.random() * 7;
      if (k < 1) {
        k = 1;
      }
      speeds[i] = k;
      document.querySelector("#score").innerHTML =
        parseInt(document.querySelector("#score").innerHTML) + 1;
    }
  }
};

// main code starts
document.querySelector("#name").innerHTML = prompt(
  "HERE COMES YOUR PURCHASE!!! Enter your name, quickly: "
);

d = 60;
l = 50;
robots = document.querySelectorAll(".robo>div");
speeds = [];
for (i = 0; i < robots.length; i++) {
  k = Math.random() ** 2 * 7;
  if (k < 1) {
    k = 1;
  }
  speeds[i] = k;
}
curr = [];
for (i = 0; i < robots.length; i++) {
  curr[i] = speeds[i] + 9;
}

spaceship = document.querySelector("#player"); //main spaceship

window.addEventListener("keydown", obj.f, false); //keypress event handler
