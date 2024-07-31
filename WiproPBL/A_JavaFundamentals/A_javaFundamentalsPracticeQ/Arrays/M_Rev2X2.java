class M_Rev2X2{
    public static void main(String[] args) {
        String temp;
        if(args.length!=4){
            System.out.println("please enter 4 integers only");
        }else{
            String[][] arr={{args[3],args[2]},{args[1],args[0]}};
            for(int i=0;i<arr.length;i++){
                for(int j=0;j<arr.length;j++){
                    System.out.print(arr[i][j]+" ");
                }System.out.println();
            }
        }
    }
}
/*
 * java M_Rev2X2.java 1 2 3 4
 * 4 3
 * 2 1
 */