//try catch finally throw throws are the keywords
public class A_Excpkeywords{
    public static void main(String[] args) {
        try{
            System.out.println(3/0);
        }catch(Exception e){
            System.out.println(e.getMessage());// / by zero
            System.out.println(e);//java.lang.ArithmeticException: / by zero
        }finally{
            System.out.println("finally block");//finally block
        }
    }
}