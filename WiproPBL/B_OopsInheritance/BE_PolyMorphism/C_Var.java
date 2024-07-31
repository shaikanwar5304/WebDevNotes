class A{
    int i;
    int j;
    void setI(int n){
        this.i=n;
    }
    void setJ(int n){
        j=n;
    }

    void printI(){
        System.out.println(i);
    }
    void printJ(){
        System.out.println(j);
    }
}
public class C_Var {
    public static void main(String[] args) {
        A obj1=new A();
        obj1.setI(10);
        obj1.setJ(20);
        obj1.printI();//10
        obj1.printJ();//20
        A obj2=new A();
        obj2.printJ();//0
    }
}