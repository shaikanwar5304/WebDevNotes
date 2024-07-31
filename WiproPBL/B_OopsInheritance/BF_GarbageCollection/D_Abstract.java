abstract class Animal{
    int legs;
    abstract void sound();//abstract method won't have body

    //abstract method only for the abstract class

    void eat(){//abstract class can have non-abstract methods
        System.out.println("Eating");
    }
}
class Dog extends Animal{
    // abstract void smell();//error: only abstract classes can have abstract methods

    // abstract method must be implemented in the subclass
    void sound(){
        System.out.println("Barking");
    }
}
public class D_Abstract {
    public static void main(String[] args) {
        // Animal a = new Animal();//error: Animal is abstract; cannot be instantiated
        Animal a = new Dog();
        a.sound();//Barking
        a.eat();//Eating
    }
}
