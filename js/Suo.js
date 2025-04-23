import { Naminiai } from "./Naminiai.js";

export class Suo extends Naminiai {
    constructor(name, age, furColor, legsCount, behavior, owner) {
        super(name, age, furColor, legsCount, behavior, owner);
        this.voice = 'loja';
    }
}

