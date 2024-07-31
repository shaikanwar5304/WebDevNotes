class myClass2{
    int insVar1;
    myClass2(int n){
        this.insVar1=n;//this refers to the obj
    }
    void myMethod(int n){
        //this(n); only used inside a constructor
        //this.insVar=n; error insVar not a instance var
        this.insVar1=n;
    }
    myClass2(){
        this(999);
    }
}
public class C_This {
    public static void main(String[] args) {
        myClass2 myObj2=new myClass2(33);
        System.out.println(myObj2.insVar1);//33
        myClass2 myObj3=new myClass2();
        System.out.println(myObj3.insVar1);//999
    } 
}
