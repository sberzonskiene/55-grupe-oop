import { Laukiniai } from "./Laukiniai.js";

export class Paukstis extends Laukiniai {
    constructor(name, age, furColor, legsCount, behavior) {
        super(name, age, furColor, legsCount, behavior);
        this.voice = 'ciulba';
        this.owner = 'neturi';
    }
}

