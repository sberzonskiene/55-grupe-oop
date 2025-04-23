class animal {
    constructor(name, age, furColor, type, legsCount, voice, behavior, owner)
    {
        this.name = name;
        this.age = age;
        this.furColor = furColor;
        this.type = 'unknown';
        this.legsCount = 0;
        this.voice = 'unknown';
        this.behavior = behavior;
        this.owner = owner;
        
    } 
}

class Dog extends animal {
    constructor(name, age, furColor, behavior, owner)
    {
        super(name, age, furColor, behavior, owner);
        this.type = 'pet';
        this.legsCount = 4;
        this.voice = 'loja';
        this.behavior = behavior;
        this.owner = owner;
    }
}

class Cat extends animal {
    constructor(name, age, furColor, behavior, owner)
    {
        super(name, age, furColor, behavior, owner);
        this.type = 'pet';
        this.legsCount = 4;
        this.voice = 'murkia';
        this.behavior = behavior;
        this.owner = owner;
    }
}

class Bird extends animal {
    constructor(name, age, furColor, behavior, owner)
    {
        super(name, age, furColor, behavior, owner);
        this.type = 'wild';
        this.legsCount = 2;
        this.voice = 'čiulba';
        this.behavior = behavior;
        this.owner = owner;
    }
}


const vudis = new Dog("Vudis", 6, 'black', 'angry', 'Kazimieras');
console.log(vudis);

const pupa = new Cat('Pupa', 5, 'colorred', 'cunning', 'Zenutė');
console.log(pupa);

const zylute = new Bird('Zylutė', 3, 'yellow', 'happy', 'neturi');
console.log(zylute);

const gyvunai = [vudis, pupa, new Dog('Šnapė', 10, 'caramel', 'friendly', 'Kaziukas'), new Bird('Žvirblis', 2, 'brown', 'shy', 'neturi'), new Cat('Mauris', 7, 'gray', 'lazy', 'Zenutė')];
console.log(gyvunai);

