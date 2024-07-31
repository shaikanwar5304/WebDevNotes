// Given two strings, a and b, print a new string which is made of the following
// combination-first character of a, the first character of b, second character of a, second
// character of b and so on.

// Any characters left, will go to the end of the result.
// Example1)

// i/p:Hello, World

// o/p:Hueolrllod
public class I_Alternate {
    public static void main(String[] args) {
        String s1="12345";
        String s2="678901";
        String s3="";
        if(s1.length()==0){
            s3=s2;}
        else if(s2.length()==0){
            s3=s1;}
        else{
        while (s1.length()>1 && s2.length()>1) {
            s3+=s1.substring(0,1)+s2.substring(0,1);
            s1=s1.substring(1);
            s2=s2.substring(1);
        }
        if(s1.length()==1){
            s3+=s1;
            s3+=s2;
        }else{
            s3+=s1.substring(0,1);
            s3+=s2;
            s3+=s1.substring(1);
        }
    }
    System.out.println(s3);//16273849501
}
}