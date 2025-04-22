import { Naminiai } from "./Naminiai.js";

export class Suo extends Naminiai {
    constructor(name, age, furColor, legsCount) {
        super(name, age, furColor, legsCount);
        this.voice = 'loja';
        this.behavior = 'angry';
        this.owner = 'Kazimieras';
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