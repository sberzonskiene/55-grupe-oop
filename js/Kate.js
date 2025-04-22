import { Naminiai } from "./Naminiai.js";

export class Kate extends Naminiai {
    constructor(name, furColor, legsCount) {
        super(name, furColor, legsCount);
        this.voice = 'murkia';
        this.behavior = 'cunning';
        this.owner = 'Zenutė';
    }
}

/*export class Kate extends Naminiai {
    constructor(name, furColor, legsCount) {
        super(name, furColor, legsCount);
        this.voice = 'kniaukia';
        this.behavior = 'cunning';
        this.owner = 'Zenutė';
    }
}*/