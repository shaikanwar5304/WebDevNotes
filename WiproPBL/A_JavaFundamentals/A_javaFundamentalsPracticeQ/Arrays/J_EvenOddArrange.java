public class J_EvenOddArrange {
public static void main(String[] args) {
    int[]arr={3,5,234,7,2,-7,5,0,1};
    int temp;
    for(int i=0;i<arr.length;i++){
        if(arr[i]%2!=0){
            for(int j=i+1;j<arr.length;j++){
                if(arr[j]%2==0){
                    temp=arr[j];
                    arr[j]=arr[i];
                    arr[i]=temp;
                    break;
                }
            }
        }
        System.out.print(arr[i]+" ");// 234 2 0 7 5 -7 5 3 1
    }
    
}
    
}