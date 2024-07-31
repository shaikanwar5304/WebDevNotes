public class PyramidShape {
    public static void main(String[] args) {
        int n=10;
        int i;
        for (i=1;i<=n;i++){
            for (int j=1;j<=n-(i-1);j++){
                System.out.print(" ");
            }
            for (int k=1;k<=i;k++){
                System.out.print(k);
            }
            for (int l=i-1;l>=1;l--){
                System.out.print(l);
            }
            for(int m=(n-(i-1));m>=1;m--){
                System.out.print(" ");
            }
            System.out.println();
        }
    }
}
//           1
//          121
//         12321
//        1234321
//       123454321
//      12345654321
//     1234567654321
//    123456787654321
//   12345678987654321
//  12345678910987654321
