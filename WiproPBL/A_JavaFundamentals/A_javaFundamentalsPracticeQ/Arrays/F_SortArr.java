public class F_SortArr {
    public static void main(String[] args) {
        int[] arr={43,234,72341,13,5,40};
        F_SortArr.mergesort(arr,0,5);
        for (int elem: arr){
            System.out.print(elem+ " ");
        }
    }
    public static void mergesort(int[] arr,int si,int ei){
        if(si>=ei){
            return;
        }
        int mid=(int)((si+ei)/2);
        F_SortArr.mergesort(arr, si,mid );
        F_SortArr.mergesort(arr, mid+1, ei);
        int i=si,j=mid+1;
        int temp;
        while(i<mid+1 && j<ei+1){
            if(arr[i]>=arr[j]){
                temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
                i++;
            }else{
                j++;
            } 
        }
    }
    public static void printArr(int[]arr){
        for (int i : arr) {
            System.out.print(i+" ");// 5 43 234 72341 13 40
        }System.out.println();
    }
}