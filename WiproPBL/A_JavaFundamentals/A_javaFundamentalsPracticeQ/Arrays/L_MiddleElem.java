class L_MiddleElem{
    public static void main(String[] args) {
        int[] a={1,3,4};
        int[]b={5,2,6};
        int[]c=new int[2];
        c[0]=a[1];
        c[1]=b[1];
        System.out.println(c[0]+" "+c[1]);//3 2
    }
}