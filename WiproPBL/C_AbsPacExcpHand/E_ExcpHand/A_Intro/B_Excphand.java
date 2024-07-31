import java.util.*;
public class B_Excphand {
    public static void main(String[] args) {
        Scanner sc = new  Scanner(System.in);
        try{
            System.out.println("enter a denominator");
            int a = sc.nextInt();
            System.out.println(1/a);
        }
        //catch(Exception e){}//should not be above its subclass
        catch(ArithmeticException | InputMismatchException e){
            System.out.println(e);
        }
        catch(Exception e){
            System.out.println(e);
        }
        finally{
            System.out.println("finally block");
        }
        System.out.println("after try catch finally block");
    }
}
