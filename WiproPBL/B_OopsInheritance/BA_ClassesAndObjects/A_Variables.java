class myClass{
    int instVar;//instance varible// initializes automatically
    //System.out.println(instVar); statements like this should be either in constructor or methods
    void myMethod(){
        int localVar;//local variable// should be initialized explicitly
        System.out.println(instVar);
    }
}
public class A_Variables{
    public static void main(String[] args) {
        myClass myObj=new myClass();
        myObj.myMethod();//0
        //System.out.println(myClass.instVar);//not static
    }
}