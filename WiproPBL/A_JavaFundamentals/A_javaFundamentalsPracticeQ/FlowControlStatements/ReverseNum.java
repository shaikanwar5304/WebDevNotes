public class ReverseNum {
    public static void main(String[] args) {
        int num=1234;
        int revNum=0;
        while(num>0){
            revNum=revNum*10+num%10;
            num/=10;
        };
        System.out.println(revNum);
    }
}
