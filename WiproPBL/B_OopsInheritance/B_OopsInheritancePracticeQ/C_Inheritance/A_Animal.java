class Animal{
   void eat(){
    System.out.println("animal is eating");
   }   
   void sleep(){
    System.out.println("animal is sleeping");
   }
}
class Bird extends Animal{
    void eat(){
        System.out.println("bird is eating");
    }
    void sleep(){
        System.out.println("bird is sleeping");
    }
    void fly(){
        System.out.println("bird is flying");
    }
}
public class A_Animal{
    public static void main(String[] args) {
        Animal myAnimal = new Animal();
        Bird myBird = new Bird();
        myAnimal.eat();
        myAnimal.sleep();
        myBird.eat();
        myBird.sleep();
        myBird.fly();
    }
}
/*
 * $ java A_Animal.java
 * animal is eating
 * animal is sleeping
 * bird is eating
 * bird is sleeping
 * bird is flying
 */