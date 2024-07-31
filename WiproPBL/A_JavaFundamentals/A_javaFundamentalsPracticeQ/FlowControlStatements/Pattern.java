import java.util.Scanner;
public class Pattern {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.print("Enter a number : ");
        int n= sc.nextInt();
        for(int i=1;i<n+1;i++){
            int j=i;
            while(j>0){
                System.out.print("* ");
                j-=1;
            }System.out.println();
        }
    }
}
