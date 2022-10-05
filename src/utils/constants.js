import { dataCards } from './data.js';

export let bun = dataCards.filter(item => item.type === "bun");
export let main = dataCards.filter(item => item.type === "main");
export let sauce = dataCards.filter(item => item.type === "sauce");
