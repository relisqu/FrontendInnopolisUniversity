
const jokeButton = document.getElementsByClassName("jokeButton")[0];
const jokeText = document.getElementsByClassName("jokeText")[0];
const jokeImage = document.getElementsByClassName("jokeImage")[0];
const jokeTitle = document.getElementsByClassName("jokeTitle")[0];
const jokeDate = document.getElementsByClassName("jokeDate")[0];

async function getId(email) {
    const params = new URLSearchParams();
    if (email) {
        params.append('email', email);
    }
    return fetch('https://fwd.innopolis.app/api/hw2?' + params.toString()).then(r =>r.json());
    
}

async function fetchJoke(id) {
    return await fetch(" https://getxkcd.vercel.app/api/comic?num="+id).then(r =>r.json());
}

jokeButton.addEventListener("click", async function () {
  
    GenerateJoke();

});

async function GenerateJoke(){

    const jokeId = await getId("a.kopeikina@innopolis.university");
    const joke = await fetchJoke(jokeId);
  
    await fillJokeObject(joke);
}
document.addEventListener("DOMContentLoaded", function() {
    GenerateJoke();
});


const fillJokeObject = (jokeObj) => {
    const { alt, title, img, year, month, day } = jokeObj;
  
    const date = new Date(year, month, day);
  
    jokeImage.src = img;
    jokeImage.alt = alt;
    jokeTitle.textContent = title;
    jokeDate.textContent = date.toLocaleDateString();
};
  