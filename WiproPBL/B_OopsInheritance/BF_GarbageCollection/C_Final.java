final class A{
    int x=10;
}
// class B extends A{}//error: cannot inherit from final A
class B{
    final int x=10;
    // void change(){//error: cannot override final variable
    //     x=20;
    // }
    final void display(){
        System.out.println("x: "+x);
    }
    // void display(){//error: cannot override final method
    //     System.out.println("x: "+x);
    // }
}
public class C_Final {
    
}
