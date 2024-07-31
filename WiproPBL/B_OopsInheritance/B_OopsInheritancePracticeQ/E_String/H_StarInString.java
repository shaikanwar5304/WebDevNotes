// Write a Java program that accepts a string (with * 1n 1t). The program should return a
// new string in which the following characters are removed-*,the characters that are to the
// left and right of *

// Example)

// i/piab*cd

// o/n:ad
public class H_StarInString {
    public static void main(String[] args) {
        String s1="*in";//n
        String s2="Hi*All";
        String s3="noStar$";//noStar$
        if(s2.indexOf("*")==-1){
            System.out.println(s2);
        }else{
            String[] s1Arr=s2.split("\\*");
            if(s1Arr[0]!=""){
                s1Arr[0]=s1Arr[0].substring(0,s1Arr[0].length()-1);
            }if(s1Arr[1]!=""){
                s1Arr[1]=s1Arr[1].substring(1);
            }
            System.out.println(s1Arr[0]+s1Arr[1]);//HiAll
        }
}}
