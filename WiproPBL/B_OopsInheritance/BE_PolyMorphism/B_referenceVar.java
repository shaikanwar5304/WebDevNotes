class A{

}
class B extends A{

}
class C extends A{

}
public class B_referenceVar {
    public static void main(String[] args) {
        A obj1;
        B obj2;
        C obj3;
        obj1=new A();
        //superclass reference variable can refer subclass obj
        obj1=new B();
        obj1=new C();
        //obj2=new A();subclass type can't refer to super class type
        obj2=new B();
        //obj2=new C();similarly
        System.out.println("successful");//successful
    }
}
