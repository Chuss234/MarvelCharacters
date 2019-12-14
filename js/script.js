import {PRIVATE_KEY, PUBLIC_KEY , TS} from "./const/const.js";
const hash = md5(TS + PRIVATE_KEY + PUBLIC_KEY);

export const URL = `http://gateway.marvel.com/v1/public/characters?ts=${TS}&apikey=${PUBLIC_KEY}&hash=${hash}`;




