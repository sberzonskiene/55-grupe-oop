class animal {
    constructor(name, age, furColor, type, legsCount)
    {
        this.name = name;
        this.age = age;
        this.furColor = furColor;
        this.type = 'unknown';
        this.legsCount = 0;
    } 
}

class Dog extends animal {
    constructor(name, age, furColor)
    {
        super(name, age, furColor);
        this.type = 'pet';
        this.legsCount = 4;
    }
}

class Cat extends animal {
    constructor(name, age, furColor)
    {
        super(name, age, furColor);
        this.type = 'pet';
        this.legsCount = 4;
    }
}

class Bird extends animal {
    constructor(name, age, furColor)
    {
        super(name, age, furColor);
        this.type = 'wild';
        this.legsCount = 2;
    }
}


const vudis = new Dog("Vudis", 6, 'black');
console.log(vudis);

const pupa = new Cat('Pupa', 5, 'colorred');
console.log(pupa);

const zylute = new Bird('Zylutė', 3, 'yellow');
console.log(zylute);

const gyvunai = [vudis, pupa, new Dog('Šnapė', 10, "caramel"), new Bird('Žvirblis', 2, 'brown'), new Cat('Mauris', 7, 'gray')];
console.log(gyvunai);

