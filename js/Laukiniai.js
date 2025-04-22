import { Augintiniai } from "./Augintiniai.js";

export class Laukiniai extends Augintiniai {
    constructor(name, furColor, legsCount, behavior, owner) {
        super(name);
        this.furColor = furColor;
        this.legsCount = 2;
        this.voice = 'ciulba';
        this.behavior = behavior;
        this.owner = 'neturi';
    }  
}      
