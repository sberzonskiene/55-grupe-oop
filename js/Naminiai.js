import { Augintiniai } from "./Augintiniai.js";

export class Naminiai extends Augintiniai {
    constructor(name, age, furColor, behavior, owner) {
        super(name);
        this.age = age;
        this.furColor = furColor;
        this.legsCount = 4;
        this.voice = 'loja murkia';
        this.behavior = behavior;
        this.owner = owner;
    }
}        

    