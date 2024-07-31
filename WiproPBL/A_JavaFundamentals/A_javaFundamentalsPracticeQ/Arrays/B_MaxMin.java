public class B_MaxMin {
    public static void main(String[] args) {
        int[] arr={2,1,3,1,5};
        int max=arr[0],min=arr[0];
        for(int elem:arr){
            if(max<elem){
                max=elem;
            }if(min>elem){
                min=elem;
            }
        }System.out.println(max+" "+min);//5 1
    }
}
