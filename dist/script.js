const jokeText = document.querySelector("#joke-text");
const jokeBtn = document.querySelector("#joke-button");
const clearJoke = document.querySelector("#joke-clear");
async function fetchJokeAPI() {
    if (jokeText)
        jokeText.textContent = "Fetching ....";
    try {
        const response = await fetch("https://official-joke-api.appspot.com/random_joke");
        if (!response.ok)
            throw new Error("Network issue. Check again");
        const data = await response.json();
        console.log("API data:", data);
        if (jokeText) {
            jokeText.textContent = `${data.setup} --- ${data.punchline}`;
        }
    }
    catch (error) {
        console.error("Error", error);
        if (jokeText) {
            jokeText.textContent = "Oops! Joke failed to load.";
        }
    }
}
jokeBtn?.addEventListener("click", fetchJokeAPI);
clearJoke?.addEventListener("click", () => {
    if (jokeText) {
        jokeText.textContent = "";
    }
});
export {};
//# sourceMappingURL=script.js.map