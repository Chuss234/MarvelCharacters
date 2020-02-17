import {URL} from "./js/script.js";
const content = document.getElementById('content');
async function MARVEl_API(url){
   const response  =  await fetch(url);
   const data = response.json();
    if(!response.ok)
        throw Error("We have a error!");
    return data;
}
const drawHero = e =>{
    e.data.results.map( (hero) =>  {
        const image = `${hero.thumbnail.path}/portrait_uncanny.${hero.thumbnail.extension}`;
        const superHero= `
            <div class='content-heroes'>
                <h2 class='tittle-name'>${hero.name}</h2>
                <img class='img-hero' src='${image}' alt='${hero.name}'>
                <p class='description'>${hero.description}</p>
            </div>
            `;
        content.insertAdjacentHTML('beforeEnd',superHero);
    })
};

(async  () => {
    try{
      const data = await MARVEl_API(URL);
       drawHero(data);
    }catch (e) {
        console.log(`Error: ${e}`);
    }
})();
