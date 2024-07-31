public class E_Extremes {
    public static void main(String[] args) {
        int[] arr={3,2,1,4,3,5,7,23,34 };
        int max2,min2;
        int max1=max2=arr[0];
        int min1=arr[0];min2=arr[2];
        for (int elem:arr){
            if(elem<min1){
                min2=min1;
                min1=elem;
            }if(elem>max1){
                max2=max1;
                max1=elem;
            }
        }
        System.out.println("max1: "+max1 + " max2: "+max2);// max1: 34 max2: 23
        System.out.println("min1: "+min1+" min2: "+min2);// min1: 1 min2: 2

    }
}
