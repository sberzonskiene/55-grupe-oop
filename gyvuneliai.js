
import { Suo } from "./js/Suo.js";
import { Kate } from "./js/Kate.js";
import { Paukstis } from "./js/Paukstis.js";


const vudis = new Suo('Vudis', 6, 'black');
const pupa = new Kate('Pupa', 5,'colorred'); 
const zylute = new Paukstis('Zylute', 3, 'yellow');
const shnape = new Suo('Shnape', 10, 'caramel');
const mauris = new Kate('Mauris', 7, 'gray');
const zvirblis = new Paukstis('Zvirblis', 2, 'brown');

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
