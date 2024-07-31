class G_RemoveDuplicates{
    public static void main(String[] args) {
        int[]arr={3,5,2,3,9,4};
        int[]newArr= new int[arr.length];
        int pos=0;
        for(int elem:arr){
            if(G_RemoveDuplicates.isPresent(newArr, elem)){
                continue;
            }
            newArr[pos]=elem;
            pos++;
        }
        int[] newarr=new int[pos];
        for (int i=0;i<pos;i++){
            newarr[i]=newArr[i];
        }
        arr=newarr;
        for(int i=0;i<arr.length;i++){
            System.out.print(arr[i]+" ");// 3 5 2 9 4
        }
    }
    public static Boolean isPresent(int[]arr,int key){
        for(int elem:arr){
            if(key==elem){
                return true;
            }
        };return false;
    }
}