import { Augintiniai } from "./Augintiniai.js";

export class Laukiniai extends Augintiniai {
    constructor(name, age, furColor, behavior) {
        super(name);
        this.age = age;
        this.furColor = furColor;
        this.legsCount = 2;
        this.voice = 'ciulba';
        this.behavior = behavior;
        
    }  
}      
