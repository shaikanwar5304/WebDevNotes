
public class A_SumAvg {
    public static void main(String[] args) {
        int arr[]={1,2,3};
        int sum=0,avg;
        for(int i:arr){
            sum+=i;
        }
        System.out.println(sum);//6
        avg=sum/arr.length;
        System.out.println(avg);//2
    }
}
