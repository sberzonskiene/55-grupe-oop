import { Laukiniai } from "./Laukiniai.js";

export class Paukstis extends Laukiniai {
    constructor(name, age, furColor, legsCount, behavior) {
        super(name, age, furColor, legsCount, behavior);
        this.voice = 'ciulba';
        this.behavior = this.behavior;
    
    }
}

/*export class Paukstis extends Laukiniai {
    constructor(name, age, furColor, legsCount) {
        super(name, age, furColor, legsCount);
        this.voice = 'cirskia';
        this.behavior = 'shy';
    }
}*/