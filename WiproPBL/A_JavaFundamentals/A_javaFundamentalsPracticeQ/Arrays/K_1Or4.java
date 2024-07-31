class K_1Or4{
    public static void main(String[] args) {
        int[]arr={1,4,1,10,4};
        boolean flag=true;
        for(int elem:arr){
            if(elem!=1 && elem!=4){
                flag=false;
                break;
            }
        }
        System.out.println(flag);//false
    }
}