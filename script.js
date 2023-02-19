async function fetchComicIdentifier(email) {
    const params = new URLSearchParams();
    if (email) {
        params.append('email', email);
    }
    id= await fetch('https://fwd.innopolis.app/api/hw2?' + params.toString()).then(r =>r.json());
    requestSite(id);
}

async function requestSite(id) {
    

    result = await fetch("https://xkcd.com/"+id+"/info.0.json").then(r =>r.json());
    console.log(result.month);
    // display from result the image, its title, the date it was uploaded (using date.toLocaleDateString()), and the image's alternative text
    console.log(result.img);
    console.log(result.title);
    console.log(result.alt);
    console.log(result.date);
    console.log(result.year);

}

fetchComicIdentifier("a.kopeikina@innopolis.university")