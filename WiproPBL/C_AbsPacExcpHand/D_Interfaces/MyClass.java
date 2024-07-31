interface FirstInterface {
    //FirstInterface(){}//interface can't have constructors
    void displayName();//it is public abstract by default
    int n=10;//it is public static final by default
    //private void display();//private is not allowed
    //protected void display();//protected is not allowed
    //protected int n=10;//protected is not allowed
    //static void display();//static without body is not allowed
    static int k=9;//no problem as it was static by default
    static void display(){//static is allowed from java 8
        System.out.println("But it should have a body");
    }
    static void fun(){//it is not abstract no need to override
        System.out.println("static function from FirstInterface");
    }
}
//class sample implements FirstInterface{}//should implement the abstract method
public class MyClass implements FirstInterface{
    //void displayName(){}//we should declare it by public as we should not restrict the access
    public void displayName(){
        System.out.println("MyClass");
    }
    public void display(){
        System.out.println("Display");
    }
    public static void main(String[] args) {
        //FirstInterface obj=new FirstInterface() ;//can't instantiate(as it's methods won't have body)
        System.out.println(n);//10
        //n=10;//by default it is final so can't be reassigned
        System.out.println(FirstInterface.n);//10
        FirstInterface.fun();//static function from FirstInterface
    }
}