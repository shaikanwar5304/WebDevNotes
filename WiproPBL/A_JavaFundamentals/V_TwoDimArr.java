public class V_TwoDimArr {
    public static void main(String[] args) {
        int[][] arr=new int[2][3];
        System.out.println(arr[1][1]);//0
        System.out.println(arr.length);//2
        int [][][] arr2=new int[4][5][6];
        System.out.println(arr2.length);//4
        arr=new int[][]{{1,2,3},{4,5,6}};
        System.out.println(arr[1][2]);//6

        int[][] arr3= new int[2][];//allowed
        // int[][] arr4=new int[][2];// not allowed
        // int [][][] arr5= new int[3][][4];//not allowd : should not specify after an empty dimension
        arr3[0]=new int[3];
        arr3[1]=new int[]{3,3,2,5};

        int arr4[][]=new int[3][];
        //System.out.println(arr4[0][0]);//ERror arr4[0] is null
        
    }
}
