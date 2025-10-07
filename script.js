let form = document.querySelector("form");
form.addEventListener("submit", generatePoem);

function generatePoem(event) {
  event.preventDefault();

  let poem = document.querySelector("#poem");
  poem.classList.add("poem-container");
  new Typewriter("#poem", {
    strings: `⌛ Generating your poem... please wait...`,
    autoStart: true,
    cursor: "",
    delay: 25,
  });

  let searchBar = document.querySelector("#search-bar");
  let topic = searchBar.value;

  let prompt = `Write a short poem with a topic of ${topic}`;
  let context =
    "You are a poet. You write poems with less than 5 lines. Please give me your poem in simple html format, such as: <p>Here is a line</p><p>Here is another line.</p>";
  let APIKey = "36a020bd802233oee28f5e56a4tb2a2d";
  let APIURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${APIKey}`;
  axios.get(APIURL).then(showAnswer);
}

function showAnswer(response) {
  console.log(response.data.answer);

  new Typewriter("#poem", {
    strings: `
    <div> ${response.data.answer} </div>
    <div class="author"> | Written by SheCodes AI</div>
    `,
    autoStart: true,
    cursor: "",
    delay: 25,
  });
}
