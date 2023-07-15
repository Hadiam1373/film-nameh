import {getItem} from "@/storage";
// set base url
export const socketUrl = 'https://api.themoviedb.org/3/';
// get language website from localstorage
export const lang = getItem('lang') || 'fa'
