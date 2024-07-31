class H_Ignore6to7{
    public static void main(String[] args) {
        int[] arr={1,6,4,7,9};
        int i=0,j=0;
        int sum=0;
        Boolean flag1=false;
        for (int x=0;x<arr.length;x++) {
            if(arr[x]==6 && !flag1){
                i=x;
                flag1=true;
            }
            if(arr[x]==7){
                j=x;
            }
        }
        if(i<j){
            for (int x=0;x<i;x++){
                sum+=arr[x];
            }
            for (int x=j+1;x<arr.length;x++){
                sum+=arr[x];
            }
        }
        else{
            for(int elem:arr){
                sum+=elem;
            }
        }
        System.out.println(sum);//10
    }
}