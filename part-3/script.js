// const output = document.querySelector("#output");
// const button = document.querySelector("#set-alarm");

function setAlarm() {
  setTimeout(() => {
    output.textContent = "Wake up!";
  }, 1000);
}

button.addEventListener("click", setAlarm);
//pressing alarm button will trigger the settimeout function in a delay of 1000 milliseconds and then the message wake up will appear


function alarm(person, delay) {
    return new Promise((resolve, reject) => {
      if (delay < 0) {
        throw new Error("Alarm delay must not be negative");
      }
      setTimeout(() => {
        resolve(`Wake up, ${person}!`);
      }, delay);
    });
  }
//new type of function called promise will take a single function (executor)
//executor function has two arguments called resolve(if function succeeds) and reject  (if function fails)
//checking if delay is not less than 0; if not 0 will do settimeout function, if 0 will throw an error


const person = document.querySelector("#person");
const delay = document.querySelector("#delay");
const button = document.querySelector("#set-alarm");
const output = document.querySelector("#output");

function alarm(person, delay) {
  return new Promise((resolve, reject) => {
    if (delay < 0) {
      throw new Error("Alarm delay must not be negative");
    }
    setTimeout(() => {
      resolve(`Wake up, ${person}!`);
    }, delay);
  });
}

button.addEventListener("click", () => {
  alarm(person.value, delay.value)
    .then((message) => (output.textContent = message))
    .catch((error) => (output.textContent = `Couldn't set alarm: ${error}`));
});
//will do as above but when button is clicked, will throw out message with name and if it has an error will throw catch funtion and error message will appear


function alarm(person, delay) {
    return new Promise((resolve, reject) => {
      if (delay < 0) {
        throw new Error("Alarm delay must not be negative");
      }
      setTimeout(() => {
        resolve(`Wake up, ${person}!`);
      }, delay);
    });
  }
  
  button.addEventListener("click", async () => {
    try {
      const message = await alarm(name.value, delay.value);
      output.textContent = message;
    } catch (error) {
      output.textContent = `Couldn't set alarm: ${error}`;
    }
  });
//for the button event listener, makes it asynchronous 