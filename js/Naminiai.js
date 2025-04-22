import { Augintiniai } from "./Augintiniai.js";

export class Naminiai extends Augintiniai {
    constructor(name, age, furColor) {
        super(name);
        this.age = age;
        this.furColor = furColor;
        this.legsCount = 4;
        this.voice = 'loja kniaukia inkscia';
        this.behavior = 'angry friendly cunning lazy';
        this.owner = 'Kazimieras Zenute Kaziukas';
    }
}        

    