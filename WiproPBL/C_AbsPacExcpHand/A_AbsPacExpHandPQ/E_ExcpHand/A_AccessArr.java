import java.util.*;
public class A_AccessArr{
    public static void main(String[] args){
        try{
            Scanner sc= new Scanner(System.in);
            System.out.print("Enter no of elements: ");
            int n=sc.nextInt();
            int[] arr=new int[n];
            for (int i=0;i<n;i++){
                arr[i]=sc.nextInt();
            }
            System.out.print("Enter the index to access: ");
            int index=sc.nextInt();
            System.out.println("Element at index "+index+" is: "+arr[index]);
        }
        catch(NumberFormatException e){
            System.out.println(e.getMessage());
        }catch (ArrayIndexOutOfBoundsException e){
            System.out.println(e.getMessage());
        }catch(Exception e){
            System.out.println(e);
        }
    }
}
// Enter no of elements:2 3 4
// Enter the index to access:5 Index 5 out of bounds for length 2

// Enter no of elements: fs
// java.util.InputMismatchException
