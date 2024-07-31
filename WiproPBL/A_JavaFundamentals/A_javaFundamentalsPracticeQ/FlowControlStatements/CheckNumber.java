public class CheckNumber {
    public static void main(String[] args) {
        int n=Integer.parseInt(args[0]);
        if(n<0){
            System.out.println("negative");
        }else if(n>0){
            System.out.println("positive");
        }else{
            System.out.println("Zero");
        }
    }
}
