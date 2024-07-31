package StaticImport.P2;
import StaticImport.P1.C1.*;
import static java.lang.Math.*;
public class C3 {
    public static void main(String[] args) {
        //staticMethod();//not allowed without static import
        //instanceMethod();//only allowed with object reference
        System.out.println(abs(-10.5));//abs is a static method
        
    }
}