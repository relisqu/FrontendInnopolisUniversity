<script lang="ts" >
        
    let joke_date: string;
    let img_src: string;
    let img_alt: string;
    let joke_title: string;

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

    

    async function GenerateJoke() : Promise<void>{

        const jokeId:string = await getId("a.kopeikina@innopolis.university");
        const joke:Joke  = await fetchJoke(jokeId);
    
        fillJokeObject(joke);
    }


    const fillJokeObject = (jokeObj: Joke) => {
        const { alt, title, img, year, month, day } = jokeObj;
    
        const date: Date = new Date(  parseInt(year),  parseInt(month) + 1, parseInt(day));
    
        img_src = img;
        img_alt = alt;
        joke_title = title;
        joke_date = date.toLocaleDateString();
    };

    interface Joke {
        alt: string;
        day: string;
        month: string;
        year: string;
        img: string;
        title: string;
    }   

    let resp = GenerateJoke();
</script>

<section id="jokes">
    <div class="jokeBody">
        {#await resp}
            <p>...Loading</p>
        {:then _}
            <h2> {joke_title}</h2>
            <img alt={img_alt} src={img_src}/>
            <p>{joke_date}</p>
        {:catch error}
            <p>Something went wrong: {error.message}</p>
        {/await}

      
    </div>
</section>

<style>
        
    #jokes {
        display: flex;
        display: inline-flex;
        flex-flow: column;
        flex-wrap: wrap;
        align-items: center;
    }

    img { 
        object-fit: contain;
        background-size: contain;
        max-width:100%;
        max-height: 300px;
    }
</style>