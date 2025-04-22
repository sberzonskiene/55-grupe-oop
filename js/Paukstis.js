import { Laukiniai } from "./Laukiniai.js";

export class Paukstis extends Laukiniai {
    constructor(name, age, furColor, legsCount) {
        super(name, age, furColor, legsCount);
        this.voice = 'ciulba';
        this.behavior = 'happy shy';
    
    }
}

/*export class Paukstis extends Laukiniai {
    constructor(name, age, furColor, legsCount) {
        super(name, age, furColor, legsCount);
        this.voice = 'cirskia';
        this.behavior = 'shy';
    }
}*/