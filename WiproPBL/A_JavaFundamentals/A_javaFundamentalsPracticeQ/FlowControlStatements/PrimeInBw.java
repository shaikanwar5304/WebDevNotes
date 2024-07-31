public class PrimeInBw {
    public static void main(String[] args) {
        int a= 10,b=99;
        for (int i=a;i<=b;i++){
            isPrime num= new isPrime(i);
            if(num.checkNum()){
                System.out.println(i);
            }
        }
    }
}
