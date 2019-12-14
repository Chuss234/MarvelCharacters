import {URL} from "./js/script.js";

fetch(URL)
    .then((resp)=> resp.json())
    .then( (json)=> console.log(json.data.results[0].name));