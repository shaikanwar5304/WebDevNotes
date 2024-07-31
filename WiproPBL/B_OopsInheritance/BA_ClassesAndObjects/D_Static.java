//static methods can access only static variables
//instance methods can access both instance and static var
class myClass{
    static int staticVar=3;
    int instanceVar=4;
    public static void print() {
        System.out.println("static print");
        System.out.println(staticVar);
        //System.out.println(instanceVar);
    }

    public void print1() {
        System.out.println("normal print");
        System.out.println(staticVar);
        System.out.println(instanceVar);
    }
}
public class D_Static {
    public static void main(String[] args) {
        myClass.print();//static print //3
        //myClass.print1();//only static methods are accessable to class
        myClass myObj=new myClass();
        myObj.print1();
        //normal print
        //3
        //4
        myObj.print();
        //static print
        //3
    }
}