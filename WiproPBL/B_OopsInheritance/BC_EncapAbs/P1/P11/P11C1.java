//Go to the project root directory
//javac P1/P11/P11C1.java
//java P1/P11/P11C1
package P1.P11;
import P1.P1C1;
class P11SubClass extends P1C1{
    int getProtectedInt(){
        return this.protectedInt;//only accessable to subclasses not even to their instance outside the package
    }
}
public class P11C1{
    public static void main(String[] args) {
        P1C1 obj=new P1C1();
        //System.out.println(obj.privateInt);//it is only for class
        //System.out.println(obj.defaultInt);//only with in package
        //System.out.println(obj.protectedInt);//with in package and in subclasses outside package
        System.out.println(obj.publicInt);//4

        P11SubClass obj2=new P11SubClass();
        //System.out.println(obj2.privateInt);
        //System.out.println(obj2.defaultInt);
        //System.out.println(obj2.protectedInt);//not for objects of subclasses
        System.out.println(obj2.publicInt);//4
        System.out.println(obj2.getProtectedInt());//6
    }
}