public class Q_For {
    public static void main(String[] args) {
        for(int i=0;i<5 ;i++){
            System.out.print(i+" ");//0 1 2 3 4
        }
        System.out.println("\n");
        //System.out.println(i);//ERror
        
        for (int i=0,j=0;(i<5)&&(j<8);++i,j+=2){
            System.out.println(i+" "+j);
            // 0 0
            // 1 2
            // 2 4
            // 3 6
        }

    }
}
