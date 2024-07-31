//static variables and methods belongs to classes not instances
//i.e if any object changes the static variables it reflects in the class and all the instances
class MyClass{
    static int staticVar;
    int insVar=3;
    static void staticPrint(){
        System.out.println(staticVar);
        //System.out.println(insVar);
    }
    void insPrint(){
        System.out.println(insVar);
    }

}
public class E_Static{
    public static void main(String[] args) {
        System.out.println(MyClass.staticVar);//0
        MyClass myObj=new MyClass();
        MyClass myObj2=new MyClass();
        System.out.println(myObj.staticVar);//0
        myObj.staticVar=999;
        System.out.println(MyClass.staticVar);//999
        System.out.println(myObj2.staticVar);//999
        
    }
}