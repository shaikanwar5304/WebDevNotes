package P2;
import P1.P1C1;
public class P2C1 {
    public static void main(String[] args) {
        P1C1 Obj=new P1C1();
        System.out.println(Obj.publicInt);
        //private and default can;t be accessed from other packages
        //protected can be accessed to the subclass
    }
}