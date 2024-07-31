class B_Calculator{
    static int powerInt(int a,int b){
        int pow=1;
        for(int i=0;i<b;i++){
            pow*=a;
        }
        return pow;
    }
    
    static double powerDouble(double a, int b) {
        double pow = 1;
        for (int i = 0; i < b; i++) {
            pow *= a;
        }
        return pow;
    }
    public static void main(String[] args) {
        System.out.println(B_Calculator.powerInt(3, 4));//81
        System.out.println(B_Calculator.powerDouble(2.5, 2));//6.25
    }
}