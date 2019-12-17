import {URL} from "./js/script.js";
async function MARVElAPI(url){
   const response  =  await fetch(url);
   const data = response.json();
    if(!response.ok)
        throw Error("Falla al cargar los datos");
    return data;
}
(async function () {
    try{
      const data = await MARVElAPI(URL);
        console.log(data.data.results);
    }catch (e) {
        console.log(`Error: ${e}`);
    }
})();
