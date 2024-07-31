//statics will exec first in order to main
public class G_mainStatic {
    static{
        System.out.println("before main");
    }
public static void main(String[] args) {

    System.out.println("inside main");
}
    static{
        System.out.println("after main");
    }
}
/*
 * before main
 * static after main
 * inside main
 */