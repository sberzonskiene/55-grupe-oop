export class Augintiniai {
    constructor(name) {
        this.name = name;
    }
    hi() {
        return `Labas, as esu ${this.name}`
    }

    feet(legsCount) 
    {
        if(legsCount >= 2) {
            return `${this.name}: as moku begti `; 
            } else {
                return `${this.name}: as moku skristi `;
            }
        }
}
