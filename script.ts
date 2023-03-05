
const jokeButton = document.getElementsByClassName("jokeButton")[0] as HTMLFormElement;
const jokeText = document.getElementsByClassName("jokeText")[0] as HTMLFormElement;
const jokeImage = document.getElementsByClassName("jokeImage")[0] as HTMLFormElement;
const jokeTitle = document.getElementsByClassName("jokeTitle")[0] as HTMLFormElement;
const jokeDate = document.getElementsByClassName("jokeDate")[0] as HTMLFormElement;

async function getId(email: string): Promise<string>{
    const params : URLSearchParams = new URLSearchParams();
    if (email) {
        params.append('email', email);
    }
    return fetch('https://fwd.innopolis.app/api/hw2?' + params.toString()).then(r =>r.json());
    
}

async function fetchJoke(id: string): Promise<Joke> {
    const joke: Joke= await fetch(" https://getxkcd.vercel.app/api/comic?num="+id).then(r =>r.json());
    return joke;
}

jokeButton.addEventListener("click", async function () {
    GenerateJoke();
});

async function GenerateJoke() : Promise<void>{

    const jokeId:string = await getId("a.kopeikina@innopolis.university");
    const joke:Joke  = await fetchJoke(jokeId);
  
    fillJokeObject(joke);
}

document.addEventListener("DOMContentLoaded", function() {
    GenerateJoke();
});


const fillJokeObject = (jokeObj: Joke) => {
    const { alt, title, img, year, month, day } = jokeObj;
  
    const date: Date = new Date(  parseInt(year),  parseInt(month) + 1, parseInt(day));
  
    jokeImage.src = img;
    jokeImage.alt = alt;
    jokeTitle.textContent = title;
    jokeDate.textContent = date.toLocaleDateString();
};
  

interface Joke {
    alt: string;
    day: string;
    month: string;
    year: string;
    img: string;
    title: string;
}   

GenerateJoke();