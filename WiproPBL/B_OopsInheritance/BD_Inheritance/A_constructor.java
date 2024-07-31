class X{
    X(){
        System.out.println("constructor of X");
    }
    void className(){
        System.out.println("x");
    }
    void methodX(){
        System.out.println("methodX");
    }
}
class Y extends X{

    Y(){
        System.out.println("constructor of Y");
    }
    void className(){
        System.out.println("y");
    }
}
class Z extends Y{
    Z(){
        System.out.println("constructor of Z");
    }
    void className(){
        System.out.println("z");
    }
    void superClassName(){
        super.className();//immediate superclass
    }
    void superMethod(){
        super.methodX();//can access super of super class
    }
}
class A_constructor extends Z{
    A_constructor(){
        System.out.println("constructor of A_constructor");
    }
    public static void main(String[] args) {
        A_constructor obj=new A_constructor();
        obj.superClassName();//y
        obj.className();//z
        obj.superMethod();//methodX
    }
}
/*
 * constructor of X
 * constructor of Y
 * constructor of Z
 * constructor of A_constructor
 */