public class Palindrome {
    public static void main(String[] args) {
        int num=Integer.parseInt(args[0]);
        int revNum=0,newNum=num;
        while(newNum>0){
            revNum=revNum*10+newNum%10;
            newNum/=10;
        };
        if(revNum==num){
            System.out.println(num+" is a palindrome");
        }else{
            System.out.println( num+ " not a palindrome");
        }
    }
}
