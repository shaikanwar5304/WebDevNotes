public class B_NestedTry {
    public static void main(String[] args) {
        
        //the inner try block should have its own catch block
        try{
            System.out.println("outer try block");//outer try block
            try{
                System.out.println(0/0);
            }catch(ArithmeticException e){
                System.out.println(e);//java.lang.ArithmeticException: / by zero
            }
        }catch(ArithmeticException e){
            System.out.println(e);
        }
        catch(Exception e){
            System.out.println(e);
        }System.out.println("rest of the code");//rest of the code
    }
}
