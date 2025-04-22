import { Naminiai } from "./Naminiai.js";

export class Suo extends Naminiai {
    constructor(name, age, furColor, legsCount, behavior, owner) {
        super(name, age, furColor, legsCount, behavior, owner);
        this.voice = 'loja';
    }
}

/*export class Suo extends Naminiai {
    constructor(name, age, furColor, legsCount) {
        super(name, age, furColor, legsCount);
        this.voice = 'inkscia';
        this.behavior = 'friendly';
        this.owner = 'Kaziukas';
    }
}*/