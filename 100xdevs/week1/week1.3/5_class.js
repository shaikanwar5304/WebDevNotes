class Animal{
    constructor(name,legCount,speaks,color){
        this.name=name
        this.legCount=legCount
        this.speaks=speaks
        this.color=color
    }
    static typeofme(){
         console.log('I`m an animal');
    }
    walk(){
        console.log('i`m walking')
    }
    speak(){
        console.log(this.speaks);
    }
}
Animal.typeofme()//I`m an animal

//Animal.walk() non static methods are only for objects

let dog=new Animal('doge',4,'bhow bhow','white')
//dog.typeofme() static methods are only for classes

dog.walk()//i`m walking
dog.speak()//bhow bhow
console.log(dog);
/*
Animal {
  name: 'doge',
  legCount: 4,
  speaks: 'bhow bhow',
  color: 'white'
}
*/