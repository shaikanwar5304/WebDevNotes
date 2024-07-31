class A{

}
class B extends A{

}
class C extends B{

}
class Z extends A{

}

class C_instanceOf{
    public static void main(String[] args) {
        A aObj=new A();
        B bObj=new B();
        C cObj=new C();
        Z zObj=new Z();
        System.out.println((aObj instanceof A));//true
        System.out.println((bObj instanceof A));//true
        System.out.println((cObj instanceof A));//true
        System.out.println((zObj instanceof A));//true
        System.out.println((bObj instanceof C));//false
        //System.out.println((B instanceof A)); //error 

        //System.out.println((cObj instanceof aObj));//error

        //System.out.println((bObj instanceof Z));
        //System.out.println((zObj instanceof B));
        //may be instanceof works only for multilevel inheritance not hierarical
    }
}