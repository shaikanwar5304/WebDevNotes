//Write a Program to check whether a given String is palindrome or not.
public class A_Palindrome {
    public static void main(String[] args) {
        String s1="madam";
        String s2="hello";
        StringBuffer s3= new StringBuffer(s2);
        StringBuffer s4=new StringBuffer(s3);
        s3=s3.reverse();
        System.out.println(s3.equals(s4));//false
    }
}
