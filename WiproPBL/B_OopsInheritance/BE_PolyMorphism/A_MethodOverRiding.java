/**
 * A_MethodOverRiding (between the classes)
 * method overloading is similar but with in the class
 * these concepts are related to having same method name but having different
 * functionalities based on their signature
 */
class A {
    void display(int a) {
        System.out.println("hi this is A's method");
    }
}

class B extends A {
    void display(int n) {
        System.out.println("hi this is B's method");
    }

    void displayOverridden(int n) {
        super.display(n);
    }
}

public class A_MethodOverRiding {
    public static void main(String[] args) {
        B obj = new B();
        obj.display(3);// hi this is B's method
        obj.displayOverridden(0);// hi this is A's method
    }

}