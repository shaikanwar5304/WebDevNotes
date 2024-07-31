package StaticImport.P2;
import static StaticImport.P1.C1.*;
//import  StaticImport.*; // can't import packages
 
public class C2 {
    public static void main(String[] args) {
        staticMethod();//This is a static method in C1
        //instanceMethod();//not allowed as it is not a static method
        callMain();//This is the main method in C1
    }

}
