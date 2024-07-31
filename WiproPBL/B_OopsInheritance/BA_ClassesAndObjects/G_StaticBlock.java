public class G_StaticBlock {
    static{
        System.out.println("this is a 1st static block");
    }
    static void m1(){
        System.out.println("static method");
    }
    void m2(){
        System.out.println("instance method");
        m1();
    }
    static{
        m1();
        //m2(); no instance entities in static concepts
    }
    public static void main(String args[]){
        //m2();//Error static
        G_StaticBlock myObj=new G_StaticBlock();
        myObj.m2();
    }
    static{
        System.out.println("last before static block");
    }
    static{
        System.out.println("last static block");
    }   
}
/*
 * this is a 1st static block
 * static method
 * last before static block
 * last static block
 * instance method
 * static method
 */