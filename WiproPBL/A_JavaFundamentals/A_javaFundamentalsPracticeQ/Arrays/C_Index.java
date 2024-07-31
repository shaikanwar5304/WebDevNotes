public class C_Index {
    public static void main(String[] args) {
        int[] arr={3,5,2,1,6,3};
        int key1=5;
        int key2=44;
        boolean found=false;
        for(int i=0;i<arr.length;i++){
            if(key2==arr[i]){
                System.out.println(i);
                found=true;
                break;
            }
        }if(!found){
            System.out.println(-1);//-1
        }
    }
}
