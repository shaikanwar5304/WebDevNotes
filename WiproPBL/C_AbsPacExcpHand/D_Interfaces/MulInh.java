/**
 * MulInh
 */
interface interf1 {
    void interfaceName();
    void display();
    int n=20;
}
interface  interf2{
    void interfacename();
    //int interfaceName(); you should not have different datatypes with same name here
    void display();
    int n=30;
    int n2=40;
}
//interface interf3 implements interf1{}//interface can't implement another interface
interface interf3 extends interf1,interf2{//multiple inheritance is allowed
    int n=4;
}//interface can extend another interface
public class MulInh implements interf1,interf2{
    public void interfaceName(){
        System.out.println("Interface 1");
       
    }
    public void interfacename(){
        System.out.println("Interface 2");
    }
    public void display(){
        System.out.println("Display");
    }

    public static void main(String[] args) {
        System.out.println(interf1.n);//20
        System.out.println(interf2.n);//30
        System.out.println(n2);//40
        //System.out.println(n);//ambiguous
    }
}