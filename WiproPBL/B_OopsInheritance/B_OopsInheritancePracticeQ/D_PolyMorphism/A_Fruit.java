class Fruit{
    String name;
    String taste;
    int size;
    void eat(){
        System.out.println("Fruit is tasty");
    }
}
class Apple extends Fruit{
    void eat(){
        System.out.println("Apple is tasty");
    }
}
class Orange extends Fruit{
    void eat(){
        System.out.println("Orange is tasty");
    }
}
public class A_Fruit {
    public static void main(String[] args) {
        Apple a=new Apple();
        Orange o=new Orange();
        a.eat();//Apple is tasty
        o.eat();//Orange is tasty
    }
}
