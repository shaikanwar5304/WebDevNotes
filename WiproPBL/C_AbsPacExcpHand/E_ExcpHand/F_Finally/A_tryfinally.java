public class A_tryfinally {
    public static void main(String[] args) {
        try {
            ArithmeticException e = new ArithmeticException();
            throw e;
        }catch (Exception e){
            System.out.println(e);
        }
        finally {
            System.out.println("inside finally");// inside finally
        }
        System.out.println("after first finally");//after first finally
        try{
            ArithmeticException e= new ArithmeticException();
            throw e;
        }finally{
            System.out.println("inside second finally");//inside second finally
        }
        // System.out.println("after finally"); Error as error is not handled
    }
}
//still there is error
// Exception in thread"main"
// java.lang.ArithmeticException
//         at A_tryfinally.main(A_tryfinally.java:4
// )