class N_BigNum3X3{
    public static void main(String[] args) {
        if(args.length!=9){
            System.out.println("Please enter 9 integer numbers");
        }else
        {
            int[][]arr=new int[3][3];
            int k=0;
            int maxNum=Integer.parseInt(args[0]);
            System.out.println("the given array: ");
            for(int i=0;i<3;i++){
                for (int j=0;j<3;j++){
                    arr[i][j]=Integer.parseInt(args[k]);
                    k++;
                    System.out.print(arr[i][j]+ " ");
                    if(maxNum<arr[i][j]){
                        maxNum=arr[i][j];
                    }
                }System.out.println();
            }System.out.println("the biggest number in the given array is "+maxNum);

        }
    }
}
/*
 * java N_BigNum3X3.java 1 2 3 4 5 6 7 8 9
 * the given array:
 * 1 2 3
 * 4 5 6
 * 7 8 9
 * the biggest number in the given array is 9
 */