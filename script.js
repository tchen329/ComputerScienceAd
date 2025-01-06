var sandwich = {};

sandwich.noun = document.querySelector("#noun1");
sandwich.adjOne = document.querySelector("#adj1");
sandwich.adjTwo = document.querySelector("#adj2");

let story = document.querySelector("#story");
let launch = document.querySelector("#launch");

launch.addEventListener("click", madlibify, false);

// takes user input and writes it to the page

function madlibify() {
  let launchedStory = ``;
  launchedStory += `<p>Once upon a time a manatee found a ${sandwich.adjTwo.value} ${sandwich.adjOne.value} ${sandwich.noun.value} and whoa, that was crazy.`;
  story.innerHTML = launchedStory;
}
