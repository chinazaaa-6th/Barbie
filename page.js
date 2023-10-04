function comeAlong() {
  let name = prompt("What is your first name");
  name = name.trim();
  let welcome = prompt(
    `Welcome, ${name}. You are one step away from Barbie Land! Please tell us your shoe size so we can get your skates ready!⛸️⛸️`
  );
  let email = prompt(
    `Thank you so much ${name}, kindly drop your email so we can reach you with more details.`
  );
  let p = document.querySelector("p");
  p.innerHTML = `We applaud your courage dear ${name}. All you need for this trip are your skates and a very active imagination😊. 
            While you wait for your skates, please keep the dream alive and your imagination as active as ever. And remember to keep a smile on at all times!💃`;
}
let contactUs = document.querySelector("button");
contactUs.addEventListener("click", comeAlong);
