
import { Suo } from "./js/Suo.js";
import { Kate } from "./js/Kate.js";
import { Paukstis } from "./js/Paukstis.js";


const vudis = new Suo('Vudis', 6, 'black', 'angry', 'Kazimieras');
const pupa = new Kate('Pupa', 5,'colorred', 'cunning'); 
const zylute = new Paukstis('Zylute', 3, 'yellow', 'happy');
const shnape = new Suo('Shnape', 10, 'caramel', 'friendly', 'Kaziukas');
const mauris = new Kate('Mauris', 7, 'gray', 'lazy');
const zvirblis = new Paukstis('Zvirblis', 2, 'brown', 'shy');

console.log(vudis);
console.log(pupa);
console.log(zylute);
console.log(shnape);
console.log(mauris);
console.log(zvirblis);

console.log(vudis.hi());
console.log(pupa.hi());
console.log(shnape.hi());
console.log(mauris.hi());
console.log(zylute.hi());
console.log(zvirblis.hi());

