const log = document.querySelector(".event-log");

//selects the start button
document.querySelector("#start").addEventListener("click", () => {
  log.textContent = "";

  //creates a new variable called "async"
  const async = new XMLHttpRequest();

  //adds an event to the async 
  //makes text say "finish with" and the status of operation (should be successful/ says 200)
  async.addEventListener("loadend", () => {
    log.textContent = `${log.textContent}Finished with status: ${async.status}`;
  });

  //retrieves data from website 
  async.open(
    "GET",
    "https://raw.githubusercontent.com/mdn/content/main/files/en-us/_wikihistory.json",
  );

  //initiates request and makes text say start request 
  async.send();
  log.textContent = `${log.textContent}Started XHR request\n`;
});

//reloads webpage
document.querySelector("#reload").addEventListener("click", () => {
  log.textContent = "";
  document.location.reload();
});
