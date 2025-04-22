import { Augintiniai } from "./Augintiniai.js";

export class Laukiniai extends Augintiniai {
    constructor(name, furColor, legsCount, owner) {
        super(name);
        this.furColor = furColor;
        this.legsCount = 2;
        this.voice = 'ciulba cirskia';
        this.behavior = 'happy shy';
        this.owner = 'neturi';
    }  
}      
