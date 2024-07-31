public class D_Test2 {
    public static void main(String[] args) {
        double d= 1.2;
        double d2=2.34D;
        System.out.println(d +d2);//3.54

        int a=10,b=017,c=0X3A;
        //in java num start with 0 is octal and 0X is hexa
        //b= 1*8 +7; i.e 15 and 3*16 + 10 i.e 58
        System.out.println(a+" "+b+" "+c);//10 15 58

        //int 9A=10; Error

        int x;
        //System.out.println(x);//err not initialized

        //char is two bytes
    }
}
