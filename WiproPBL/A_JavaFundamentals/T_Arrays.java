public class T_Arrays {
    public static void main(String[] args) {

        int[] arr1;//declaration : just telling what is the type of variable
        // arr1[0]=4; //Error : bcz memory is not allocated
        arr1= new int[5];//initialization allocating memory
        System.out.println(arr1[0]);//0 
        //k= new int[2];// errror : k is not declared
        char[] c1= new char[3];
        System.out.println(c1[0]);//

        int[] arr3={1,2,3,4};
        System.out.println(arr3);//[I@372f7a8d may be address
        System.out.println(arr3[0]);//1
        //int[] arr2={3.23f,34.23f};// Error type mismatch
        
        arr3=new int[]{3,3,6,2,343};
        System.out.println(arr3.length);//5

        //int[4] arr4; syntax err
        //int arr4[4];sysntax
        //int arr4[4]=new int[4]; syn err
        
        //int arr4[]=new int[5]{1,2,3,4,5}; ERror

    }
}
