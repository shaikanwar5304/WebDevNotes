class I_Shift10{
    public static void main(String[] args) {
        int[] arr={10,2,10};
        int temp;
        for(int i=0;i<arr.length;i++){
            if(arr[i]==10){
                for(int j=i+1;j<arr.length;j++){
                    if(arr[j]!=10){
                        temp=arr[i];
                        arr[i]=arr[j];
                        arr[j]=temp;
                        break;
                    }
                }
            }
        }
        for(int i=arr.length-1;i>=0;i--){
            if(arr[i]==10){
                arr[i]=0;
            }else break;
        }
        for(int elem:arr){
            System.out.print(elem+" ");//2 0 0
        }
    }
}