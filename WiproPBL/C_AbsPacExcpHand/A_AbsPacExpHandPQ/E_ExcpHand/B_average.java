import java.util.InputMismatchException;

public class B_average {
    public static void main(String[] args) {
        try{
            int[] arr= new int[args.length];
            double sum=0;
            int n=args.length;
            for (int i=0;i<args.length;i++){
                arr[i]=Integer.parseInt(args[i]);
                sum+=arr[i];
            }
            double q=sum/n;
            double r=sum%n;
            System.out.println(q+" "+r);
        }catch(NumberFormatException e){
            System.out.println(e);
        }catch (InputMismatchException e){
            System.out.println(e);
        }catch(Exception e){
            System.out.println(e);
        }
    }
}